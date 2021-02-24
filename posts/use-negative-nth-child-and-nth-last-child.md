---
title: Use negative nth-child and nth-last-child
category: tip
date: 2021-02-24 10:17:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

`nth-child` is used to choose a child or a range of children of a given element.
Using negative `nth-child` will pick the first few children.

In the following example, the first three items will be underlined. The range of second to fifth items have the blue color.

```css
li:nth-child(-n+3) {
    text-decoration: underline;
}
li:nth-child(n+2):nth-child(-n+5) {
    color: #2563EB;
}
```

In a similar way, nagative `nth-last-child` will pick the last few children.

```css
/* Add a decorative line to the last two items */
li:nth-last-child(-n+2) {
    text-decoration-line: line-through;
}
```

_Demo_

<style>
.demo__item:nth-child(-n+3) {
    text-decoration: underline;
}
.demo__item:nth-child(n+2):nth-child(-n+5) {
    color: #2563EB;
}
.demo__item:nth-last-child(-n+2) {
    text-decoration-line: line-through;
}
</style>

<ul>
    <li class="demo__item">First</li>
    <li class="demo__item">Second</li>
    <li class="demo__item">Third</li>
    <li class="demo__item">Fourth</li>
    <li class="demo__item">Fifth</li>
    <li class="demo__item">Sixth</li>
    <li class="demo__item">Seventh</li>
</ul>
