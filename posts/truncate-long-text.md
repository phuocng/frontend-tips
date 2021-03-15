---
title: Truncate long text
category: tip
date: 2021-03-15 14:32:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

I'm pretty sure that it's one of well-known CSS snippets to truncate long text:

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

However, it truncates the origin text to a single line. If you want to truncate to a given number of lines, then the [`-webkit-line-clamp` property](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) comes in handy.

The CSS declaration below limits the number of lines to 3:

```css
.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

Note that the `-webkit-line-clamp` property only works when we have `display: -webkit-box` and `-webkit-box-orient: vertical` declarations.

_Demo_
<style>
@keyframes demo-font-size {
  0% {
    font-size: 1.5rem;
  }  

  50% {
    font-size: 2.5rem;
  }

  100% {
    font-size: 1.5rem;
  }
}

.demo__truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  /* For demo */
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: demo-font-size;
  border: 1px solid #9CA3AF;
  padding: 0.25rem;
  width: 16rem;
}
</style>

<div class="demo__truncate">
  This is a multiple lines paragraph. The content will be truncated to 2 lines
</div>