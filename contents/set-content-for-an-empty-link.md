---
title: Set content for an empty link
category: Tip
date: 2021-02-24 10:20:00 +7
layout: layouts/post.njk
topics: CSS
---

For a link whose content is empty, we can replace the content with the `href` attribute:

```css
a[href^='http']:empty:before {
    content: attr(href);
}
```

{% demo '/assets/demo/set-content-for-an-empty-link/index.html' %}
