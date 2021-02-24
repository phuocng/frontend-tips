---
title: Use template literal to concatenate strings
category: practice
date: 2021-02-23 22:50:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

There are some ways to concatenate variables in a string. It's recommended to use template literal syntax to avoid unexpected result when the types of variables vary.

```js
const foo = 4;
const bar = 2;
const fuzz = 'Fuzz';

// Bad: Use + operator
foo + bar + fuzz;   // '6Fuzz'

// Better: Use concat
''.concat(foo, bar, fuzz);      // 42Fuzz
[foo, bar, fuzz].join('');      // 42Fuzz

// Best: Use template literal
`${foo}${bar}${fuzz}`;          // 42Fuzz
```

_More_

* [Get rid of escaping quotes with template literal](/get-rid-of-escaping-quotes-with-template-literal.html)
