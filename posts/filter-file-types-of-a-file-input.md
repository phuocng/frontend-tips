---
title: Filter file types of a file input
category: tip
date: 2021-03-01 13:28:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
---

By default, when clicking a file input (`<input type="file" />`) the browser will list all files in the destination folder.

The file input provides the [accept attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept) which hints the browser to list particular file types. The attribue value can be one or many file extensions, MIME types, separated by a comma.

For example, the input asking users for choosing an avatar looks like:

```html
<input
    type="file"
    accept=".png, .jpg, .jpeg"
/>

<!-- Or -->
<input
    type="file"
    accept="image/png, image/jpeg"
/>
```

{% callout %}
The `accept` attribute does NOT prevent user from selecting a file whose type isn't in the list. Do NOT use it to validate the selected file.
{% endcallout %}