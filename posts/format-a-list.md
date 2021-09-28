---
title: Format a list
category: Tip
date: '2021-02-27 18:59:00 +7'
topics: JavaScript
---

We can take the advantage of the [Intl.ListFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) object to format a list for a given locale:

```js
const people = ['Foo', 'Bar', 'Fuzz'];

new Intl.ListFormat('en', { type: 'conjunction' }).format(people);
// 'Foo, Bar, and Fuzz'

new Intl.ListFormat('en-GB', { type: 'disjunction' }).format(people);
// 'Foo, Bar, or Fuzz'
```
