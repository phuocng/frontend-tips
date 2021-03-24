---
title: Smooth scrolling with pure CSS
category: tip
date: 2021-03-24 12:07:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

It's common to use anchors, `<a href="#destination">` for example, to link between elements in a page. By default, the browser will jump straightly to the destination when clicking an anchor.

Without using any JavaScript library, it's possible to scroll to given element smoothly with a simple CSS property. Setting it to the `html` element enables smooth scrolling effect to the whole page:

```css
html {
    scroll-behavior: smooth;
}
```

We can also apply the style for a given scrollable container:

```css
.container {
    scroll-behavior: smooth;
}
```