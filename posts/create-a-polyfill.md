---
title: Create a polyfill
category: tip
date: 2021-03-10 20:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Due to the fact that JavaScript APIs have their own specifications, not all the browsers support a particular specification at the same time.
A JavaScript API can be implemented in a browser sooner or later than the other browsers.

Because of that, we have to provide a _patch_ version of API to make sure that it still works on browsers that don't support it natively. That kind of patch is called _polyfill_.

The following sample code provides a patch for the `startsWith` method which doesn't override the API if it exists:

```js
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString) {
        // The implementation
        // return `true` or `false`
    }
}
```

If we provide a polyfill as a library, then we can use the following approach:

```js
// The polyfill implementation
const startsWithPolyfill = function(searchString) {
    // ...
    // return `true` or `false`
};

const startsWith = String.prototype.startsWith || startsWithPolyfill;

// Export the function
export default startsWith;
```