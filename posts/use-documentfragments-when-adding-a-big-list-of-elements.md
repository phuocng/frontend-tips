---
title: Use DocumentFragments when adding a big list of elements
category: practice
date: 2021-04-28 09:25:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DOM, JavaScript
metadata:
  image: use-documentfragments.png
---

We often use the `appendChild` method to [add a new element](https://htmldom.dev/append-to-an-element) to a given element:

```js
const li = document.createElement('li');
li.innerHTML = 'List item';

// Append to given list
ul.appendChild(li);
```

When a new element is inserted to the page, the browser has to recompute the dimensions of its parent and the parent's child nodes. The process is known as the reflow.
Similarly, changing the styles of the element might cause a repaint.

Adding a big list of elements to the document might affect the performance of page because it triggers reflow multiple times:

```js
for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    ul.appendChild(li);
}
```

Depsite the fact that modern browsers make a lot of optimizations including batch updates, it's recommended to use `DocumentFragment` in this case.
We create a minimal document without parent, and append our elements to it. It doesn't trigger any reflow or repaint because the document fragment hasn't been added to the page yet:

```js
const fragment = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.innerHTML = `List item ${i}`;
    fragment.appendChild(li);
}
```

Finally, the document fragment is inserted to the page:

```js
ul.appendChild(fragment);
```

The reflow is triggered once!