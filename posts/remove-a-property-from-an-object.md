---
title: Remove a property from an object
category: tip
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

We can use the ES6 spread operator to remove a property from an object:

```js
const { name, ...rest } = { name: 'Foo', age: 20 };

console.log(name);      // 'Foo'
console.log(rest);      // { age: '20' }
```

It's also possible to remove a dynamic property:

```js
const property = 'name';
const { [property]: value, ...rest } = { name: 'Foo', age: 20 };

console.log(value);     // 'Foo'
console.log(rest);      // { age: '20' }
```