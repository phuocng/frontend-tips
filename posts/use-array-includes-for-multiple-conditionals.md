---
title: Use Array.includes for multiple conditionals
category: tip
date: 2021-03-23 12:21:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Let's consider a function that determines the total [number of days](https://1loc.dev/#get-the-number-of-days-in-given-month) in a given month.

```js
const getDays = (month, year) => {
  ...
};
```

Since months in JavaScripts start from 0, we assume that the `month` parameter is zero-based index. We can make the function [quickly return](/early-return.html) if the month is April, June, September or November:

```js
if (month === 3 || month === 5 || month === 8 || month === 10) {
  return 30;
}
...
```

These conditionals can be replaced with a single check by using the `Array.includes` function:

```js
if ([3, 5, 8, 10].includes(month)) {
  return 30;
}
...
```

{% callout %}
For this specific function, we can use a [lookup table](/replace-multiple-if-statements-with-a-lookup-table.html):

```js
const isLeapYear = year => (
  (year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0)
);

const getDays = (month, year) => (
  [
    31,
    (isLeapYear(year) ? 29 : 28),
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ][month]
);
```
{% endcallout %}

_More_

* [Early return](/early-return.html)
* [Replace multiple if statements with a lookup table](/replace-multiple-if-statements-with-a-lookup-table.html)
* [Replace multiple if statements with a single switch statement](/replace-multiple-if-statements-with-a-single-switch-statement.html)