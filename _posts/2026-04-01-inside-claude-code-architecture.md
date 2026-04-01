---
layout: post
title: "Inside Claude Code: An Architecture Deep Dive"
date: 2026-04-01
description: A walkthrough of how Claude Code works internally — from its layered architecture and query loop to its tool system and permission model.
tags: llms ai-agents developer-tools
categories: technical-blog
toc:
  beginning: true
---

*This is a live document as I explore the Claude Code leaked repo — this is mainly LLM generated as I navigate the repo and study how it implements things like memory, compaction, agentic search, etc.*

Claude Code is Anthropic's terminal-based AI coding assistant. I recently spent some time digging through the source code (v2.1.88), and the architecture is a fascinating case study in building an agentic AI system that's both responsive and safe. This post walks through the key design decisions and how it all fits together.

If you're interested in more of my technical writing on AI, LLMs, and retrieval systems, check out my [writing page](/writing/).

## The 30,000-Foot View

Claude Code is a TypeScript application built on a **custom React/Ink TUI** (Terminal User Interface). The architecture follows a layered pattern where each layer has clear responsibilities:

1. **Entry Points** route to the right mode (CLI, MCP server, SDK, daemon)
2. **Bootstrap** loads configuration, telemetry, auth, and networking
3. **UI Layer** renders the terminal interface using a custom Ink/React renderer
4. **QueryEngine** orchestrates the conversation loop
5. **Tool System** provides 50+ tools the model can invoke, each with its own permission logic
6. **Services & State** underpin everything: API clients, analytics, MCP servers, memory, history

The key insight is that the **QueryEngine is the heart of the system**. It sits between the UI and the Claude API, managing the agentic loop of *send message -> get response -> execute tools -> send results -> repeat*.

## Startup: Designed for Speed

One of the first things that stands out is how aggressively the startup is optimized. The entry point (`cli.tsx`) uses a **fast-path routing** strategy:

- Trivial commands like `--version` are handled with *zero module imports* — no loading the full application just to print a version string.
- Only the default interactive path loads the heavy `main.tsx` orchestrator.
- Initialization is memoized and parallelized: network pre-connection, auth prefetching, and repository detection all happen concurrently.
- Setup and command loading run in parallel via `Promise.all`.
- The REPL is the final step: it dynamically imports the React components and starts the Ink terminal renderer.

The phases break down as:

| Phase | What Happens |
|-------|-------------|
| Fast-path routing | Handle `--version`, `--mcp`, `--daemon` with minimal imports |
| Initialization | Config loading, proxy/TLS setup, TCP pre-connect to API |
| Telemetry & Permissions | OpenTelemetry setup, permission context, plugin/skill registration |
| Setup | Working directory, hooks, file watchers, session memory |
| Command & Agent Loading | Slash commands and agent definitions loaded in parallel |
| REPL Launch | React/Ink components rendered, event loop starts |

## The Query Loop: Where the Magic Happens

The most important flow in the entire codebase is the **query loop** — an async generator that processes every message you send. Here's how it works:

1. **Prepare**: Build the system prompt, gather user context (CLAUDE.md files, git status, date), normalize message history, and apply compaction if the context is getting long.

2. **Call Claude API**: Make a streaming POST to the Messages API with the full conversation history, system prompt, and all 50+ tool schemas.

3. **Stream Response**: As tokens arrive, the async generator `yield`s them to the UI, which renders Claude's response character by character.

4. **Tool Execution**: If Claude's response includes `tool_use` blocks (e.g., "read this file" or "run this command"), the loop pauses streaming, executes the tools with permission checks, and loops back to send the results to Claude.

5. **Completion**: When Claude responds with just text (no tool calls), the loop terminates.

The async generator pattern is a particularly elegant choice here. It gives the UI fine-grained control over rendering while keeping the core loop logic clean. The loop also handles recovery paths: context compaction when the conversation gets too long, output limit escalation, fallback model retries, and graceful abort on user interrupts.

## The Tool System

Every capability Claude can invoke is a **Tool** — a well-defined interface with identity, schema, execution logic, and permission checks:

