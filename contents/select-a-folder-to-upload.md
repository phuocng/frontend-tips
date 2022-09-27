---
title: Select a folder to upload
category: Tip
date: 2022-09-27 14:50:00 +7
layout: layouts/post.njk
topics: HTML
metadata:
    image: webkitdirectory.png
---

We often use the file input to give users a way to choose and upload one or multiple files:

```html
<!-- Upload a single file -->
<input type="file" />

<!-- Upload many files -->
<input type="file" multiple />
```

The input also has a special attribute named `webkitdirectory` which allows users to choose and upload an entire folder including all of its sub directories recursively.

```html
<input type="file" webkitdirectory multiple />
```

It's [supported](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory) in all modern browsers.
