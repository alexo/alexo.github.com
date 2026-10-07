---
layout: page
title: Tags
subtitle: Posts grouped by topic.
search_omit: true
---

{% assign sorted_tags = site.tags | sort %}
<div class="tag-cloud">
{% for t in sorted_tags %}{% assign tposts = t[1] | where_exp: "p", "p.hidden != true" %}  <a class="pill" href="#{{ t[0] }}">{{ t[0] }} <span>{{ tposts.size }}</span></a>
{% endfor %}
</div>

{% for t in sorted_tags %}{% assign tposts = t[1] | where_exp: "p", "p.hidden != true" %}<h2 id="{{ t[0] }}">{{ t[0] }}</h2>
<div class="archive">
{% for post in tposts %}
  {% include archive-item.html post=post %}
{% endfor %}
</div>
{% endfor %}
