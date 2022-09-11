---
title: Style list items with special characters
category: Tip
date: 2021-03-14 19:39:00 +7
layout: layouts/post.njk
topics: CSS
---

We often use circles or squares to style list items as following:

```css
li {
    list-style-type: circle;
}
```

Do you know that the `list-style-type` property also accepts a character. It means that we can use an emoji or Unicode character:

```css
li {
    list-style-type: '☀️';
}

/* Or */
li {
    list-style-type: '\2600';
}
```

### Demo

:demo[]{title="Style list items with special characters" url="/demo/style-list-items-with-special-characters/index.html"}

### See also

-   [Separate list items](/separate-list-items.html)
-   [Style index numbers of list items](/style-index-numbers-of-list-items.html)
