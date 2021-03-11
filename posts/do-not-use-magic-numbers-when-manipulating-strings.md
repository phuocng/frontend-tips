---
title: Do not use magic numbers when manipulating strings
category: practice
date: 2021-03-09 08:34:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

It's quite often that we pass the index parameter when using string manipulation functions such as `slice`, `splice`, `substr` or `substring`.

Let's take a look at a simple example which [converts a given date](https://1loc.dev/#convert-a-date-to-yyyy-mm-dd-format) object to _YYYY-MM-DD_ format.

Given a `date` object, we can get the string representing the date in the ISO format:

```js
date.toISOString()
// '2021-03-09T01:42:46.002Z'
```

The output is constructed by different parts which starts with the full date, `2021-03-09` as we see in the example above.
So, it's easy to get the full date by extracting it from the ISO format:

```js
const format = date => date.toISOString().slice(0, 10);
```

`10` is called a magic number, because when the other people look at the code, they don't have idea where the number comes from.

Rather than using a magic number, it's recommended to explain what it is and how it's calculated:

```js
// The better version
const FULL_DATE_LENGTH = 'YYYY-MM-DD'.length;

const format = date => date.toISOString().slice(0, FULL_DATE_LENGTH);
```

_More_

* [Keep the calculation of a magic number](/keep-the-calculation-of-a-magic-number.html)