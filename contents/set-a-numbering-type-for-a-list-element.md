---
title: Set a numbering type for a list element
category: Tip
date: 2022-09-28 08:50:00 +7
layout: layouts/post.njk
topics: HTML
metadata:
    image: numbering-type-list-element.png
---

By default, an unordered list element (`ul`) prepends any of its items a circle. Whereas an ordered list element (`ol`) adds an auto-incremented number at the beginning of each item.

We can set or change the behavior by setting the `list-style-type` property:

```css
ol {
    list-style-type: decimal;
}
ul {
    list-style-type: disc;
}
```

However, the `ul` and `ol` elements come with a more powerful attribute named `type`. It allows us to set the numbering type:

| Attribute declaration | Items prefixed by |
| --------------------- | ----------------- |
| `<ol type="a">`       | a, b, c, ...      |
| `<ol type="A">`       | A, B, C, ...      |
| `<ol type="i">`       | i, ii, iii, ...   |
| `<ol type="I">`       | I, II, III, ...   |

```html
<!-- Items prefixed by a, b, c, ... -->
<ol type="a">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

## See also

-   [Append leading zeros to ordered list items](/append-leading-zeros-to-ordered-list-items/)
-   [Create a descending list of numbered items](/create-a-descending-list-of-numbered-items/)
-   [Number headings and subheadings automatically](/number-headings-and-subheadings-automatically/)
-   [Style index numbers of list items](/style-index-numbers-of-list-items/)
-   [Style list items with special characters](/style-list-items-with-special-characters/)
