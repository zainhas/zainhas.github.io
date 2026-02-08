---
layout: page
permalink: /talks/
title: Talks
description: Conference talks, workshops, and presentations.
nav: true
nav_order: 4
---

Conference talks, workshops, and live coding sessions on RAG, vector databases, multimodal AI, LLM fine-tuning, and coding agents. Want me to speak at your event? Reach out via my social links.

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.video-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.video-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

html[data-theme="dark"] .video-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.video-embed {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  cursor: pointer;
  background: #0f172a;
}

.video-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-embed .video-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.video-card:hover .video-thumb {
  opacity: 0.9;
}

.video-embed .play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 44px;
  pointer-events: none;
  transition: transform 0.2s ease;
}

.video-card:hover .play-btn {
  transform: translate(-50%, -50%) scale(1.08);
}

.video-embed .play-btn svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
}

.video-info {
  padding: 0.875rem 1.125rem;
}

.video-title {
  font-size: 0.925rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: var(--global-text-color);
  line-height: 1.4;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-meta {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.25rem;
}

.video-channel {
  font-size: 0.75rem;
  color: var(--global-theme-color);
  font-weight: 500;
}

@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".video-embed[data-id]").forEach(function(el) {
    var id = el.getAttribute("data-id");
    // Set thumbnail
    var img = document.createElement("img");
    img.src = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
    img.alt = "Video thumbnail";
    img.className = "video-thumb";
    img.loading = "lazy";
    el.appendChild(img);
    // Add play button
    var btn = document.createElement("div");
    btn.className = "play-btn";
    btn.innerHTML = '<svg viewBox="0 0 68 48"><path d="M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-2.8.7-4.6 3.2-5.4 6.1C0 13 0 24 0 24s0 11 1.5 16.3c.8 2.9 2.5 5.4 5.4 6.2C12.2 48 34 48 34 48s21.8 0 27.1-1.5c2.8-.7 4.6-3.2 5.4-6.2C68 35 68 24 68 24s0-11-1.5-16.3z" fill="red"/><path d="M45 24L27 14v20" fill="#fff"/></svg>';
    el.appendChild(btn);
    // Click to load iframe
    el.addEventListener("click", function() {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + id + "?autoplay=1";
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay; encrypted-media");
      iframe.style.border = "0";
      el.textContent = "";
      el.appendChild(iframe);
    });
  });
});
</script>

<div class="video-grid">

<!-- 2025-11-19 -->
<div class="video-card">
  <div class="video-embed" data-id="oeehZQ9Embg">
  </div>
  <div class="video-info">
    <div class="video-title">How advanced tool calling transforms agentic use cases: A conversation with Moonshot AI</div>
    <div class="video-meta">58:50 • 619 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-08-27 -->
<div class="video-card">
  <div class="video-embed" data-id="1cHvhv3U1iY">
  </div>
  <div class="video-info">
    <div class="video-title">GPT-OSS: Deep Dive + Live Q&A with OpenAI's Dominik Kundel</div>
    <div class="video-meta">58:40 • 1K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-07-31 -->
<div class="video-card">
  <div class="video-embed" data-id="9AwRQh9rMyM">
  </div>
  <div class="video-info">
    <div class="video-title">LLM-as-a-Judge Evals: Comparing Kimi, Qwen, and GLM</div>
    <div class="video-meta">1:04:26 • 434 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-07-16 -->
<div class="video-card">
  <div class="video-embed" data-id="dFHEgsJTmDI">
  </div>
  <div class="video-info">
    <div class="video-title">A new course on Retrieval Augmented Generation (RAG) is live!</div>
    <div class="video-meta">1:40 • 3.9K views</div>
    <div class="video-channel">DeepLearningAI</div>
  </div>
</div>

<!-- 2025-06-14 -->
<div class="video-card">
  <div class="video-embed" data-id="JbkRgq_QzYI">
  </div>
  <div class="video-info">
    <div class="video-title">End to end coding agent examples</div>
    <div class="video-meta">7:11 • 89 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-06-13 -->
<div class="video-card">
  <div class="video-embed" data-id="3ZIwFeitLRY">
  </div>
  <div class="video-info">
    <div class="video-title">Code Execution for Coding Agents</div>
    <div class="video-meta">4:56 • 61 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-06-12 -->
<div class="video-card">
  <div class="video-embed" data-id="ARIg9kcjxs4">
  </div>
  <div class="video-info">
    <div class="video-title">Retrieval and Context in coding agents</div>
    <div class="video-meta">17:31 • 40 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-06-11 -->
