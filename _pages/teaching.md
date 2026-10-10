---
layout: page
permalink: /teaching/
title: Teaching
description: Hands-on, code-first courses for practitioners, from production RAG systems to multimodal search.
nav: true
nav_order: 5
---

{% for course in site.data.courses.courses %}

<div class="course">
  <div class="course-meta">{{ course.platform }} &middot; {{ course.meta }}</div>
  <h3><a href="{{ course.url }}">{{ course.title }}</a></h3>
  <p>{{ course.description }}</p>
  <div class="course-topics">{{ course.topics | join: ' &middot; ' }}</div>
  <a class="text-link" href="{{ course.url }}">View course &rarr;</a>
</div>
{% endfor %}
