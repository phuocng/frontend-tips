---
title: Use the strict equality operator when comparing variables
category: practice
date: 2021-02-25 13:42:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

When checking whether two given variables equal to each other, always use the strict equality (`===`) instead of the equality (`==`) operator.

The `===` operator not only checks the values, but also the types of variables. It's safer then `==` which performs type conversions before comparing the values.

```js
0 == false;         // true
0 === false;        // false

0 == [];            // true
0 === [];           // false

0 == '';            // true
0 === '';           // false
```

You can take a look at [== vs ===](https://thisthat.dev/equality-operator-vs-strict-equality-operator) to see more examples.