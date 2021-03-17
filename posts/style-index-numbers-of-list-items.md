---
title: Style index numbers of list items
category: tip
date: 2021-03-17 14:46:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

By default, an ordered list prefixes each item with its index number. Since there is no actual element or CSS property that represents the index number, we can't add custom styles for it directly.

The approach is that we hide the original index numbers, and number the items ourselves. The first task is quite easy:

```css
ol {
    list-style-type: none;
}
```

The index numbers start from zero, and increase by one after each item. It gives us a hint that we can use a CSS counter to represent the indices:

```css
ol {
    counter-reset: ol-counter;
}
li {
    counter-increment: ol-counter;
}
```

Finally, use the `::before` pseudo element to display the number:

```css
li::before {
    content: counter(ol-counter);
}
```

_Demo_

<style>
.demo__list {
    color: #6B7280;
    counter-reset: ol-counter;
    list-style-type: none;
}
.demo__list li {
    align-items: center;
    counter-increment: ol-counter;
    display: flex;
}
.demo__list li::before {
    color: #3B82F6;
    content: counter(ol-counter);
    font-size: 2rem;
    font-weight: 600;
    margin-right: 1rem;
}
</style>

<ol class="demo__list">
    <li><placeholder-lines size="1"></li>
    <li><placeholder-lines size="1"></li>
    <li><placeholder-lines size="1"></li>
    <li><placeholder-lines size="1"></li>
    <li><placeholder-lines size="1"></li>
</ol>

_More_

* [Append leading zeros to ordered list items](/append-leading-zeros-to-ordered-list-items.html)
* [Number headings and subheadings automatically](/number-headings-and-subheadings-automatically.html)
* [Style list items with special characters](/style-list-items-with-special-characters.html)