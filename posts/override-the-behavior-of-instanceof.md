---
title: Override the behavior of instanceof
category: trick
date: 2021-02-23 09:47:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

`instanceof` doesn't work for primitive types.

If you want to use `instanceof` all the time, then you can override the behavior of `instanceof` by implementing a static method with the key of `Symbol.hasInstance`.
In the following code, we create a class called `PrimitiveNumber` that checks if a value is a number:

```js
class PrimitiveNumber {
    static [Symbol.hasInstance](value) {
        return typeof value === 'number';
    }
}

12345 instanceof PrimitiveNumber;           // true
'helloworld' instanceof PrimitiveNumber;    // false
```