<div class="video-card">
  <div class="video-embed" data-id="WZJTmTCmi_M">
  </div>
  <div class="video-info">
    <div class="video-title">Function Calling in Coding Agents</div>
    <div class="video-meta">20:01 • 42 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-06-03 -->
<div class="video-card">
  <div class="video-embed" data-id="lxgfhPQ1GSI">
  </div>
  <div class="video-info">
    <div class="video-title">How to build a coding agent from scratch</div>
    <div class="video-meta">59:03 • 918 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-05-05 -->
<div class="video-card">
  <div class="video-embed" data-id="SNWLv2ULNaI">
  </div>
  <div class="video-info">
    <div class="video-title">Learning Together Episode 1: Matryoshka Principles for Adaptive Intelligence</div>
    <div class="video-meta">49:21 • 387 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-05-01 -->
<div class="video-card">
  <div class="video-embed" data-id="DOjEuvaNiGk">
  </div>
  <div class="video-info">
    <div class="video-title">Finetuning 3.0 – How to finetune models on Together AI</div>
    <div class="video-meta">1:01:28 • 717 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-04-13 -->
<div class="video-card">
  <div class="video-embed" data-id="pnacsAWnjV8">
  </div>
  <div class="video-info">
    <div class="video-title">ColPali's Vision-Powered RAG for Enterprise Documents | PyData Global 2024</div>
    <div class="video-meta">35:52 • 403 views</div>
    <div class="video-channel">PyData</div>
  </div>
</div>

<!-- 2025-02-06 -->
<div class="video-card">
  <div class="video-embed" data-id="Uzi-cGmRalI">
  </div>
  <div class="video-info">
    <div class="video-title">DeepSeek-R1: How It Works, Simplified!</div>
    <div class="video-meta">1:00:55 • 1.4K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-01-28 -->
<div class="video-card">
  <div class="video-embed" data-id="QpxDEPXPZfI">
  </div>
  <div class="video-info">
    <div class="video-title">Kernels: High Performance Building Blocks for AI</div>
    <div class="video-meta">57:35 • 615 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2025-01-16 -->
<div class="video-card">
  <div class="video-embed" data-id="e9-bzNVlsQ4">
  </div>
  <div class="video-info">
    <div class="video-title">Fine-tuning Large Language Models</div>
    <div class="video-meta">1:02:31 • 1.5K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2024-12-06 -->
<div class="video-card">
  <div class="video-embed" data-id="_HFxuQUg51k">
  </div>
  <div class="video-info">
    <div class="video-title">A Deep Dive Into The RedPajama Datasets</div>
    <div class="video-meta">1:01:29 • 287 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2024-10-31 -->
<div class="video-card">
  <div class="video-embed" data-id="BtMXkUr5tj4">
  </div>
  <div class="video-info">
    <div class="video-title">Scaling Vector Database Usage Without Breaking the Bank - Quantization and Adaptive Retrieval</div>
    <div class="video-meta">1:11:24 • 391 views</div>
    <div class="video-channel">Toronto Machine Learning Series (TMLS)</div>
  </div>
</div>

<!-- 2024-10-14 -->
<div class="video-card">
  <div class="video-embed" data-id="IluARWPYAUc">
  </div>
  <div class="video-info">
    <div class="video-title">How to Build Multimodal Document RAG with Llama 3.2 Vision and ColQwen2</div>
    <div class="video-meta">59:50 • 4K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<!-- 2024-10-02 -->
<div class="video-card">
  <div class="video-embed" data-id="LQHyyOsT61k">
  </div>
  <div class="video-info">
    <div class="video-title">Building Scalable Multimodal Search Applications with Python</div>
    <div class="video-meta">25:11 • 200 views</div>
    <div class="video-channel">EuroPython Conference</div>
  </div>
</div>

<!-- 2024-09-18 -->
<div class="video-card">
  <div class="video-embed" data-id="Ilkxb2Qe3xY">
  </div>
  <div class="video-info">
    <div class="video-title">RAG Insights w/ Sebastian Witalec & Zain Hasan (Weaviate)</div>
    <div class="video-meta">56:20 • 132 views</div>
    <div class="video-channel">AI Tinkerers Ottawa</div>
  </div>
</div>

<!-- 2024-07-31 -->
<div class="video-card">
  <div class="video-embed" data-id="RlghyhIPXJY">
  </div>
  <div class="video-info">
    <div class="video-title">Learn Advanced RAG Tricks with Zain</div>
    <div class="video-meta">57:58 • 2K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<!-- 2024-07-25 -->
