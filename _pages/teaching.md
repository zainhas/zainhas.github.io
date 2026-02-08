---
layout: page
permalink: /teaching/
title: Teaching
description: Online courses and educational content on AI, machine learning, and vector databases.
nav: true
nav_order: 5
---

I build courses that bridge the gap between AI research and real-world implementation. From production RAG systems to multimodal search, my courses are hands-on, code-first, and designed for practitioners.

<style>
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin: 2rem 0 2.5rem;
  padding: 1.25rem 2rem;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--global-theme-color);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--global-text-color-light);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 0.15rem;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.course-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

html[data-theme="dark"] .course-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.course-header {
  padding: 1.25rem 1.5rem;
  color: white;
  position: relative;
}

.course-header.coursera {
  background: linear-gradient(135deg, #0056d2, #2563eb);
}

.course-header.dlai {
  background: linear-gradient(135deg, #dc2626, #ef4444);
}

.course-header.linkedin {
  background: linear-gradient(135deg, #0a66c2, #1d4ed8);
}

.course-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.course-platform {
  font-size: 0.8rem;
  opacity: 0.85;
  font-weight: 500;
}

.course-badges {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
}

.course-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
  backdrop-filter: blur(4px);
}

.course-content {
  padding: 1.25rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-description {
  font-size: 0.875rem;
  color: var(--global-text-color-light);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  flex: 1;
}

.course-features {
  margin-bottom: 1.25rem;
}

.course-features h4 {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.course-features ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--global-text-color-light);
}

.course-features li {
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.course-button {
  display: inline-block;
  background: var(--global-theme-color);
  color: white;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: -0.01em;
  transition: background-color 0.2s ease, transform 0.15s ease;
  align-self: flex-start;
}

.course-button:hover {
  background: var(--global-hover-color);
  color: white;
  text-decoration: none;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .course-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .stats-bar {
    gap: 1.5rem;
    padding: 1rem 0.75rem;
  }
  .stat-number {
    font-size: 1.25rem;
  }
}
</style>

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-number">4</div>
    <div class="stat-label">Courses</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">250K+</div>
    <div class="stat-label">Learners</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">4.8</div>
    <div class="stat-label">Avg. Rating</div>
  </div>
  <div class="stat-item">
    <div class="stat-number">3</div>
    <div class="stat-label">Platforms</div>
  </div>
</div>

## Courses

<div class="course-grid">

  <div class="course-card">
    <div class="course-header coursera">
      <h3 class="course-title">Retrieval Augmented Generation (RAG)</h3>
      <div class="course-platform">Coursera x DeepLearning.AI</div>
      <div class="course-badges">
        <span class="course-badge">5 Modules</span>
        <span class="course-badge">30 hrs</span>
        <span class="course-badge">Top Instructor</span>
      </div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Build production-ready RAG systems from the ground up. Covers retrievers, vector databases, LLMs, prompt engineering, agentic RAG, evaluation, and real-world deployment with hands-on labs using Weaviate and Together AI.
      </p>
      <div class="course-features">
        <h4>What You'll Build:</h4>
        <ul>
          <li>Hybrid search pipeline with BM25 and semantic search</li>
          <li>Domain-specific chatbot with dynamic pricing</li>
          <li>Monitored, production-grade RAG system</li>
        </ul>
      </div>
      <a href="https://www.coursera.org/learn/retrieval-augmented-generation-rag" target="_blank" class="course-button">Enroll Free on Coursera</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header dlai">
      <h3 class="course-title">Vector Databases: from Embeddings to Applications</h3>
      <div class="course-platform">DeepLearning.AI</div>
      <div class="course-badges">
        <span class="course-badge">55 min</span>
        <span class="course-badge">Intermediate</span>
        <span class="course-badge">Free</span>
      </div>
    </div>
    <div class="course-content">
      <p class="course-description">
        A concise, hands-on introduction to vector databases. Learn how embeddings capture meaning, explore ANN algorithms for fast search, and build applications from hybrid search to multilingual retrieval.
      </p>
      <div class="course-features">
        <h4>What You'll Build:</h4>
        <ul>
          <li>Vector embedding and similarity search pipelines</li>
          <li>Sparse, dense, and hybrid search systems</li>
          <li>Multilingual search application</li>
        </ul>
      </div>
      <a href="https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/" target="_blank" class="course-button">Enroll Free on DLAI</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header dlai">
      <h3 class="course-title">Building Multimodal Search and RAG</h3>
      <div class="course-platform">DeepLearning.AI</div>
      <div class="course-badges">
        <span class="course-badge">1 hr 22 min</span>
        <span class="course-badge">Intermediate</span>
        <span class="course-badge">Free</span>
      </div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Go beyond text-only RAG. Learn contrastive learning, build any-to-any multimodal search across text, images, and video, and implement end-to-end multimodal RAG with visual instruction tuning.
      </p>
      <div class="course-features">
        <h4>What You'll Build:</h4>
        <ul>
          <li>Contrastive learning on a real dataset</li>
          <li>End-to-end multimodal RAG system</li>
          <li>Multi-vector recommender system</li>
        </ul>
      </div>
      <a href="https://www.deeplearning.ai/short-courses/building-multimodal-search-and-rag/" target="_blank" class="course-button">Enroll Free on DLAI</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header linkedin">
      <h3 class="course-title">Introduction to AI-Native Vector Databases</h3>
      <div class="course-platform">LinkedIn Learning</div>
      <div class="course-badges">
        <span class="course-badge">Professional</span>
        <span class="course-badge">Certificate</span>
      </div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Understand why vector databases are a critical infrastructure layer for modern AI. Covers fundamentals, AI-native architectures, real-world use cases, and best practices for professionals entering the space.
      </p>
      <div class="course-features">
        <h4>What You'll Learn:</h4>
        <ul>
          <li>Vector database fundamentals and architectures</li>
          <li>Real-world AI infrastructure use cases</li>
          <li>Industry best practices and patterns</li>
        </ul>
      </div>
      <a href="https://www.linkedin.com/learning/introduction-to-ai-native-vector-databases" target="_blank" class="course-button">Take on LinkedIn Learning</a>
    </div>
  </div>

</div>
