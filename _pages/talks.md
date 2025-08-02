---
layout: page
permalink: /talks/
title: talks
description: Conference talks, workshops, and presentations.
nav: true
nav_order: 4
---

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.video-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-embed {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-info {
  padding: 1rem;
}

.video-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--global-text-color);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-meta {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.5rem;
}

.video-channel {
  font-size: 0.8rem;
  color: var(--global-theme-color);
  font-weight: 500;
}

.featured-videos {
  margin-bottom: 3rem;
}

.featured-video-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.featured-video-embed {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.featured-video-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.featured-video-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-video-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--global-text-color);
  line-height: 1.3;
}

.featured-video-meta {
  font-size: 1rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.5rem;
}

.featured-video-channel {
  font-size: 0.9rem;
  color: var(--global-theme-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .video-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .featured-video-card {
    grid-template-columns: 1fr;
  }
  
  .featured-video-content {
    padding: 1.5rem;
  }
}
</style>

## Featured Presentations

<div class="featured-videos">
  <div class="featured-video-card">
    <div class="featured-video-embed">
      <iframe src="https://www.youtube.com/embed/kS9DazKNX-Y" allowfullscreen></iframe>
    </div>
    <div class="featured-video-content">
      <h2 class="featured-video-title">Semantic Search: A Deep Dive Into Vector Databases</h2>
      <div class="featured-video-meta">1:02:12 • 19K views</div>
      <div class="featured-video-channel">Developer Voices</div>
    </div>
  </div>
</div>

## All Talks & Presentations

<div class="video-grid">

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/RZl4pe88sUU" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Advanced Retrieval-Augmented Generation Techniques</div>
    <div class="video-meta">42:32 • 3.1K views</div>
    <div class="video-channel">Plain Schwarz</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/3WUobZryyok" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Building Multi-Modal Search with Vector Databases</div>
    <div class="video-meta">1:01:12 • 18K views</div>
    <div class="video-channel">DeepLearningAI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/kS9DazKNX-Y" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Semantic Search: A Deep Dive Into Vector Databases</div>
    <div class="video-meta">1:02:12 • 19K views</div>
    <div class="video-channel">Developer Voices</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/IluARWPYAUc" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">How to Build Multimodal Document RAG with Llama 3.2 Vision and ColQwen2</div>
    <div class="video-meta">59:50 • 4K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/2O81YU_VHDc" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector Databases for Multimodal Embeddings and Search - NDC London 2024</div>
    <div class="video-meta">57:21 • 3.4K views</div>
    <div class="video-channel">NDC Conferences</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/-0m2dZJ6zos" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Matryoshka Embeddings - Weaviate Podcast #89</div>
    <div class="video-meta">1:12:15 • 2.1K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/RlghyhIPXJY" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Learn Advanced RAG Tricks with Zain</div>
    <div class="video-meta">57:58 • 2K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/RsplYfp8f7Q" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Weaviate for building Generative AI apps</div>
    <div class="video-meta">26:48 • 1.7K views</div>
    <div class="video-channel">Hasgeek TV</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/lpdN3aw-yTg" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Vector embedding models for AI</div>
    <div class="video-meta">40:57 • 1.5K views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/e9-bzNVlsQ4" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Fine-tuning Large Language Models</div>
    <div class="video-meta">1:02:31 • 1.5K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/Uzi-cGmRalI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">DeepSeek-R1: How It Works, Simplified!</div>
    <div class="video-meta">1:00:55 • 1.4K views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/poRHLfVWg7E" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Going Beyond Vector Search and RAG - Semantic Kernel Community</div>
    <div class="video-meta">21:24 • 1.2K views</div>
    <div class="video-channel">Alex Chao</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/b5DtAl8VulY" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Building Multi-Modal Search and RAG with Vector Databases | LLMOps</div>
    <div class="video-meta">51:38 • 1.2K views</div>
    <div class="video-channel">LLMOps Space</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/P5VpaUyh8Iw" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Vector Search - A gentle introduction</div>
    <div class="video-meta">44:27 • 1K views</div>
    <div class="video-channel">Open Data Science</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/Hz_hzAZ-gvU" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Weaviate with the Semantic Kernel pt.1 | Semantic Kernel Community</div>
    <div class="video-meta">20:39 • 878 views</div>
    <div class="video-channel">Alex Chao</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/gnLMGzhv1b8" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">How I Built a Super-Doctor Using Advanced RAG</div>
    <div class="video-meta">21:19 • 763 views</div>
    <div class="video-channel">John Snow Labs</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/9pG1pspgELU" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Powering Vector Search with Real-Time Data</div>
    <div class="video-meta">1:04:25 • 768 views</div>
    <div class="video-channel">Quix</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/h4yC0MGWrHQ" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">A gentle introduction to Vector Databases | Conf42 Machine Learning 2023</div>
    <div class="video-meta">44:48 • 641 views</div>
    <div class="video-channel">Conf42</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/nZQ0RMVyykg" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Better Chatbots with Advanced RAG Techniques</div>
    <div class="video-meta">49:12 • 578 views</div>
    <div class="video-channel">Toronto Machine Learning Society (TMLS)</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/DOjEuvaNiGk" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Finetuning 3.0 – How to finetune models on Together AI</div>
    <div class="video-meta">1:01:28 • 717 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/prO9tkKjTqw" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector DBs to Scale Multimodal Embeddings, Retrieval & Generation</div>
    <div class="video-meta">41:17 • 459 views</div>
    <div class="video-channel">OpenSource Connections</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/CiUNt-J8ZVY" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Vector Databases for Multimodal Search and Retrieval Augmented Generation</div>
    <div class="video-meta">1:07:17 • 480 views</div>
    <div class="video-channel">Data Phoenix Events</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/pP8CZbDkUKU" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Sam Bean, Zain Hasan, and John Trengrove on You.com and Spark - Weaviate Podcast #32</div>
    <div class="video-meta">51:35 • 413 views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/BtMXkUr5tj4" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Scaling Vector Database Usage Without Breaking the Bank - Quantization and Adaptive Retrieval</div>
    <div class="video-meta">1:11:24 • 391 views</div>
    <div class="video-channel">Toronto Machine Learning Series (TMLS)</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/riwPb2hSrEI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">ControlNet for Interior Design & Weaviate Vector Database for Multimodal AI</div>
    <div class="video-meta">55:45 • 366 views</div>
    <div class="video-channel">TwelveLabs</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/pnacsAWnjV8" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">ColPali's Vision-Powered RAG for Enterprise Documents | PyData Global 2024</div>
    <div class="video-meta">35:52 • 403 views</div>
    <div class="video-channel">PyData</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/6Emcpz_f9EQ" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Vector Quantization: The Vector Clubhouse Episode 2</div>
    <div class="video-meta">59:40 • 325 views</div>
    <div class="video-channel">Weaviate • Vector Database</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/iD5hwrTSJmo" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Using Retrieval Augmented Generation (RAG) in Production | Weaviate x Merantix AI Campus</div>
    <div class="video-meta">59:00 • 294 views</div>
    <div class="video-channel">Merantix AI Campus</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/YTIDj7jeRbs" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Computer Vision Applications at Scale with Vector Databases</div>
    <div class="video-meta">35:11 • 268 views</div>
    <div class="video-channel">Voxel51</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/LGcQEz4xSTQ" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Make Your RAG Workflow "WOW" with Weaviate and Generative Feedback Loops</div>
    <div class="video-meta">29:42 • 231 views</div>
    <div class="video-channel">Yujian Tang</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/LQHyyOsT61k" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Building Scalable Multimodal Search Applications with Python</div>
    <div class="video-meta">25:11 • 200 views</div>
    <div class="video-channel">EuroPython Conference</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/Ilkxb2Qe3xY" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">RAG Insights w/ Sebastian Witalec & Zain Hasan (Weaviate)</div>
    <div class="video-meta">56:20 • 132 views</div>
    <div class="video-channel">AI Tinkerers Ottawa</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/Izt1cOeptx8" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">LLM Bootcamp - Day 2 Highlights</div>
    <div class="video-meta">42 sec • 126 views</div>
    <div class="video-channel">Data Science Dojo</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/rCFcZDs4V14" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Building Chatbots with Retrieval-Augmented Generation Techniques | Conf42 LLMs 2024</div>
    <div class="video-meta">32:01 • 94 views</div>
    <div class="video-channel">Conf42</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/lxgfhPQ1GSI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">How to build a coding agent from scratch</div>
    <div class="video-meta">59:03 • 918 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/JbkRgq_QzYI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">End to end coding agent examples</div>
    <div class="video-meta">7:11 • 89 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/3ZIwFeitLRY" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Code Execution for Coding Agents</div>
    <div class="video-meta">4:56 • 61 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/ARIg9kcjxs4" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Retrieval and Context in coding agents</div>
    <div class="video-meta">17:31 • 40 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/WZJTmTCmi_M" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Function Calling in Coding Agents</div>
    <div class="video-meta">20:01 • 42 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/SNWLv2ULNaI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Learning Together Episode 1: Matryoshka Principles for Adaptive Intelligence</div>
    <div class="video-meta">49:21 • 387 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/_HFxuQUg51k" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">A Deep Dive Into The RedPajama Datasets</div>
    <div class="video-meta">1:01:29 • 287 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/QpxDEPXPZfI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">Kernels: High Performance Building Blocks for AI</div>
    <div class="video-meta">57:35 • 615 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/dFHEgsJTmDI" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">A new course on Retrieval Augmented Generation (RAG) is live!</div>
    <div class="video-meta">1:40 • 3.9K views</div>
    <div class="video-channel">DeepLearningAI</div>
  </div>
</div>

<div class="video-card">
  <div class="video-embed">
    <iframe src="https://www.youtube.com/embed/9AwRQh9rMyM" allowfullscreen></iframe>
  </div>
  <div class="video-info">
    <div class="video-title">LLM-as-a-Judge Evals: Comparing Kimi, Qwen, and GLM</div>
    <div class="video-meta">1:04:26 • 434 views</div>
    <div class="video-channel">Together AI</div>
  </div>
</div>

</div>

---

### About These Talks

I regularly speak at conferences, meetups, and webinars about:
- **Vector Databases & Semantic Search**
- **Retrieval-Augmented Generation (RAG)**
- **Multimodal AI Applications**
- **Large Language Model Fine-tuning**
- **AI/ML Developer Relations**
- **Coding Agents & AI Tools**

Want me to speak at your event? Feel free to reach out through my social media links!