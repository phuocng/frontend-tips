---
title: Conditional logging in the Console
category: tip
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