<div class="video-card">
  <div class="video-embed" data-id="CiUNt-J8ZVY">
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector Databases for Multimodal Search and Retrieval Augmented Generation</div>
    <div class="video-meta">1:07:17 • 480 views</div>
    <div class="video-channel">Data Phoenix Events</div>
  </div>
</div>

<!-- 2024-07-14 -->
<div class="video-card">
  <div class="video-embed" data-id="LGcQEz4xSTQ">
  </div>
  <div class="video-info">
    <div class="video-title">Make Your RAG Workflow "WOW" with Weaviate and Generative Feedback Loops</div>
    <div class="video-meta">29:42 • 231 views</div>
    <div class="video-channel">Yujian Tang</div>
  </div>
</div>

<!-- 2024-06-27 -->
<div class="video-card">
  <div class="video-embed" data-id="9pG1pspgELU">
  </div>
  <div class="video-info">
    <div class="video-title">Powering Vector Search with Real-Time Data</div>
    <div class="video-meta">1:04:25 • 768 views</div>
    <div class="video-channel">Quix</div>
  </div>
</div>

<!-- 2024-06-26 -->
<div class="video-card">
  <div class="video-embed" data-id="Izt1cOeptx8">
  </div>
  <div class="video-info">
    <div class="video-title">LLM Bootcamp - Day 2 Highlights</div>
    <div class="video-meta">42 sec • 126 views</div>
    <div class="video-channel">Data Science Dojo</div>
  </div>
</div>

<!-- 2024-06-18 -->
<div class="video-card">
  <div class="video-embed" data-id="6Emcpz_f9EQ">
  </div>
  <div class="video-info">
    <div class="video-title">Vector Quantization: The Vector Clubhouse Episode 2</div>
    <div class="video-meta">59:40 • 325 views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<!-- 2024-06-12 -->
<div class="video-card">
  <div class="video-embed" data-id="iD5hwrTSJmo">
  </div>
  <div class="video-info">
    <div class="video-title">Using Retrieval Augmented Generation (RAG) in Production | Weaviate x Merantix AI Campus</div>
    <div class="video-meta">59:00 • 294 views</div>
    <div class="video-channel">Merantix AI Campus</div>
  </div>
</div>

<!-- 2024-06-11 -->
<div class="video-card">
  <div class="video-embed" data-id="RZl4pe88sUU">
  </div>
  <div class="video-info">
    <div class="video-title">Advanced Retrieval-Augmented Generation Techniques</div>
    <div class="video-meta">42:32 • 3.1K views</div>
    <div class="video-channel">Plain Schwarz</div>
  </div>
</div>

<!-- 2024-05-16 -->
<div class="video-card">
  <div class="video-embed" data-id="nZQ0RMVyykg">
  </div>
  <div class="video-info">
    <div class="video-title">Better Chatbots with Advanced RAG Techniques</div>
    <div class="video-meta">49:12 • 578 views</div>
    <div class="video-channel">Toronto Machine Learning Society (TMLS)</div>
  </div>
</div>

<!-- 2024-05-15 -->
<div class="video-card">
  <div class="video-embed" data-id="2O81YU_VHDc">
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector Databases for Multimodal Embeddings and Search - NDC London 2024</div>
    <div class="video-meta">57:21 • 3.4K views</div>
    <div class="video-channel">NDC Conferences</div>
  </div>
</div>

<!-- 2024-05-01 -->
<div class="video-card">
  <div class="video-embed" data-id="gnLMGzhv1b8">
  </div>
  <div class="video-info">
    <div class="video-title">How I Built a Super-Doctor Using Advanced RAG</div>
    <div class="video-meta">21:19 • 763 views</div>
    <div class="video-channel">John Snow Labs</div>
  </div>
</div>

<!-- 2024-04-19 -->
<div class="video-card">
  <div class="video-embed" data-id="lpdN3aw-yTg">
  </div>
  <div class="video-info">
    <div class="video-title">Vector embedding models for AI</div>
    <div class="video-meta">40:57 • 1.5K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<!-- 2024-04-11 -->
<div class="video-card">
  <div class="video-embed" data-id="rCFcZDs4V14">
  </div>
  <div class="video-info">
    <div class="video-title">Building Chatbots with Retrieval-Augmented Generation Techniques | Conf42 LLMs 2024</div>
    <div class="video-meta">32:01 • 94 views</div>
    <div class="video-channel">Conf42</div>
  </div>
</div>

<!-- 2024-03-14 -->
<div class="video-card">
  <div class="video-embed" data-id="b5DtAl8VulY">
  </div>
  <div class="video-info">
    <div class="video-title">Building Multi-Modal Search and RAG with Vector Databases | LLMOps</div>
    <div class="video-meta">51:38 • 1.2K views</div>
    <div class="video-channel">LLMOps Space</div>
  </div>
