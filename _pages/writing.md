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

{% comment %}
Get internal posts from _posts and external posts from _data
Display them in chronological order (newest first)
{% endcomment %}

{% assign internal_posts = site.posts | where: "categories", "technical-blog" %}
{% assign external_posts = site.data.all_posts.external_posts %}

{% comment %} Find featured post - Advanced RAG {% endcomment %}
{% assign featured_post = nil %}
{% for post in internal_posts %}
  {% if post.title contains "Advanced RAG" %}
    {% assign featured_post = post %}
    {% break %}
  {% endif %}
{% endfor %}

## Featured Article

{% if featured_post %}
<div class="featured-card">
  {% if featured_post.thumbnail %}
    <img src="{{ featured_post.thumbnail }}" alt="{{ featured_post.title }}" class="featured-image">
  {% endif %}
  <div class="featured-content">
    <h2 class="featured-title">
      <a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a>
    </h2>
    <p class="featured-description">
      {{ featured_post.description }}
    </p>
    <div class="blog-meta">
      <span class="blog-date">{{ featured_post.date | date: "%B %d, %Y" }}</span>
      <div class="blog-tags">
        {% assign tag_array = featured_post.tags | split: " " %}
        {% for tag in tag_array limit: 3 %}
          <span class="blog-tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
{% endif %}

## All Articles

{% comment %} Create a combined array manually sorted by date {% endcomment %}
{% assign all_posts_with_dates = "" | split: "" %}

{% comment %} Add external posts with their dates for sorting {% endcomment %}
{% for post in external_posts %}
  {% assign date_string = post.date | date: "%Y%m%d" %}
  {% assign post_with_sort = post.title | prepend: date_string | append: "|external|" | append: forloop.index0 %}
  {% assign all_posts_with_dates = all_posts_with_dates | push: post_with_sort %}
{% endfor %}

{% comment %} Add internal posts with their dates for sorting {% endcomment %}
{% for post in internal_posts %}
  {% unless post == featured_post %}
    {% assign date_string = post.date | date: "%Y%m%d" %}
    {% assign post_with_sort = post.title | prepend: date_string | append: "|internal|" | append: forloop.index0 %}
    {% assign all_posts_with_dates = all_posts_with_dates | push: post_with_sort %}
  {% endunless %}
{% endfor %}

{% assign sorted_post_refs = all_posts_with_dates | sort | reverse %}

<div class="blog-grid">
{% for post_ref in sorted_post_refs %}
  {% assign ref_parts = post_ref | split: "|" %}
  {% assign post_type = ref_parts[1] %}
  {% assign post_index = ref_parts[2] | plus: 0 %}
  
  {% if post_type == "external" %}
    {% assign current_post = external_posts[post_index] %}
    <div class="blog-card">
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="{{ current_post.url }}" target="_blank">{{ current_post.title }}<span class="external-link-icon">↗</span></a>
        </h3>
        <p class="blog-description">
          {{ current_post.description }}
        </p>
        <div class="blog-meta">
          <span class="blog-date">{{ current_post.date | date: "%B %d, %Y" }}</span>
          <div class="blog-tags">
            <span class="external-tag">{{ current_post.source }}</span>
            {% for tag in current_post.tags limit: 2 %}
              <span class="blog-tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  {% else %}
    {% assign current_post = internal_posts[post_index] %}
    <div class="blog-card">
      {% if current_post.thumbnail %}
        <img src="{{ current_post.thumbnail }}" alt="{{ current_post.title }}" class="blog-thumbnail">
      {% endif %}
      <div class="blog-content">
        <h3 class="blog-title">
          <a href="{{ current_post.url | relative_url }}">{{ current_post.title }}</a>
        </h3>
        <p class="blog-description">
          {{ current_post.description }}
        </p>
        <div class="blog-meta">
          <span class="blog-date">{{ current_post.date | date: "%B %d, %Y" }}</span>
          <div class="blog-tags">
            {% assign tag_array = current_post.tags | split: " " %}
            {% for tag in tag_array limit: 3 %}
              <span class="blog-tag">{{ tag }}</span>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  {% endif %}
{% endfor %}
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