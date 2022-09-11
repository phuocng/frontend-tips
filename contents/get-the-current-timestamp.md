---
title: Get the current timestamp
category: Tip
date: 2021-02-27 16:43:00 +7
layout: layouts/post.njk
topics: JavaScript
---

There are a few ways to get the current timestamp. All method return the number of milliseconds:

```js
new Date().getTime();

Date.now();

// These method are the same
// The unary operator (`+`) calls the `valueOf` method automatically
+new Date();
new Date().valueOf();
```

> Take a look at this [snippet](https://1loc.dev/#get-the-current-timestamp-in-seconds) if you want to get the current time in seconds
