---
title: Display links in the print mode
category: tip
date: 2021-03-25 12:25:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

When users print a web page, they will not see the actual links. It would be more useful if a link displays both the text and its link.

We can do it by including the link in the `:after` element:

```css
@media print {
    a::after{
        content: " (" attr(href) ") ";
    }
}
```

In the print mode, users will see the link included right after its content:

```html
<!-- Normal mode -->
<a href="https://getfrontend.tips">Front-End Tips</a>

<!-- Print mode -->
<a href="https://getfrontend.tips">Front-End Tips (https://getfrontend.tips)</a>
```