---
title: Separate list items
category: Tip
date: 2021-02-24 12:19:00 +7
layout: layouts/post.njk
topics: CSS
---

The `content` property of the `:after` selector can be used to separate list items:

```css
/* Inline items */
span:not(:last-child):after {
    content: ' • ';
}

/* List items */
li:not(:last-child):after {
    content: ',';
}
```

The footer of this website uses the same technique.

{% demo '/assets/demo/separate-list-items/index.html' %}

## See also

-   [Style list items with special characters](/style-list-items-with-special-characters)
