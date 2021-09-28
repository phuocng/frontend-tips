---
title: Return an object in an arrow function quickly
category: Tip
date: '2021-02-25 10:53:00 +7'
topics: JavaScript
---

If you want to return an object literal in an arrow function, just wrap the object in `()`:

```js
// Doesn't work
const formatName = (first, last) => {
  full: `${first} ${last}`,
  short: `${first.charAt(0)} ${last.charAt(0)}`.toUpperCase(),
};

// Work
const formatName = (first, last) => ({
  full: ...,
  short: ...,
});

formatName('John', 'Doe');  // { full: 'John Doe', short: 'J D' }
```
