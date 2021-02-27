---
title: Log a value to the Console
category: tip
date: 2021-02-27 09:50:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

There are a few ways to log a value to the _Console_, but using object destructuring is the convenient and short one.

```js
const fullName = 'John Doe';

console.log('full name' + fullName);
console.log('full name', fullName);

// Better: use template string
console.log(`full name: ${fullName}`);

// Best: use object destructuring
console.log({ fullName });  // { fullName: 'John Doe' }
```