</div>

<!-- 2024-02-20 -->
<div class="video-card">
  <div class="video-embed" data-id="-0m2dZJ6zos">
  </div>
  <div class="video-info">
    <div class="video-title">Matryoshka Embeddings - Weaviate Podcast #89</div>
    <div class="video-meta">1:12:15 • 2.1K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<!-- 2023-11-14 -->
<div class="video-card">
  <div class="video-embed" data-id="3WUobZryyok">
  </div>
  <div class="video-info">
    <div class="video-title">Building Multi-Modal Search with Vector Databases</div>
    <div class="video-meta">1:01:12 • 18K views</div>
    <div class="video-channel">DeepLearningAI</div>
  </div>
</div>

<!-- 2023-10-18 -->
<div class="video-card">
  <div class="video-embed" data-id="kS9DazKNX-Y">
  </div>
  <div class="video-info">
    <div class="video-title">Semantic Search: A Deep Dive Into Vector Databases</div>
    <div class="video-meta">1:02:12 • 19K views</div>
    <div class="video-channel">Developer Voices</div>
  </div>
</div>

<!-- 2023-10-17 -->
<div class="video-card">
  <div class="video-embed" data-id="prO9tkKjTqw">
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector DBs to Scale Multimodal Embeddings, Retrieval & Generation</div>
    <div class="video-meta">41:17 • 459 views</div>
    <div class="video-channel">OpenSource Connections</div>
  </div>
</div>

<!-- 2023-08-21 -->
<div class="video-card">
  <div class="video-embed" data-id="poRHLfVWg7E">
  </div>
  <div class="video-info">
    <div class="video-title">Going Beyond Vector Search and RAG - Semantic Kernel Community</div>
    <div class="video-meta">21:24 • 1.2K views</div>
    <div class="video-channel">Alex Chao</div>
  </div>
</div>

<!-- 2023-08-18 -->
<div class="video-card">
  <div class="video-embed" data-id="Hz_hzAZ-gvU">
  </div>
  <div class="video-info">
    <div class="video-title">Using Weaviate with the Semantic Kernel pt.1 | Semantic Kernel Community</div>
    <div class="video-meta">20:39 • 878 views</div>
    <div class="video-channel">Alex Chao</div>
  </div>
</div>

<!-- 2023-08-17 -->
<div class="video-card">
  <div class="video-embed" data-id="P5VpaUyh8Iw">
  </div>
  <div class="video-info">
    <div class="video-title">Vector Search - A gentle introduction</div>
    <div class="video-meta">44:27 • 1K views</div>
    <div class="video-channel">Open Data Science</div>
  </div>
</div>

<!-- 2023-08-11 -->
<div class="video-card">
  <div class="video-embed" data-id="riwPb2hSrEI">
  </div>
  <div class="video-info">
    <div class="video-title">ControlNet for Interior Design & Weaviate Vector Database for Multimodal AI</div>
    <div class="video-meta">55:45 • 366 views</div>
    <div class="video-channel">TwelveLabs</div>
  </div>
</div>

<!-- 2023-07-13 -->
<div class="video-card">
  <div class="video-embed" data-id="YTIDj7jeRbs">
  </div>
  <div class="video-info">
    <div class="video-title">Computer Vision Applications at Scale with Vector Databases</div>
    <div class="video-meta">35:11 • 268 views</div>
    <div class="video-channel">Voxel51</div>
  </div>
</div>

<!-- 2023-06-20 -->
<div class="video-card">
  <div class="video-embed" data-id="h4yC0MGWrHQ">
  </div>
  <div class="video-info">
    <div class="video-title">A gentle introduction to Vector Databases | Conf42 Machine Learning 2023</div>
    <div class="video-meta">44:48 • 641 views</div>
    <div class="video-channel">Conf42</div>
  </div>
</div>

<!-- 2023-04-06 -->
<div class="video-card">
  <div class="video-embed" data-id="RsplYfp8f7Q">
  </div>
  <div class="video-info">
    <div class="video-title">Using Weaviate for building Generative AI apps</div>
    <div class="video-meta">26:48 • 1.7K views</div>
    <div class="video-channel">Hasgeek TV</div>
  </div>
</div>

<!-- 2023-01-04 -->
<div class="video-card">
  <div class="video-embed" data-id="pP8CZbDkUKU">
  </div>
  <div class="video-info">
    <div class="video-title">Sam Bean, Zain Hasan, and John Trengrove on You.com and Spark - Weaviate Podcast #32</div>
    <div class="video-meta">51:35 • 413 views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

</div>
