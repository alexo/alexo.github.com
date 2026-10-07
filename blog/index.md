---
layout: page
title: Blog
subtitle: Shorter notes and practical how-tos.
search_omit: true
---

<div class="archive">
{% for post in site.categories.blog %}
  {% include archive-item.html post=post %}
{% endfor %}
</div>
