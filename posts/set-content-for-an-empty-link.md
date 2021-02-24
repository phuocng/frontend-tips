---
title: Set content for an empty link
category: tip
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

For a link whose content is empty, we can replace the content with the `href` attribute:

```css
a[href^="http"]:empty:before {
  content: attr(href);
}
```

_Demo_

<style>
.demo__link[href^="http"]:empty:before {
  content: attr(href);
}
</style>

<a class="demo__link" href="https://github.com/phuoc-ng/frontend-tips"></a>