---
title: Remove the border from the last navigation item
category: tip
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

We often use the `:last-child` selector to unapply particular styles (such as `border`) for the last item.
Creating a navigation that each item has a bottom border usually looks like:

```css
li {
    border-bottom: 1px solid #E5E7EB;
}

/* Don't add border to the last item */
li:last-child {
    border-bottom: none;
}
```

Using the `:not` pseudo-class, we can make the code shorter and more easy to maintain with a single CSS declaration:

```css
/* Add the border to all items except the last one */
li:not(:last-child) {
    border-bottom: 1px solid #E5E7EB;
}
```

_Demo_

<style>
.demo__list {
    border: 1px solid #E5E7EB;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 16rem;
}
.demo__list li {
    padding: 0.25rem 0.5rem;
}
.demo__list li:not(:last-child) {
    border-bottom: 1px solid #E5E7EB;
}
.demo__list a {
    display: block;
    text-decoration: none;
}
</style>

<ul class="demo__list">
    <li><a href="https://1loc.dev">1LOC</a></li>
    <li><a href="https://csslayout.io">CSS Layout</a></li>
    <li><a href="https://htmldom.dev">HTML DOM</a></li>
    <li><a href="https://responsive.page">Responsive Design Patterns</a></li>
    <li><a href="https://thisthat.dev">this VS that</a></li>
</ul>