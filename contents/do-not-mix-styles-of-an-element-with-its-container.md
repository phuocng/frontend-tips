---
title: Don't mix styles of an element with its container
category: Best practice
date: 2021-05-12 19:26:00 +7
layout: layouts/post.njk
topics: CSS
metadata:
    image: do-not-mix-styles.png
---

When developing a reusable component, we should follow the rule: the component should look like the same regardless where it's placed.

For example, the `margin` style in the following CSS is used for a specific use case where we want to have a space between `.item` and its sibling element.

```css
.item {
    margin: 1rem 0;

    /* Other styles */
    ...;
}
```

It isn't recommended because it could be broken when you use `item` in another container. Instead, you should use a wrapper to separate the styles of element and its container:

```css
.item-wrapper {
    margin: 1rem 0;
}
```

The `item` class can be reused in different places without breaking the look and feel:

```html
<div class="item-wrapper">
    <div class="item">...</div>
</div>

<!-- Used in another wrapper -->
<div class="other-wrapper">
    <div class="item">...</div>
</div>
```
