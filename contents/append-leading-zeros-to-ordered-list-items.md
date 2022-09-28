---
title: Append leading zeros to ordered list items
category: Tip
date: 2021-03-16 12:41:00 +7
layout: layouts/post.njk
topics: CSS
metadata:
    image: append-leading-zeros.png
---

Setting the `list-style-type` property to the below value will append zero number to items of an ordered list (`ol`):

```css
ol {
    list-style-type: decimal-leading-zero;
}
```

However, it only has effect with the items whose indices are less than 10. It means that if our list has more than 100 items, then they will be prefixed as following:

```shell
01. Item
02. Item
...
09. Item
10. Item
...
99. Item
100. Item
...
```

In order to fix that issue, we can use the CSS counter. Each item holds the current value of the counter which is incremented by one in the next item:

```css
ol {
    counter-reset: items;
    list-style-type: none;
}
li {
    counter-increment: items;
}
```

To prefix an item with its associate counter value, the `::before` pseudo element comes to the rescue.

```css
li:before {
    content: '00' counter(items) '. ';
}
li:nth-child(n + 10)::before {
    content: '0' counter(items) '. ';
}
li:nth-child(n + 100)::before {
    content: counter(items) '. ';
}
```

The `:nth-child(n+10)` selector indicates the items whose indices are greater or equal to 10. It will override the styles applied for `li::before` elements.
In the same way, `:nth-child(n+100)` overrides the styles of `:nth-child(n+10)`.

## See also

-   [Create a descending list of numbered items](/create-a-descending-list-of-numbered-items/)
-   [Number headings and subheadings automatically](/number-headings-and-subheadings-automatically/)
-   [Set a numbering type for a list element](/set-a-numbering-type-for-a-list-element/)
-   [Style index numbers of list items](/style-index-numbers-of-list-items/)
-   [Style list items with special characters](/style-list-items-with-special-characters/)
-   [Use negative nth-child and nth-last-child](/use-negative-nth-child-and-nth-last-child)
