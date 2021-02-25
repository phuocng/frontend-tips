---
title: Conditional logging in the Console
category: tip
date: 2021-02-24 17:15:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DevTools
---

Use `console.assert()` to print out something in the _Console_ when a given condition doesn't match.

```js
if (condition) {
    // Do something
} else {
    console.log('Error message');
}

// Better
console.assert(!condition, 'Error message');
```

_More_

* [Log a variable in an arrow function](/log-a-variable-in-an-arrow-function.html)