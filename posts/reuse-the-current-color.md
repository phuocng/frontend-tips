---
title: Reuse the current color
category: practice
date: 2021-03-03 15:35:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

Instead of repeating colors in a few places, we can define a value for the `color` property once and reuse it with the `currentColor` keyword.

```css
/* Bad */
div {
    color: #D1D5DB;
    background-image: linear-gradient(to bottom, #D1D5DB, #fff);
}

/* Good */
div {
    color: #D1D5DB;
    background-image: linear-gradient(to bottom, currentColor, #fff);
}
```

Because the `color` property of an element, if not specified, is inherited from its parent, we can use the `currentColor` keyword in the children of element.

For example, let's say that we want the color of a link to be the same with its container, a given `div` element:

```css
/* Bad: Declare same color in three places */
div {
    color: #fff;
}
div a {
    border-bottom: 1px solid #fff;
    color: #fff;
    text-decoration: none;
}

/* Good */
div {
    color: #fff;
}
div a {
    border-bottom: 1px solid currentColor;
    color: currentColor;
    text-decoration: none;
}
```

{% callout %}
We often use the `currentColor` keyword in the _camelCase_ format. However, CSS is case-insensitive meaning that `CurrentColor`, `currentcolor` or even `cUrReNtCoLoR` are valid keywords and have the same effect as `currentColor`.
{% endcallout %}