---
title: Use an underscore to name unused argument
category: practice
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

You can use an underscore to name the argument which is not used in an arrow function. It makes the code more readable.

```js
// No arguments
const noop = _ => {};

const range = (min, max) => (
    Array(max - min + 1).fill(0).map((_, i) => min + i);
);
```