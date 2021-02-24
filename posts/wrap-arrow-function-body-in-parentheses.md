---
title: Wrap arrow function body in parentheses
category: practice
date: 2021-02-22 23:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

If the inline arrow function consists of the `<`, `<=`, `>` or `>=` operator, it is advised to wrap the function body in parentheses.

Looking at the two versions below, it is easy for the first variant to cause a misleading.

```js
// Bad
const compareToZero = a => a <= 0 ? 0 : a;

// Good
const compareToZero = a => (a <= 0 ? 0 : a);
```