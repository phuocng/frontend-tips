---
title: Show the first letter only
category: Trick
date: 2021-03-04 09:00:00 +7
layout: layouts/post.njk
topics: CSS
---

There are cases that we would like to populate the full text in generated HTML, but only the first letter is displayed.
The remaining characters are hidden visually. It's usesful when we have to support a smaller screen, for example.

The trick here is to set zero font size for the element, whereas the first letter has a normal font size.

```css
.element {
    font-size: 0;
}
.element::first-letter {
    font-size: 1.5rem;
}
```

### Demo

:demo[]{title="Show the first letter only" url="/demo/show-the-first-letter-only/index.html"}
