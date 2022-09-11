---
title: Create an autocomplete list with the datalist element
category: Tip
date: 2021-02-24 15:33:00 +7
layout: layouts/post.njk
topics: HTML
---

The HTML 5 `datalist` element comes in handly when you want to create an autocomplete input from a pre-defined list.

The element generates a dropdown that allow user to choose its options. In comparison to the normal `select` element, the `datalist` element provide the ability of filter the options.

Users also can enter what they want in the same way the normal text box does.

```html
<input list="demo__list" />
<datalist id="demo__list">
    <option value="..." />
    <option value="..." />
    <option value="..." />
    ...
</datalist>
```

## Demo

:demo[]{title="Create an autocomplete list with the datalist element" url="/demo/create-an-autocomplete-list-with-the-datalist-element/index.html"}
