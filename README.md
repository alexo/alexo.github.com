# Non multa sed multum

Alex Objelean's blog, built with Jekyll and published by GitHub Pages at <https://alexo.github.io>.
Layouts, includes and styles are custom (`_layouts`, `_includes`, `_sass`).

## Preview locally

```bash
bin/serve
```

Open <http://localhost:4000>; the page reloads when you save a file. Ctrl+C stops it.
The first run takes a few minutes while gems install into a Docker volume.

Requires Docker. The script runs Ruby 3.2 with the `github-pages` gem, which matches what GitHub builds with.

### Certificate error behind a corporate proxy

If `bundle install` fails with `SSL certificate problem: unable to get local issuer certificate`,
the network is re-signing HTTPS (Zscaler). Export its root certificate once:

```bash
security find-certificate -a -c "Zscaler" -p /Library/Keychains/System.keychain > ~/zscaler-ca.pem
```

`bin/serve` mounts `~/zscaler-ca.pem` automatically if it exists. To use another file, set `BLOG_CA_CERT=/path/to/ca.pem`.

## Writing a post

Create `_posts/articles/YYYY-MM-DD-slug.md` (long pieces) or `_posts/blog/` (short notes):

```yaml
---
layout: post
title: "Title"
excerpt: "One sentence, used for cards, search and share previews."
categories: articles
tags: [ai, architecture]
date: 2026-10-08T09:00:00+03:00   # a future time hides the post
modified: 2026-10-08
og_image: my-card.png             # optional, in images/ (1200x630)
---
```

- Pull quote: a `>` blockquote followed by `{: .pullquote}` on the next line.
- Diagram: an inline `<svg>` inside `<figure class="diagram">` with a `<figcaption>`.
- Hide a post from lists and search but keep its URL: `hidden: true`.

## Deploying

Push to `master`; GitHub Pages builds and publishes. Check the Actions tab if a build fails.
