---
title: Create a descending list of numbered items
category: Tip
date: 2021-02-24 14:29:00 +7
layout: layouts/post.njk
topics: HTML
---

By default, an ordered list element (`ol` tag) will display the number for each item in the ascending order.
The first item is shown with the number 1. The second item comes with number 2, and so forth.

There are some cases that we would like to reverse the order of numbers, but the actual items are kept.
Coundowns such as top 5 movies, top 10 songs, etc., are the best examples for the use case.

To do that, we just simply add the `reversed` attribute:

```html
<ol reversed>
    <li>...</li>
    <li>...</li>
    <li>...</li>
</ol>
```

> You can use the `start` attribute which indicates the start number

_Top 10 movies rated on [IMDB](https://www.imdb.com/chart/top/)_

{% demo '/assets/demo/create-a-descending-list-of-numbered-items/index.html' %}

## See also

-   [Append leading zeros to ordered list items](/append-leading-zeros-to-ordered-list-items/)
-   [Number headings and subheadings automatically](/number-headings-and-subheadings-automatically/)
-   [Set a numbering type for a list element](/set-a-numbering-type-for-a-list-element/)
-   [Style index numbers of list items](/style-index-numbers-of-list-items/)
-   [Style list items with special characters](/style-list-items-with-special-characters/)
