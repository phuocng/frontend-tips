---
title: Pass an array as function arguments
category: tip
date: 2021-03-03 09:48:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

JavaScript has some built-in functions that accept a list of individuals arguments, but passing an array doen't work. `Math.max`, `Math.min` are some of them.

They are used to find the [biggest](https://1loc.dev/#find-the-maximum-item-of-an-array) and [smallest numbers](https://1loc.dev/#find-the-minimum-item-of-an-array) in the passed arguments, repectively.

```js
Math.max(1, 2, 3, 4);       // 4

// Doesn't work because it treats the array as a single parameter 
// That parameter isn't a number, so the function returns `NaN`
Math.max([1, 2, 3, 4]);     // NaN 
```

If we want to pass a dynamic array of numbers, then the ES6 spread operator (`...`) can help. It turns a varible to a list of individual parameters:

```js
const array = [1, 2, 3, 4];
Math.max(...array);         // 4
```

JavaScript engines implemented by different browsers have the limited number of parameters. Using the `...` operator doesn't work if you have a big array. Using the `reduce` method doesn't have this problem.

```js
const max = arr => arr.reduce((a, b) => Math.max(a, b));
max([1, 2, 3, 4]);          // 4
```

_More_

* [Accept any numbers of parameters](/accept-any-numbers-of-parameters.html)