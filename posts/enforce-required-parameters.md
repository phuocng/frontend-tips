---
title: Enforce required parameters
category: Trick
date: '2021-02-24 21:05:00 +7'
topics: JavaScript
---

In ES6, the default value of a parameter is evaluated if the parameter is missing. It allows us to enfore that a given parameter is required.

```js
const required = () => {
    throw new Error('Missing parameter');
};

const getAges = (yearOfBirth = required()) => new Date().getFullYear() - yearOfBirth;
```

Calling `getAges()` without parameter will throw the exception `Missing parameter`.
