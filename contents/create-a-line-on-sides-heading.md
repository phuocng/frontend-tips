---
title: Create a line-on-sides heading
category: Tip
date: 2021-03-03 16:16:00 +7
layout: layouts/post.njk
topics: CSS
---

A heading whose left and right sides are horizontal lines can be structured as a grid with three columns:

```css
.heading {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 1rem;
    text-align: center;
}
```

`1fr auto 1fr` indicates that the left and right columns will have the same widths and they'll take the remaining spaces.

We can use the `::before` and `::after` pseudo elements to represent the left and right sides of the heading respectively:

```css
.heading::before,
.heading::after {
    align-self: center;
    border-top: 0.25rem double #e5e7eb;
    content: '';
}
```

## Demo

:demo[]{title="Create a line-on-sides heading" url="/demo/create-a-line-on-sides-heading/index.html"}
