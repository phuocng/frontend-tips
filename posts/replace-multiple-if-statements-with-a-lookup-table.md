---
title: Replace multiple if statements with a lookup table
category: practice
date: 2021-03-08 22:10:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Assume that we are going to determine the [weekday](https://1loc.dev/#get-the-weekday-of-a-date) of a date. Given a `date` object, we can get the day of the week:

```js
const day = date.getDay();
```

The day is zero-based index, and starts with Sunday. It's easy to write a few `if` statements such as:

```js
let weekDay = '';
if (day === 0) {
    weekDay = 'Sunday';
} else if (day === 1) {
    weekDay = 'Monday';
} else if (day === 2) {
    // More if statements are omitted
    // ...
} else if (day === 6) {
    weekDay = 'Saturday';
}
```

Since all the `if` statements above have the same left-hand side expression, we can make a better version using the `switch` statement:

```js
// Better version
let weekDay = '';
switch (day) {
    case 0: 
        weekDay = 'Sunday';
        break;
    case 1:
        weekDay = 'Monday';
        break;
    // More cases are omitted
    //...
    case 6:
        weekDay = 'Saturday';
        break;
}
```

Using the `switch` statement makes the code more readable, but it seem that the number of line-of-codes in both approaches are the same.

In pure English, we map _0_ with _Sunday_, _1_ with _Monday_, and so forth. Why don't we create a lookup table that quickly returns the matching item based on given key?

```js
// The best version
const lookup = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday',
];
const weekDay = lookup[day];
```

The code is short, and only uses `const` for variable declarations meaning that it doesn't have side effects and easy to test.

In reality, a lookup table can be an array, object literal or a `Map`. The data structure varies depending on your business logic.

As long as you get the idea, the following example uses the same practice. It is a function that converts a given number to the Roman numeral representation.

```js
const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

const convertToRoman = number => lookup.reduce(
    (curr, [key, value]) => {
        curr += key.repeat(Math.floor(number / value));
        number = number % value;
        return curr;
    },
    ''
);

convertToRoman(20);     // 'XX'
convertToRoman(21);     // 'XXI'
convertToRoman(2021);   // 'MMXXI'
```

{% callout %}
If a function uses a fixed lookup table, it's recommended to move the lookup to outside of the function
{% endcallout %}

_More_

* [Early return](/early-return.html)
* [Replace multiple if statements with a single switch statement](/replace-multiple-if-statements-with-a-single-switch-statement.html)
* [Use Array.includes for multiple conditionals](/use-array-includes-for-multiple-conditionals.html)