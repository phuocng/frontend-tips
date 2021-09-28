---
title: Convert string to number
category: Tip
date: '2021-02-22 16:29:00 +7'
topics: JavaScript
---

Instead of using the `Number()` constructor to convert a string to number, you can use the `+` operator:

```js
+'010'; // 10
+'2e1'; // 20
+'0xF'; // 15
```
