---
title: Open all links in new tabs
category: Trick
date: 2021-04-13 13:39:00 +7
layout: layouts/post.njk
topics: HTML
---

We all know that setting the `target="_blank"` attribute to an individual link will open it in a new tab.

It's uncommon to see a real use case where you want all links on the page to be opened in a new tab. A site that only collects links of external resources might be an example.

In that case, rather than adding the attribute to all links, you just set it to the `base` tag:

```html
<head>
    <base target="_blank" />
    ...
</head>
```
