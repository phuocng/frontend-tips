---
title: Convert string to number
category: tip
tags:
  - posts
layout: layouts/post.njk
---

Instead of using the `Number()` constructor to convert a string to number, you can use the `+` operator:

```js
+'010';     // 10
+'2e1';     // 20
+'0xF';     // 15
```