```
Tool<Input, Output, Progress>
  ├── name, description          (identity)
  ├── inputSchema (Zod)          (validation)
  ├── call(input, context)       (execution)
  ├── checkPermissions(input)    (safety)
  ├── isReadOnly()               (concurrency hint)
  └── renderToolUseMessage()     (UI rendering)
```

The 50+ tools are organized into categories:

- **File Tools**: Read, Edit, Write, Glob, Grep, NotebookEdit
- **Shell Tools**: Bash, PowerShell
- **Web Tools**: WebFetch, WebSearch
- **Agent Tools**: AgentTool (spawn sub-agents), SendMessage, TeamCreate
- **Plan Tools**: EnterPlan, ExitPlan, Worktree
- **Task Tools**: TaskCreate, TaskGet, TaskUpdate, TaskList
- **MCP Tools**: Dynamic tools from MCP servers
- **System Tools**: AskUser, ToolSearch, Skill

A critical design decision: **read-only tools run in parallel batches** for speed, while **write tools run sequentially** to prevent race conditions. This means Claude can read multiple files simultaneously but edits happen one at a time.

## The Permission Model

Safety is baked into the architecture through a multi-layer permission system. When a tool call arrives, it passes through four gates:

1. **Static Rules** from `settings.json` — pattern-matched against tool name and input
2. **Tool Logic** — each tool's own `checkPermissions()` method (e.g., BashTool checks for dangerous commands)
3. **Permission Mode** — `bypassPermissions` allows everything, `auto` uses a classifier, `default` prompts the user, `plan` denies writes
4. **User Prompt** — the terminal dialog where you choose allow once, allow always, or deny

This layered approach means there are multiple independent checks. Even if one layer misses something, the next one can catch it. The permission mode system also enables different workflows — you can run in a more autonomous mode for trusted operations or lock things down for sensitive codebases.

## Layered Architecture

The dependency model is strictly layered:

| Layer | Responsibility | Key Components |
|-------|---------------|----------------|
| **Presentation** | Terminal rendering | Ink renderer, React components, screens |
| **Application** | Flow orchestration | QueryEngine, commands, skills, hooks |
| **Domain** | Core abstractions | Tool interface, AppState, permissions |
| **Infrastructure** | I/O and persistence | API client, analytics, MCP, history, memory |

Dependencies flow **downward only**. The Presentation layer knows about components and screens but not about API calls. The Domain layer defines what a Tool *is* without knowing how any specific tool works. This separation means you can understand any layer independently.

## State Management

All reactive UI state lives in a single `AppState` store — a pub/sub pattern exposed via React hooks (`useAppState`, `useSetAppState`). The store holds 300+ properties covering settings, tasks, permissions, MCP clients, plugins, and UI state.

The unidirectional data flow is clean:

**Components** read state -> **Input handlers** trigger actions -> **QueryEngine** processes them -> **State updates** re-render components

There's also a separate **bootstrap state** container with 150+ session properties (metrics, auth, UI config) that's populated during startup and read throughout the session lifecycle.

## Inter-Agent Communication

Claude Code supports spawning sub-agents that coordinate via a task system backed by file-locked JSON. The leader agent creates tasks with dependencies, teammates claim tasks (conflict-safe via file locks), and results flow back through task status updates. Direct communication uses `SendMessageTool` over Unix Domain Sockets.

This is a pragmatic design — file-based coordination avoids the complexity of a proper message broker while still supporting concurrent work across multiple agent processes.

## End-to-End: What Happens When You Type a Message

To make this concrete, here's what happens when you type `"Fix the bug in auth.ts"`:

1. Keystrokes flow through Ink's event system to `PromptInput`, then `handlePromptSubmit()` checks for slash commands and passes the text to the REPL.
2. A `UserMessage` is created with your text, added to conversation history, and recorded to the session transcript.
3. Context is gathered: git status, CLAUDE.md files, current date — memoized per session.
4. The QueryEngine calls `queryLoop()`, which makes a streaming POST to the Messages API with the full history, system prompt, and tool schemas.
5. Tokens stream back and the UI renders Claude's response incrementally.
6. Claude decides to read the file — the tool orchestration layer validates input, checks permissions, fires pre/post hooks, executes the read, and returns the result.
7. The file contents go back to Claude, who analyzes the bug and calls `FileEdit` to fix it. The permission system shows you the diff for approval.
8. After the fix, Claude responds with just text. The loop terminates, and the prompt reappears.
9. Throughout, the conversation is persisted as JSONL, inputs are logged to history, analytics events are fired, and token costs are tracked.

