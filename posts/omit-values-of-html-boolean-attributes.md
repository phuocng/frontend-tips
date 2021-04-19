---
title: Omit values of HTML boolean attributes
category: practice
date: 2021-04-19 15:24:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
metadata:
  image: omit-boolean-attribute-value.png
---

There are some HTML boolean attributes such as `checked`, `disabled`, `readonly`, `required`, `selected`, etc.

According to the [HTML specification](https://html.spec.whatwg.org/#boolean-attribute), a boolean attribute has three possible declarations. All of them have the same effect:

```html
<input readonly />
<input readonly="" />
<input readonly="readonly" />
```

`true` and `false` are invalid values:

```html
<!-- Not allowed -->
<button disabled="true">...</button>
<button disabled="false">...</button>
```

The only way to represent a `false` value is to remove the attribute. Hence, to avoid the incorrect and misleading usages, it's recommended to remove the value:

```html
<input readonly />
```