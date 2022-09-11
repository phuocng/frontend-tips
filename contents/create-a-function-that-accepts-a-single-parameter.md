---
title: Create a function that accepts a single parameter
category: Tip
date: 2021-03-15 11:56:00 +7
layout: layouts/post.njk
topics: JavaScript
---

Quite often, we use the `map` function to transform each item of an array into a new one. However, it's common to see an issue if we don't pass the parameter to the mapper function.

For example, the following code converts each item of array into a number:

```js
['1', '2', '3', '4', '5'].map((v) => parseInt(v));

// [1, 2, 3, 4, 5]
```

However, the result isn't correct if we shorten it as below:

```js
['1', '2', '3', '4', '5'].map(parseInt);

// [1, NaN, NaN, NaN, NaN]
```

The issue is caused by the fact that the mapper function accepts three parameters which are the array item, index, and the array.
Calling `.map(parseInt)` means that we pass the item index to `parseInt` as the second parameter. As a result, we will see `NaN`.

This leads to a requirement of building a function that [accepts only the first parameter](https://1loc.dev/function/create-a-function-that-accepts-a-single-argument/), and ignore the remaining parameters.

```js
const unary = (fn) => (params) => fn(params);
```

The `unary` function creates a wrapper of a function, and ignores all parameters except the first one. With that function in our hand, we can pass the mapper to the `map` function like this:

```js
['1', '2', '3', '4', '5'].map(unary(parseInt));

// [1, 2, 3, 4, 5]
```

### See also

-   [Accept any numbers of parameters](/accept-any-numbers-of-parameters.html)
