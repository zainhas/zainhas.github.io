---
layout: page
permalink: /writing/
title: writing
description: Technical articles and insights on AI, machine learning, and vector databases.
nav: true
nav_order: 3
---

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.blog-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: fit-content;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.blog-thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--global-divider-color);
}

.blog-content {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
  line-height: 1.3;
}

.blog-title a {
  color: inherit;
  text-decoration: none;
}

.blog-title a:hover {
  color: var(--global-theme-color);
}

.blog-description {
  font-size: 0.95rem;
  color: var(--global-text-color-light);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.blog-date {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.blog-tag {
  background: var(--global-theme-color);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.external-link-icon {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

.external-posts {
  margin-top: 3rem;
}

.external-tag {
  background: #2563eb;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.featured-section {
  margin-bottom: 3rem;
}

.featured-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.featured-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.featured-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--global-text-color);
}

.featured-title a {
  color: inherit;
  text-decoration: none;
}

.featured-title a:hover {
  color: var(--global-theme-color);
}

.featured-description {
  font-size: 1.1rem;
  color: var(--global-text-color-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .featured-card {
    grid-template-columns: 1fr;
  }
  
  .featured-image {
    height: 200px;
  }
  
  .featured-content {
    padding: 1.5rem;
  }
}
</style>

## Featured Article

<div class="featured-card">
  <img src="/assets/img/posts/2024-07-25-advanced-rag/hero.png" alt="Advanced RAG Techniques" class="featured-image">
  <div class="featured-content">
    <h2 class="featured-title">
      <a href="{{ '/blog/2024/advanced-rag/' | relative_url }}">Advanced RAG Techniques</a>
    </h2>
    <p class="featured-description">
      Learn how to improve the individual indexing, retrieval and generation parts of your RAG pipeline! From semantic chunking to query rewriting, discover practical tips and tricks used in production systems.
    </p>
    <div class="blog-meta">
      <span class="blog-date">July 25, 2024</span>
      <div class="blog-tags">
        <span class="blog-tag">RAG</span>
        <span class="blog-tag">Vector Databases</span>
        <span class="blog-tag">AI</span>
      </div>
    </div>
  </div>
</div>

## Recent Articles

<div class="blog-grid">

<div class="blog-card">
  <img src="/assets/img/posts/2024-06-18-openais-matryoshka-embeddings/hero.png" alt="Matryoshka Embeddings" class="blog-thumbnail">
  <div class="blog-content">
    <h3 class="blog-title">
      <a href="{{ '/blog/2024/matryoshka-embeddings/' | relative_url }}">OpenAI's Matryoshka Embeddings in Weaviate</a>
    </h3>
    <p class="blog-description">
      How to use OpenAI's embedding models trained with Matryoshka Representation Learning in a vector database like Weaviate.
    </p>
    <div class="blog-meta">
      <span class="blog-date">June 18, 2024</span>
      <div class="blog-tags">
        <span class="blog-tag">Embeddings</span>
        <span class="blog-tag">OpenAI</span>
      </div>
    </div>
  </div>
</div>

<div class="blog-card">
  <img src="/assets/img/posts/2023-01-16-vector-embeddings-explained/hero.png" alt="Vector Embeddings" class="blog-thumbnail">
  <div class="blog-content">
    <h3 class="blog-title">
      <a href="{{ '/blog/2023/vector-embeddings-explained/' | relative_url }}">Vector Embeddings Explained</a>
    </h3>
    <p class="blog-description">
      Get an intuitive understanding of what exactly vector embeddings are, how they're generated, and how they're used in semantic search.
    </p>
    <div class="blog-meta">
      <span class="blog-date">January 16, 2023</span>
      <div class="blog-tags">
        <span class="blog-tag">Concepts</span>
        <span class="blog-tag">Embeddings</span>
      </div>
    </div>
  </div>
</div>

</div>

## All Articles

{% assign blog_posts = site.posts | where: "categories", "technical-blog" %}
{% if blog_posts.size > 0 %}
  <div class="posts-list">
    {% for post in blog_posts %}
      <div class="post-item">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.description %}
          <p class="post-description">{{ post.description }}</p>
        {% endif %}
        {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags limit: 3 %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
      <hr>
    {% endfor %}
  </div>
{% else %}
  <div class="posts-list">
    {% for post in site.posts limit: 10 %}
      <div class="post-item">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.description %}
          <p class="post-description">{{ post.description }}</p>
        {% else %}
          <p class="post-description">{{ post.content | strip_html | truncate: 200 }}</p>
        {% endif %}
        {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags limit: 3 %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
      <hr>
    {% endfor %}
  </div>
{% endif %}

## Featured External Articles

<div class="external-posts">
  <div class="blog-grid">

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/futurebench" target="_blank">Back to The Future: Evaluating AI Agents on Predicting Future Events<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          A comprehensive benchmark for evaluating AI agents on their ability to predict future events and outcomes.
        </p>
        <div class="blog-meta">
          <span class="blog-date">July 17, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">AI Agents</span>
            <span class="blog-tag">Evaluation</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/introducing-together-evaluations" target="_blank">Together Evaluations: Benchmark Models for Your Tasks<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          Introducing a comprehensive evaluation framework for benchmarking AI models across various tasks and domains.
        </p>
        <div class="blog-meta">
          <span class="blog-date">July 28, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">Evaluation</span>
            <span class="blog-tag">Benchmarks</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/building-an-autonomous-and-open-data-scientist-agent-from-scratch" target="_blank">From Zero to One: Building An Autonomous Data Scientist Agent<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          A technical deep dive into building an autonomous AI agent capable of performing data science tasks from scratch.
        </p>
        <div class="blog-meta">
          <span class="blog-date">June 12, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">AI Agents</span>
            <span class="blog-tag">Data Science</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/direct-preference-optimization" target="_blank">Direct Preference Optimization: A Technical Deep Dive<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          An in-depth exploration of Direct Preference Optimization techniques for improving AI model alignment and performance.
        </p>
        <div class="blog-meta">
          <span class="blog-date">April 17, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">Fine-tuning</span>
            <span class="blog-tag">Optimization</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/continued-fine-tuning" target="_blank">Continued Fine‑tuning of LLMs: A Technical Deep Dive<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          Comprehensive guide to continued fine-tuning techniques for large language models, covering advanced optimization strategies.
        </p>
        <div class="blog-meta">
          <span class="blog-date">April 17, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">LLMs</span>
            <span class="blog-tag">Fine-tuning</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/open-deep-research" target="_blank">Open Deep Research<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          Exploring the principles and practices of open research in deep learning and artificial intelligence.
        </p>
        <div class="blog-meta">
          <span class="blog-date">April 16, 2025</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">Research</span>
            <span class="blog-tag">Open Source</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/long-context-fine-tuning-a-technical-deep-dive" target="_blank">Long Context Fine‑Tuning: A Technical Deep Dive<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          Advanced techniques for fine-tuning language models with extended context windows, enabling better long-form understanding.
        </p>
        <div class="blog-meta">
          <span class="blog-date">November 25, 2024</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">Long Context</span>
            <span class="blog-tag">Fine-tuning</span>
          </div>
        </div>
      </div>
    </div>

    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="https://www.together.ai/blog/multimodal-document-rag-with-llama-3-2-vision-and-colqwen2" target="_blank">Multimodal Document RAG with Llama 3.2 Vision and ColQwen2<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          Building advanced retrieval-augmented generation systems that can process both text and visual document content using state-of-the-art models.
        </p>
        <div class="blog-meta">
          <span class="blog-date">October 8, 2024</span>
          <div class="blog-tags">
            <span class="external-tag">Together AI</span>
            <span class="blog-tag">Multimodal</span>
            <span class="blog-tag">RAG</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

---

### About My Writing

I write about cutting-edge developments in AI/ML, with a focus on:

- **Vector Databases & Semantic Search** - Deep dives into the technology powering modern AI applications
- **Retrieval-Augmented Generation (RAG)** - Techniques for building knowledge-grounded AI systems  
- **Embedding Models & Fine-tuning** - Practical guides for optimizing AI model performance
- **Multimodal AI** - Exploring AI systems that work with text, images, and other modalities
- **Developer Relations** - Bridging the gap between complex AI research and practical implementation

My articles combine theoretical understanding with hands-on implementation guides, helping developers and researchers build better AI applications.