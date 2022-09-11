---
title: Keep the calculation of a magic number
category: Best practice
date: 2021-03-11 19:34:00 +7
layout: layouts/post.njk
topics: JavaScript
---

Let's say that we want to calculate the number of [difference days](https://1loc.dev/#calculate-the-number-of-difference-days-between-two-dates) between two given dates.
By simply using the `-` operator, it's easy for us to calculate the differences between two date objects, `date` and `otherDate` for example:

```js
const diff = Math.abs(date - otherDate);
```

The function returns the number of milliseconds. In order to get the number of days, we have to divide it by `86400000`:

```js
Math.ceil(diff / 86400000);
```

We know that `86400000` is the total number of milliseconds in a day. The code is still working fine until there's another people on the team looking at it, and it takes them time to realize what the number `86400000` is.

To make the code more readable and easy to maintain, we should replace the magic number with its calculation:

```js
// Better version
const diffDays = (date, otherDate) => Math.ceil((Math.abs(date - otherDate) / 1000) * 60 * 60 * 24);
```

If the number is used across different places, for example when we create a library for manipulating dates, then it's recommended to declare the magic number as a constant:

```js
// The best version
// constants.js
const MILLISECOND_DAY = 1000 * 60 * 60 * 24;
export { MILLISECOND_DAY };
```

Then reuse it later:

```js
import { MILLISECOND_DAY } from './constants';

const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / MILLISECOND_DAY);
```

### See also

-   [Do not use magic numbers when manipulating strings](/do-not-use-magic-numbers-when-manipulating-strings.html)
