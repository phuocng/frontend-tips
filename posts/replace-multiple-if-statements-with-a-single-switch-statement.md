---
title: Replace multiple if statements with a single switch statement
category: trick
date: 2021-02-26 11:35:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

We demonstrate the trick with a simple issue: Determine the quarter of a given date.
Since the month in JavaScript is zero-based, the month of a given `date` can be determined as 

```js
// `date` is the input date
const month = date.getMonth() + 1;
```

The quarter is calculated based on the range of month:

```js
let quarter = 1;
if (month <= 3) {
    quarter = 1;
} else if (month <= 6) {
    quarter = 2;
} else if (month <= 9) {
    quarter = 3;
} else {
    quarter = 4;
}
```

It is not easy for us to scan multiple `if` statements above. We can make it more readable with a single `switch (true)` statement:

```js
switch (true) {
    case (month <= 3): 
        quarter = 1;
        break;
    case (month <= 6):
        quarter = 2;
        break;
    case (month <= 9):
        quarter = 3;
        break;
    default:
        quarter = 4;
        break;
}
```

{% callout %}
This trick gives us an idea of using `switch (true)` to make the code more readable. The specific issue in this post, calculating the [quarter of a given date](https://1loc.dev/#get-the-current-quarter-of-a-date), can be done with a [single line-of-code](https://1loc.dev).
{% endcallout %}

_More_

* [Early return](/early-return.html)
* [Replace multiple if statements with a lookup table](/replace-multiple-if-statements-with-a-lookup-table.html)
* [Use Array.includes for multiple conditionals](/use-array-includes-for-multiple-conditionals.html)