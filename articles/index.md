---
layout: page
title: Articles
subtitle: Longer, deeper pieces.
search_omit: true
---

<div class="archive">
{% assign items = site.categories.articles | where_exp: "p", "p.hidden != true" %}
{% for post in items %}
  {% include archive-item.html post=post %}
{% endfor %}
</div>
