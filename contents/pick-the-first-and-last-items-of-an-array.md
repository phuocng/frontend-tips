---
title: Pick the first and last items of an array
category: Tip
date: 2021-05-17 20:37:00 +7
layout: layouts/post.njk
topics: JavaScript
metadata:
    image: pick-first-last.png
---

If you want to receive the first and last items of a given array, you might think of the common way as following:

```js
const length = arr.length;
const first = arr[0];
const last = arr[arr.length - 1];
```

Because an array is also an object, the `length` property can be accessed with the destructuring syntax:

```js
const { length } = arr;
```

Also, an array item at any position can be accessed with its index. Hence, we can shorten three lines at the top with a single line:

```js
const { length, 0: first, [length - 1]: last } = arr;
```

## See also

-   [Get characters of a string](/get-characters-of-a-string)
-   [Ignore items from array destructuring](/ignore-items-from-array-destructuring)
