---
title: Create a descending list of numbered items
category: tip
date: 2021-02-24 14:29:00 +7
tags:
  - posts
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

{% callout %}
You can use the `start` attribute which indicates the start number.
{% endcallout %}

_Demo_

_Top 10 movies rated on [IMDB](https://www.imdb.com/chart/top/)_

<ol reversed>
  <li>The Lord of the Rings: The Fellowship of the Ring (2001)</li>
  <li>The Good, the Bad and the Ugly (1966)</li>
  <li>Pulp Fiction (1994)</li>
  <li>The Lord of the Rings: The Return of the King (2003)</li>
  <li>Schindler's List (1993)</li>
  <li>12 Angry Men (1957)</li>
  <li>The Dark Knight (2008)</li>
  <li>The Godfather: Part II (1974)</li>
  <li>The Godfather (1972)</li>
  <li>The Shawshank Redemption (1994)</li>
</ol>