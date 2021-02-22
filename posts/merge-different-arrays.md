---
title: Merge different arrays
category: tip
tags:
  - posts
layout: layouts/post.njk
---

We can use the ES6 spread operator to merge different arrays into one:

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const final = [...a, ...b, ...c];   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

The spread operator is handy if we use the `push` method as well:

```js
const a = [1, 2, 3];
const b = [4, 5, 6];

a.push(...b);
a;              // [1, 2, 3, 4, 5, 6]
```