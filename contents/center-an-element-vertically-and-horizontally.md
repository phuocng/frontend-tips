---
title: Center an element vertically and horizontally
category: Tip
date: 2021-03-17 14:25:00 +7
layout: layouts/post.njk
topics: CSS
---

There're different ways to [center](https://csslayout.io/patterns/centering) a given element in both directions.

### Using flexbox

```css
.container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

### Using grid

```css
.container {
    display: grid;
    place-content: center;
}
```

### Using positions

We position the child element absolutely to the parent element.

```css
.parent {
    position: relative;
}
.child {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}
```
