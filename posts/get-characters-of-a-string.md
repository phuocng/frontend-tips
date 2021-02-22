---
title: Get characters of a string
tags:
  - posts
layout: layouts/post.njk
---

Use ES6 destructing to get the first and the remaining characters of a string:

```js
const [first, ...rest] = 'Hello';
// first = 'H'
// rest = ['e', 'l', 'l', 'o'] 
```

We can use it to capitalize or decapitalize a string:

```js
capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;
```