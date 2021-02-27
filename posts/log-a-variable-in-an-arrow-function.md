---
title: Log a variable in an arrow function
category: trick
date: 2021-02-25 11:57:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Have you ever had to debug an 1 line arrow function using `console.log`? It usually requires us to switch to a multiple lines version such as:

```js
const formatYmd = date => {
    console.log(date.toISOString());
    return date.toISOString().slice(0, 10);
};
```

You can get rid of that conversion by using the `||` operator. It works because `console.log()` returns `undefined`, so the `||` will enforce the function to evaluate and return the right side which is our actual function.

```js
const formatYmd = date => console.log(date.toISOString()) || date.toISOString().slice(0, 10);

formatYmd(new Date());
// Print something like `2021-02-25T04:52:39.720Z` in the Console
```

There is another, less known tip which uses the comma operator:

```js
const formatYmd = date => (console.log(...), date.toISOString().slice(0, 10));
```

{% callout %}
You will find more useful 1 line-of-code functions on [1 LOC](https://1loc.dev)
{% endcallout %}

_More_

* [Conditional logging in the Console](/conditional-logging-in-the-console.html)
* [Log a value to the Console](/log-a-value-to-the-console.html)
* [Log an array to the Console](/log-an-array-to-the-console.html)