---
title: Get characters of a string
category: Tip
date: 2021-02-22 14:07:00 +7
layout: layouts/post.njk
topics: JavaScript
---

The following line returns all characters of a given string:

```js
const message = 'Hello';
const chars = [...message]; // ['H', 'e', 'l', 'l', 'o']
```

If you want to get the first and the remaining characters of a string, then use ES6 destructing:

```js
const [first, ...rest] = message;
// first = 'H'
// rest = ['e', 'l', 'l', 'o']
```

We can use it to [capitalize](https://1loc.dev/#capitalize-a-string) or [decapitalize](https://1loc.dev/#decapitalize-a-string) a string:

```js
capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;

capitalize('hello world'); // 'Hello world'
```

### See also

-   [Ignore items from array destructuring](/ignore-items-from-array-destructuring.html)
-   [Pick the first and last items of an array](/pick-the-first-and-last-items-of-an-array.html)
