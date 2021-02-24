---
title: Show a placeholder for an empty list
category: tip
date: 2021-02-24 16:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

By using the `:empty` selector, it's possible for us to show a custom placeholder.

```css
ul:empty::after {
  content: "Empty";
}
```

If you want the placeholder to be more flexible instead of being hardcoded in CSS, it can be taken from an attribute, such as `placeholder`:

```css
ul:empty::after {
  content: attr(data-placeholder);
}
```

{% callout %}
The `:empty` selector doesn't have effect if the list contains a whitespace or an empty child node.
{% endcallout %}

_Demo_

<style>
.demo__list {
margin: 2rem;
}
.demo__list:empty::after {
    border: 1px solid #E5E7EB;
    content: attr(data-placeholder);
    padding: 1rem;
}
</style>

<ul class="demo__list" data-placeholder="You don't have any new messages"></ul>