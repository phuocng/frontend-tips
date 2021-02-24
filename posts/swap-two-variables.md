---
title: Swap two variables
category: tip
date: 2021-02-23 10:09:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
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