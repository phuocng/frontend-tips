---
title: Use negative nth-child and nth-last-child
category: Tip
date: 2021-02-24 10:17:00 +7
layout: layouts/post.njk
topics: CSS
---

`nth-child` is used to choose a child or a range of children of a given element.
Using negative `nth-child` will pick the first few children.

In the following example, the first three items will be underlined. The range of second to fifth items have the blue color.

```css
li:nth-child(-n + 3) {
    text-decoration: underline;
}
li:nth-child(n + 2):nth-child(-n + 5) {
    color: #2563eb;
}
```

In a similar way, nagative `nth-last-child` will pick the last few children.

```css
/* Add a decorative line to the last two items */
li:nth-last-child(-n + 2) {
    text-decoration-line: line-through;
}
```

### Demo

:demo[]{title="Use negative nth-child and nth-last-child" url="/demo/use-negative-nth-child-and-nth-last-child/index.html"}

### See also

-   [Append leading zeros to ordered list items](/append-leading-zeros-to-ordered-list-items.html)
