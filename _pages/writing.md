---
layout: page
permalink: /writing/
title: writing
description: Articles, blog posts, and technical writing.
nav: true
nav_order: 3
---

<!-- pages/writing.md -->
<div class="posts">
  <h2>Recent Posts</h2>
  {% assign blog_posts = site.posts %}
  {% if blog_posts.size > 0 %}
    {% for post in blog_posts limit: 10 %}
      <div class="post-preview">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% else %}
          <p>{{ post.content | strip_html | truncate: 200 }}</p>
        {% endif %}
      </div>
      <hr>
    {% endfor %}
  {% else %}
    <p>Coming soon! I'll be sharing articles about AI/ML, developer relations, and building with AI technologies.</p>
  {% endif %}
</div>