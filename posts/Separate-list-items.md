---
title: Separate list items
category: tip
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

The `content` property of the `:after` selector can be used to separate list items:

```css
/* Inline items */
span:not(:last-child):after {
  content: " • ";
}

/* List items */
li:not(:last-child):after {
  content: ",";
}
```

_Demo_

<style>
.demo__tag:not(:last-child):after {
  content: " • ";
}
.demo__item:not(:last-child):after {
  content: ",";
}
</style>

Inline items:
<span class="demo__tag">CSS</span><span class="demo__tag">JavaScript</span><span class="demo__tag">HTML</span><span class="demo__tag">TypeScript</span>

List items:
<ul>
  <li class="demo__item">CSS</li>
  <li class="demo__item">JavaScript</li>
  <li class="demo__item">HTML</li>
  <li class="demo__item">TypeScript</li>
</ul>