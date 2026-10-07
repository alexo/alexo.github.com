---
layout: page
title: Search
subtitle: Find a post by title or topic.
search_omit: true
search_page: true
sitemap: false
---

<form method="get" action="{{ site.url }}/search/" data-search-form class="simple-search">
  <label for="q">Search {{ site.title }}</label>
  <input type="search" name="q" id="q" placeholder="What are you looking for?" data-search-input autofocus>
  <input type="submit" value="Search">
</form>

<p class="search-status" data-search-status></p>
<div class="archive" data-search-results></div>
