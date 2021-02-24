---
title: Visualize elements on page with the outline style
category: trick
date: 2021-02-23 09:59:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DOM, JavaScript
---

The outline property is useful when you want to visualize elements on the page. In the following sample code, we iterate over all the elements and set the `outline` property with a [random hex color](https://1loc.dev/#generate-a-random-hex-color):

```js
const randomColor = () => (
  `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
);

[].forEach.call(
    document.querySelectorAll('*'),
    ele => ele.style.outline = `1px solid ${randomColor()}`;
);
```

Of course, you will need an opposite command to reset the `outline` property:

```js
[].forEach.call(
    document.querySelectorAll('*'),
    ele => ele.style.removeProperty('outline')
);
```

You can change the selector from `*` to whatever you want to match the set of particular elements, for example:

```js
// Set the outline for links only
[].forEach.call(
    document.querySelectorAll('a'),
    ...
);
```