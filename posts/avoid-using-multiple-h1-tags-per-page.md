---
title: Avoid using multiple <h1> tags per page
category: practice
date: 2021-05-13 20:27:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
metadata:
  image: avoid-multiple-h1.png
---

The `<h1>` tag is often used at the top of the page to indicate the overall purpose of the page's content.
It plays an important role in SEO because the search engines weigh it higher than other factors. It can be used to display in the search results as well.

It's also good to know that in the old versions of HTML, HTML 4 specifically, allow one `<h1>` tag per page. HTML 5 allows multiple `<h1>` tags which each one can be used on each section.

It means that using multiple `<h1>` tags is valid in terms of HTML syntax, but it is not considered a best practice.

```html
<!-- 👎 Do NOT -->
<h1>Main heading</h1>

<section>
    <h1>A section heading</h1>
</section>

<section>
    <h1>Another section heading</h1>
</section>

<!-- 👍 Do -->
<h1>Main heading</h1>

<section>
    <h2>A section heading</h2>
</section>

<section>
    <h2>Another section heading</h2>
</section>
```

_More_

* [Avoid skipping heading levels](/avoid-skipping-heading-levels.html)