## Deep Dive: The Grep Tool (Agentic Search)

The Grep tool is one of the most frequently invoked tools in the agentic loop — a read-only, concurrency-safe wrapper around [ripgrep](https://github.com/BurntSushi/ripgrep) that the model uses to search codebases. It's a good example of how much engineering goes into making a single tool robust.

The architecture is three layers deep: `GrepTool.ts` (tool logic, schema, permissions, result formatting) -> `ripgrep.ts` (process spawning, timeout, retry, error handling) -> the native `rg` binary.

The input schema accepts regex patterns, file/directory paths, glob filters, output modes (`files_with_matches`, `content`, or `count`), context lines, case sensitivity, and multiline matching. It uses `semanticNumber` and `semanticBoolean` wrappers to handle the model sending strings like `"true"` instead of actual booleans — a pragmatic concession to LLM behavior.

### Execution and Error Recovery

When `GrepTool.call()` runs, it builds ripgrep arguments (always including `--hidden` and auto-excluding VCS dirs), resolves the `rg` binary (system install -> embedded in Bun binary -> vendored platform-specific binary), and spawns the process with a 20-second timeout (60s on WSL).

The error recovery is particularly interesting:

- **EAGAIN retry**: In resource-constrained environments (Docker, CI), ripgrep can fail when it spawns too many threads. The wrapper detects this and retries with `-j 1` (single-threaded) for that call only — it doesn't persist single-threaded mode globally, which would cause timeouts on large repos.
- **Timeout with partial results**: If rg times out but has partial stdout, the last line is dropped (may be incomplete) and partial results are returned. If there's no output at all, a `RipgrepTimeoutError` is thrown so the model knows the search didn't complete.
- **File deletion races**: `files_with_matches` mode uses `Promise.allSettled` for stat calls, so a file deleted between rg's scan and the stat doesn't crash the whole search.

### Pagination for Multi-Round Search

The default `head_limit` of **250** prevents context bloat. When truncation occurs, the output includes a pagination marker that tells the model "there are more results." It can then call Grep again with `offset: 250` to see the next page. This is how the model implements multi-round search — paginating through large result sets across multiple tool calls.

In `files_with_matches` mode, results are sorted by modification time (most recent first), a heuristic that the most task-relevant files were touched recently.

### Security

The tool blocks UNC paths (`\\server\share`) to prevent NTLM credential leaks on Windows, applies permission-based ignore patterns from settings (e.g., `node_modules`, `.env` files) as automatic `--glob !pattern` arguments, and the system prompt explicitly instructs the model to never run `grep` or `rg` via BashTool — always use this tool, which enforces the correct permission and ignore-pattern rules.

## Deep Dive: Memory Management & Context Compaction

Claude Code operates within a finite context window (~200K tokens). Conversations with heavy tool use can fill this quickly. The system uses a **multi-layered compaction strategy** that operates at three timescales to keep conversations going indefinitely.

### The Compaction Pipeline

Every turn, before sending messages to the API, the system runs a pipeline of five layers:

| Layer | Mechanism | API Call? | Description |
|-------|-----------|-----------|-------------|
| 1. Tool Result Budget | `applyToolResultBudget()` | No | Persist oversized tool results to disk, replace with preview + filepath |
| 2. Snip Compaction | `snipCompactIfNeeded()` | No | Clear old tool result contents to `[Old tool result content cleared]` |
| 3. Microcompaction | `microcompactMessages()` | No | Remove old tool results using `cache_edits` API or time-based clearing |
| 4. Context Collapse | `contextCollapse.applyCollapsesIfNeeded()` | No | Model-side projection over conversation segments |
| 5. Autocompact | `autoCompactIfNeeded()` | Yes (sometimes) | Full compaction if still over threshold |

Each layer reduces the token count. If an earlier layer brings the count below the autocompact threshold, later layers become no-ops. This cascading design avoids expensive API calls when lightweight compaction is sufficient.

### Microcompaction: Preserving the Prompt Cache

The most clever layer. Microcompaction uses the `cache_edits` API to delete old tool results *without invalidating the prompt cache*. No message content is modified — edits are piggybacked on the next API request. The system tracks compactable tools (Bash, Glob, Grep, WebSearch, WebFetch, FileEdit, FileWrite, FileRead) and keeps only the N most recent results.

As a fallback, if the gap since the last assistant message exceeds ~1 hour (meaning the prompt cache has expired anyway), it clears old tool results directly since the cache is cold.

### Autocompact: Two Strategies

Autocompact triggers when tokens reach `effectiveContextWindow - 13,000`. It tries two strategies in order:

**Strategy A — Session Memory Compaction (lightweight)**: Uses a session memory summary file maintained in the background (by a post-sampling hook). The summary is a structured document with sections for current state, task specification, files, workflow, errors, and learnings — each capped at ~2,000 tokens, total ~12,000. SM-compact loads this summary, preserves recent messages (min 10K tokens, max 40K tokens, min 5 text-block messages), and replaces older messages with the summary. No API call needed.

**Strategy B — Full Conversation Compaction (fallback)**: If SM-compact isn't available or wasn't effective, a forked agent summarizes the entire conversation. It receives a structured prompt covering primary request, technical concepts, files and code snippets, errors and fixes, problem solving, all user messages (verbatim), pending tasks, and current work. The agent returns an analysis scratchpad plus a summary. Post-compaction, the system restores up to 5 recently-used files (50K token budget) and re-injects active skills and plan state.

A circuit breaker stops retrying after 3 consecutive autocompact failures to avoid API spam.

### The Lifecycle of a Long Conversation

Putting it all together, here's what a typical long session looks like:

| Phase | Tokens | What Happens |
|-------|--------|-------------|
| Turn 1 | ~5K | No compaction needed |
| Turn 5 | ~50K | Session memory extraction triggers for the first time |
| Turn 10 | ~90K | Microcompact clears old tool results each turn |
| Turn 15 | ~110K | Session memory updates (15K new tokens since last) |
| Turn 20 | ~135K | Snip clears more old tool contents |
| Turn 25 | ~155K | **Autocompact triggers** — SM-compact or full compaction |
| Post-compact | ~60-80K | Fresh start, session memory keeps tracking new work |
| Turn 26+ | Growing | Cycle continues; if context fills again, another autocompact |

The proactive approach (compacting *before* hitting the API limit) is the default, with a 13K-token buffer for headroom. There's also a reactive mode (feature-gated) that only compacts after the API returns a "prompt too long" error.

## Why It's Structured This Way

A few architectural decisions worth calling out:

- **Async generators everywhere**: The streaming nature of LLM responses demands non-blocking, incremental processing. Async generators let the query loop yield events to the UI as they arrive, rather than waiting for the full response.
- **Custom Ink renderer**: Terminal UIs need pixel-level control. The custom Ink implementation (React reconciliation + Yoga layout) gives Claude Code the same component model as web React, but targeting terminal cells instead of DOM nodes.
- **Tool interface as the core abstraction**: By making every capability a Tool with a uniform interface, the system can add new tools without changing the query loop, permission system, or UI rendering. MCP tools from external servers plug in identically.
- **Multi-layer permission system**: The cascading permission model (rules -> tool logic -> mode -> classifier -> user) balances safety with usability — safe operations auto-approve, dangerous ones require explicit consent.
- **Feature flags via compile-time elimination**: Bun's `feature()` intrinsic lets Anthropic ship a single binary with 108+ internal modules completely stripped out. The published CLI contains zero internal code.
- **Bootstrap state as global mutable singleton**: While controversial, this pattern enables fast startup (no DI container) and easy access from any module. It's the "session object" that everything reads from.
- **Fire-and-forget parallelism**: Startup parallelizes aggressively — network pre-connection, auth prefetch, repository detection, and command loading all run concurrently. This is why Claude Code starts fast despite doing a lot of initialization.

Claude Code is a good example of how to build an agentic system that's responsive (streaming, parallelism), safe (layered permissions, hooks), and maintainable (layered architecture, single state store). The codebase is large (~512K LOC across 1,884 files), but the core loop is surprisingly readable once you know where to look.
