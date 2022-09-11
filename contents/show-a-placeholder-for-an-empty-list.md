---
title: Show a placeholder for an empty list
category: Tip
date: 2021-02-24 16:00:00 +7
layout: layouts/post.njk
topics: CSS
---

By using the `:empty` selector, it's possible for us to show a custom placeholder.

```css
ul:empty::after {
    content: 'Empty';
}
```

If you want the placeholder to be more flexible instead of being hardcoded in CSS, it can be taken from an attribute, such as `data-placeholder`:

```css
ul:empty::after {
    content: attr(data-placeholder);
}
```

> The `:empty` selector doesn't have effect if the list contains a whitespace or an empty child node

## Demo

:demo[]{title="Show a placeholder for an empty list" url="/demo/show-a-placeholder-for-an-empty-list/index.html"}
