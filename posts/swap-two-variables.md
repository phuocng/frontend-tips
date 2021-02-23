---
title: Swap two variables
category: tip
tags:
  - posts
layout: layouts/post.njk
---

There are a few ways to [swap two variables](https://1loc.dev/#swap-two-variables) without using a temporary variable:

```js
[a, b] = [b, a];

// Or
a = [b, b = a][0];

// Or
a = (x => x)(b, b = a);
```

If both variables are numbers, then you can swap them with operators:

```js
a = b + (b = a, 0);

// Or
a = b * (b = a, 1);
```