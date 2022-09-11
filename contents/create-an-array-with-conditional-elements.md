---
title: Create an array with conditional elements
category: Tip
date: 2021-03-12 13:33:00 +7
layout: layouts/post.njk
topics: JavaScript
---

There are a few ways to initialize an array with conditional elements.

### Using the `push` function

```js
const arr = ['foo', 'bar'];
if (condition) {
    arr.push('fuzz');
}
```

We can use the [short-circuits conditionals](/use-short-circuits-conditionals.html) to make it shorter:

```js
condition && arr.push('fuzz');
```

### Using the `concat` function

```js
const arr = ['foo', 'bar'].concat(condition ? 'fuzz' : []);
```

The `push` and `concat` functions only work if we want to insert the elements at the end of the array.

### Filtering the falsy values

```js
const arr = ['foo', condition ? 'fuzz' : undefined, 'bar'].filter(Boolean);
```

The array always inserts new item which can be the new element or `undefined` depending on whether or not the condition matches.
At the end, the `undefined` items are removed from the array.

This approach allows us to insert element at any position, however we have to be careful with [removing the _falsy_ values](https://1loc.dev/#remove-falsy-values-from-array) from the array because the original array can contains the falsy items.

### Tip: using the spread operator

By using the spread operator (`...`), we can create an array with a single expression as following:

```js
const arr = ['foo', ...(condition ? ['fuzz'] : []), 'bar'];
```

The following code demonstrates a simple use case. It adds a product to the cart on an ecommerce website.

To do that, we have to check if the `products` property exists on the `cart` object first. If not, it will create an empty `products`. The conditional elements are the current `products`.

```js
if (!cart['products']) {
    cart['products'] = [];
}
cart['products'].push(product);

// Better version
cart['products'] = [...(cart['products'] || []), product];
```

Do you want to see one more advanced example? The function below uses the spread and [comma operator](/shorten-codes-with-the-comma-operator.html) to [group an array of objects by a key](https://1loc.dev/#group-an-array-of-objects-by-a-key):

```js
const groupBy = (arr, key) => arr.reduce((a, i) => ((a[i[key]] = [...(a[i[key]] || []), i]), a), {});
```
