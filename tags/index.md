---
layout: page
title: Tags
subtitle: Posts grouped by topic.
search_omit: true
---

{% assign sorted_tags = site.tags | sort %}
<div class="tag-cloud">
{% for t in sorted_tags %}{% unless t[0] == 'sample-post' %}
  <a class="pill" href="#{{ t[0] }}">{{ t[0] }} <span>{{ t[1].size }}</span></a>
{% endunless %}{% endfor %}
</div>

{% for t in sorted_tags %}{% unless t[0] == 'sample-post' %}
<h2 id="{{ t[0] }}">{{ t[0] }}</h2>
<div class="archive">
{% for post in t[1] %}
  {% include archive-item.html post=post %}
{% endfor %}
</div>
{% endunless %}{% endfor %}
