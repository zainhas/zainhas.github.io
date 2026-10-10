---
layout: page
permalink: /writing/
title: Writing
description: Technical deep dives and guides on fine-tuning, evaluation, inference, agents, RAG, and vector search, published on the Together AI and Weaviate blogs.
nav: true
nav_order: 3
---

{% assign posts = site.data.writing.posts | sort: 'date' | reverse %}
{% assign years = posts | group_by_exp: 'post', "post.date | date: '%Y'" %}

{% for year in years %}

<h2 class="year-label">{{ year.name }}</h2>
<ul class="entries">
  {% for post in year.items %}
    <li class="entry">
      <span class="entry-date">{{ post.date | date: '%b %-d' }}</span>
      <div class="entry-main">
        <a class="entry-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </div>
      <span class="entry-source">{{ post.source }}</span>
    </li>
  {% endfor %}
</ul>
{% endfor %}
