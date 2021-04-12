---
title: Force the browsers to download new favicon
category: tip
date: 2021-04-12 11:05:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
---

To reduce the loading time, the browsers often cache static assets such as images, JavaScript, CSS files, etc. A favicon is one of them.

Some browsers, Chrome for example, maintain a separate storage to cache favicons because they're frequently used in different places such as bookmarks, history.

When we replace the favicon with a new one, our visitors probably still see the old one, even if they clear the browser cache.

To prevent this from happening, we can always force the browsers to download the new favicon by adding a query parameter:

```html
<link rel="icon" href="/favicon.png?ver=2">
```

Of course, it's up to you to pick another name and value of parameter.