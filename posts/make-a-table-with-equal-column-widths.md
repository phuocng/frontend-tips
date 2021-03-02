---
title: Make a table with equal column widths
category: tip
date: 2021-03-02 18:54:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

Setting the width for each cell explicitly is the straightforward way to give all columns the same width.
For example, the CSS declaration below splits a table of four columns into parts whose widths are the same:

```css
table td {
  width: 25%;
}
```

However, the approach doesn't work if the table has a dynamic number of columns. Fortunately, we can use the `table-layout` property to do that.
No matter what how many columns the table has, they will have the same widths.

```css
table {
  table-layout: fixed;
}
```

_Demo_

<style>
.demo__table {
  table-layout: fixed;
}
.demo__table td { vertical-align: top; }
.demo__table td:nth-of-type(3n) { color: #6B7280; }
.demo__table td:nth-of-type(3n+1) { color: #EF4444; }
.demo__table td:nth-of-type(3n+2) { color: #3B82F6; }
</style>

<table class="demo__table">
  <tbody>
    <tr>
      <td><placeholder-lines size="2" /></td>
      <td><placeholder-lines size="4" /></td>
      <td><placeholder-lines size="3" /></td>
    </tr>
    <tr>
      <td><placeholder-lines size="4" /></td>
      <td><placeholder-lines size="2" /></td>
      <td><placeholder-lines size="3" /></td>
    </tr>
    <tr>
      <td><placeholder-lines size="3" /></td>
      <td><placeholder-lines size="2" /></td>
      <td><placeholder-lines size="4" /></td>
    </tr>
    <tr>
      <td><placeholder-lines size="2" /></td>
      <td><placeholder-lines size="4" /></td>
      <td><placeholder-lines size="3" /></td>
    </tr>
  </tbody>
</table>

{% callout %}
If you are curious about the placeholders shown in the table above, check [this](https://placeholders.xyz/) out.
{% endcallout %}