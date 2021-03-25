---
title: Combine Google font requests
category: practice
date: 2021-03-22 21:25:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS, Google Font
---

Usually we add separated links when loading different [Google font](https://fonts.google.com) as following:

```html
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600"
    rel="stylesheet">
<link
    href="https://fonts.googleapis.com/css?family=Roboto:400,700"
    rel="stylesheet">
```

The number of HTTP requests sent to Google can be increased depending on how many fonts we want to load. It can affect the page's loading time.

It's recommended to combine the requests into a single one using the `|` character. The link might look like:

```html
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600|Roboto:400,700"
    rel="stylesheet">
```

Note that the syntax is a little bit different when using the Google Font v2. It allows to pass multiple `family` parameters:

```html
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400,600&family=Roboto:wght@400,700"
    rel="stylesheet">
```

_More_

* [Avoid invisible text when loading a font](/avoid-invisible-text-when-loading-a-font.html)
* [Load given characters in a Google font request](/load-given-characters-in-a-google-font-request.html)