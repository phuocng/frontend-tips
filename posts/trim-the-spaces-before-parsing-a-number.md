---
title: Trim the spaces before parsing a number
category: practice
date: 2021-02-23 09:49:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Both `Number()` and `parseInt` accept the spaces in input. But be aware that you could get different result when passing a value with spaces as following:

```js
parseInt('   5   ');    // 5
parseInt('12 345');     // 12, not 12345
```

To avoid the similar situations, you should [remove all spaces](https://1loc.dev/#remove-spaces-from-a-string) before parsing:

```js
parseInt(value.replace(/\s+/g, ''), 10);
```
