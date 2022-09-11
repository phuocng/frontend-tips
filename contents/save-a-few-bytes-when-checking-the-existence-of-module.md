---
title: Save a few bytes when checking the existence of module
category: Trick
date: 2021-03-15 12:25:00 +7
layout: layouts/post.njk
topics: JavaScript
---

Say we are creating a library and want to export our APIs to the consumers. In order to support the CommonJS module, we use the following check:

```js
if (typeof module !== 'undefined') {
    module.exports = ourFunction;
}
```

However, it can be shorten and saved a few bytes when being minified:

```js
if (typeof module < 'u') {
    // ...
}
```

I saw that trick when looking at the [Preact](https://preactjs.com)'s [source](https://github.com/preactjs/preact/blob/master/src/cjs.js).
