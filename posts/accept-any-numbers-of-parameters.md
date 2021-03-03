---
title: Accept any numbers of parameters
category: tip
date: 2021-03-01 12:01:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

In the old days, we can use the `arguments` variable to get the dynamic parameters that are passed to a function.

```js
const sum = function() {
    return Array.from(arguments).reduce((a, b) => a + b, 0);
};

sum(1);                 // 1
sum(1, 2);              // 3
sum(1, 2, 3);           // 6
sum(1, 2, 3, 4);        // 10
```

However, most of us aren't aware about the existence of `arguments`. It has some drawbacks such as
* It's not an array, so we usually have to convert it to array first in order to use `Array` methods
* More importantly, it isn't available in arrow functions

The ES6 rest parameter (`...`) provides an easier way to work with an unknown numbers of parameters. The `sum` function above can be [written](https://1loc.dev/#calculate-the-sum-of-arguments) as following:

```js
const sum = (...params) => params.reduce((a, b) => a + b, 0);

sum(1, 2, 3, 4, 5);     // 15
```

_More_

* [Pass an array as function arguments](/pass-an-array-as-function-arguments.html)