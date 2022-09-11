---
title: Remove the border from the last navigation item
category: Tip
date: 2021-02-24 13:30:00 +7
layout: layouts/post.njk
topics: CSS
---

We often use the `:last-child` selector to unapply particular styles (such as `border`) for the last item.
Creating a navigation that each item has a bottom border usually looks like:

```css
li {
    border-bottom: 1px solid #e5e7eb;
}

/* Don't add border to the last item */
li:last-child {
    border-bottom: none;
}
```

Using the `:not` pseudo-class, we can make the code shorter and more easy to maintain with a single CSS declaration:

```css
/* Add the border to all items except the last one */
li:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
}
```

Another approach is to use the `+` selector:

```css
li + li {
    border-top: 1px solid #e5e7eb;
}
```

## Demo

:demo[]{title="Remove the border from the last navigation item" url="/demo/remove-the-border-from-the-last-navigation-item/index.html"}
