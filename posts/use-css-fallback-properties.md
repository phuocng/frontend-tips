---
title: Use CSS fallback properties
category: tip
date: 2021-03-03 14:45:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

In the front-end development, supporting different browsers is a challenge. Using CSS fallback properties is a common tip to support the cross-browser compatibility.

We can set different values for the same CSS property. The browser will apply the last supported declaration.

Usually we put the most supported value first. The other values, vendor-prefixed for example, are declared later. If the browser can't recognize them, it will fallback to the previous value.

For example, the [`linear-gradient()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient()) is supported in modern browsers, but we have been familiar with the sample code below in the old days.

```css
div {
    background-image: url(/path/to/fallback-gradient.svg); 
    background-image: -webkit-gradient(...);
    background-image: -webkit-linear-gradient(...);
    background-image: -moz-linear-gradient(...);
    background-image: -ms-linear-gradient(...);
    background-image: -o-linear-gradient(...);
    background-image: linear-gradient(...);
}
```