---
title: Prevent the default behavior with jQuery event handler
category: practice
tags:
  - posts
layout: layouts/post.njk
---

If you're using jQuery to manage the events, then you're able to use `return false` within the event handler:

```js
$(element).on('click', function(e) {
    return false;
});
```

Before returning the value of `false`, the handler would do something else. The problem is that if there's any runtime error occurring in the handler, we will not reach the `return false` statement at the end.

In that case, the default behavior will be taken:

```js
$(element).on('click', function(e) {
    // Do something here, but if there's error at runtime
    // ...
    return false;
});
```

We can avoid this situation by using the `preventDefault` method before performing any custom handler:

```js
$(element).on('click', function(e) {
    e.preventDefault();

    // Do something here
    // The default behavior is prevented regardless errors at runtime
    // ...
});
```