---
layout: page
title: Blog
subtitle: Shorter notes and practical how-tos.
search_omit: true
---

<div class="archive">
{% assign items = site.categories.blog | where_exp: "p", "p.hidden != true" %}
{% for post in items %}
  {% include archive-item.html post=post %}
{% endfor %}
</div>
