---
layout: page
permalink: /talks/
title: Talks
description: Conference talks, workshops, podcasts, and livestreams on open models, inference, fine-tuning, agents, RAG, and vector search. If you'd like me to speak at your event, reach out on LinkedIn or X.
nav: true
nav_order: 4
---

{% assign talks = site.data.talks.talks | sort: 'date' | reverse %}
{% assign years = talks | group_by_exp: 'talk', "talk.date | date: '%Y'" %}

{% for year in years %}

<h2 class="year-label">{{ year.name }}</h2>
<div class="talk-grid">
  {% for talk in year.items %}
    {% include talk.liquid talk=talk %}
  {% endfor %}
</div>
{% endfor %}
