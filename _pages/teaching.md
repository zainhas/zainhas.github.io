---
layout: page
permalink: /teaching/
title: Teaching/Courses
description: Online courses and educational content on AI, machine learning, and vector databases.
nav: true
nav_order: 5
---

## About My Teaching

I'm passionate about making cutting-edge AI technologies accessible through education. My courses focus on practical, hands-on learning with real-world applications.

### Course Topics
- **Vector Databases & Embeddings** - The infrastructure powering modern AI
- **Retrieval-Augmented Generation** - Building knowledge-grounded AI systems
- **Multimodal AI** - Working with text, images, and mixed-media data
- **Production AI Systems** - Scaling AI applications for real-world use

### Platforms I Teach On
- **[Coursera](https://www.coursera.org/)** - University-level courses with academic rigor
- **[DeepLearning.AI](https://www.deeplearning.ai/)** - Industry-leading AI education platform
- **[LinkedIn Learning](https://www.linkedin.com/learning/)** - Professional development focused content

Want to collaborate on educational content? Feel free to reach out!

<style>
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.course-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: fit-content;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.course-header {
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--global-theme-color), #667eea);
  color: white;
}

.course-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.course-platform {
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
}

.course-content {
  padding: 1.5rem;
}

.course-description {
  font-size: 1rem;
  color: var(--global-text-color-light);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.course-features {
  margin-bottom: 1.5rem;
}

.course-features h4 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
}

.course-features ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--global-text-color-light);
}

.course-features li {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.course-button {
  display: inline-block;
  background: var(--global-theme-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background-color 0.2s ease;
}

.course-button:hover {
  background: color-mix(in srgb, var(--global-theme-color) 80%, black);
  color: white;
  text-decoration: none;
}

.platform-tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
}


@media (max-width: 768px) {
  .course-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

## All Courses

<div class="course-grid">

  <div class="course-card">
    <div class="course-header">
      <h3 class="course-title">Retrieval Augmented Generation</h3>
      <div class="course-platform">Coursera</div>
      <div class="platform-tag">University Course</div>
    </div>
    <div class="course-content">
      <p class="course-description">
        A comprehensive course on RAG systems covering the fundamentals of retrieval-augmented generation, from basic concepts to advanced implementation techniques. Learn how to build production-ready RAG applications.
      </p>
      <div class="course-features">
        <h4>What You'll Learn:</h4>
        <ul>
          <li>Fundamentals of RAG architecture</li>
          <li>Vector databases and embeddings</li>
          <li>Advanced retrieval techniques</li>
          <li>Production deployment strategies</li>
        </ul>
      </div>
      <a href="https://www.coursera.org/learn/retrieval-augmented-generation-rag" target="_blank" class="course-button">Take Course →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <h3 class="course-title">Introduction to AI-Native Vector Databases</h3>
      <div class="course-platform">LinkedIn Learning</div>
      <div class="platform-tag">Professional Course</div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Get introduced to the fundamentals of vector databases and their role in modern AI applications. Perfect for professionals looking to understand this critical AI infrastructure component.
      </p>
      <div class="course-features">
        <h4>Key Topics:</h4>
        <ul>
          <li>Vector database fundamentals</li>
          <li>AI-native database architectures</li>
          <li>Use cases and applications</li>
          <li>Industry best practices</li>
        </ul>
      </div>
      <a href="https://www.linkedin.com/learning/introduction-to-ai-native-vector-databases" target="_blank" class="course-button">Take Course →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <h3 class="course-title">Vector Databases: from Embeddings to Applications</h3>
      <div class="course-platform">DeepLearning.AI</div>
      <div class="platform-tag">Short Course</div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Learn how to use vector databases to build AI applications. This hands-on course covers embedding generation, similarity search, and building applications with popular vector database platforms.
      </p>
      <div class="course-features">
        <h4>Key Topics:</h4>
        <ul>
          <li>Vector embeddings and similarity search</li>
          <li>Working with vector databases</li>
          <li>Building semantic search applications</li>
          <li>Real-world implementation examples</li>
        </ul>
      </div>
      <a href="https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/" target="_blank" class="course-button">Take Course →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <h3 class="course-title">Building Multimodal Search and RAG</h3>
      <div class="course-platform">DeepLearning.AI</div>
      <div class="platform-tag">Short Course</div>
    </div>
    <div class="course-content">
      <p class="course-description">
        Extend your RAG systems to handle multimodal data including text, images, and other media types. Learn to build sophisticated search systems that understand multiple data modalities.
      </p>
      <div class="course-features">
        <h4>Key Topics:</h4>
        <ul>
          <li>Multimodal embeddings and search</li>
          <li>Cross-modal retrieval techniques</li>
          <li>Building multimodal RAG systems</li>
          <li>Advanced AI application patterns</li>
        </ul>
      </div>
      <a href="https://www.deeplearning.ai/short-courses/building-multimodal-search-and-rag/" target="_blank" class="course-button">Take Course →</a>
    </div>
  </div>

</div>
