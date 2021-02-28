---
title: Ignore items from array destructuring
category: tip
date: 2021-02-28 14:57:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

When destructuring an array, you can skip certain items by using blanks:

```js
const dateTime = '2021-02-28T14:57:00';

// Ignore the date part
const [, time] = dateTime.split('T');

// Ignore the seconds
const [hours, minute, ] = time.split(':');

hours;      // '14'
minutes;    // '57'
```

If you are working in a team, then it's a good idea to add comments for skipped items. It also makes the code more readable:

```js
const [
    ,   // date
    time
] = dateTime.split('T');

const [hours, minutes, /* seconds */] = time.split(':');
```

_More_

* [Use an underscore to name unused argument](/use-an-underscore-to-name-unused-argument.html)