---
title: Add a line break between inline elements
category: Tip
date: 2021-03-05 23:09:00 +7
layout: layouts/post.njk
topics: CSS
---

It's a common scenario where we want to split a heading into multiple lines. For example, the heading is displayed continuously on a big screen. But on a small screen, it should breaks into different parts.

Without using the `br` tag, we can construct the heading from various inline `span` elements.

```html
<h2>
    <span class="primary">Tip, tricks, best practices</span>
    <span>of front-end development</span>
</h2>
```

By using the `::after` pseudo element, we are able to add a line break after the first inline element:

```css
.primary::after {
    content: '\A';
    white-space: pre;
}
```

Where `\A` represents the line break character.

### Demo

:demo[]{title="Add a line break between inline elements" url="/demo/add-a-line-break-between-inline-elements/index.html"}
