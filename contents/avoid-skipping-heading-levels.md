---
title: Avoid skipping heading levels
category: Practice
date: 2021-05-13 19:46:00 +7
layout: layouts/post.njk
topics: Accessibility, HTML
metadata:
    image: avoid-skip-headings.png
---

It's common to use the heading elements, `<h1>` to `<h6>`, to represent the heading of sections.
The `<h1>` tag is often used in the highest section, whereas the `<h2>`, `<h3>`, ... tags are used in the lower section.

Heading elements are used not only because of their semantic meanings but also by screen reading tools. Those tools determine the content of the page based on the headings, and allow users to navigate between sections via the headings.

It's recommended to keep the heading elements in the order, so the users won't be confused that there's a missing heading or section while navigating on the page.

```html
<!-- Do not -->
<h1>Main heading</h1>
<h3>Heading level 2</h3>
<h2>Heading level 3</h2>

<!-- Do -->
<h1>Main heading</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

### See also

-   [Avoid using multiple `<h1>` tags per page](/avoid-using-multiple-h1-tags-per-page.html)
