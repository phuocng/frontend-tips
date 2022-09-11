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

### Demo

_Top 10 movies rated on [IMDB](https://www.imdb.com/chart/top/)_

:demo[]{title="Create a descending list of numbered items" url="/demo/create-a-descending-list-of-numbered-items/index.html"}
