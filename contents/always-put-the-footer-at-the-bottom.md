---
title: Always put the footer at the bottom
category: Tip
date: 2021-03-06 17:21:00 +7
layout: layouts/post.njk
topics: CSS
---

Assume that our page is organized by three parts: the header, main content and footer. It's a common layout that the footer is always displayed at the bottom no matter how long the main content is.

```html
<body>
    <div class="container">
        <header>...</header>
        <main>...</main>
        <footer>...</footer>
    </div>
</body>
```

Using CSS flexbox, the layout can be implemented as following:

```css
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header,
footer {
    flex-shrink: 0;
}

main {
    flex-grow: 1;
}
```

Setting `flex-grow: 1` to the main content will make it take the available spaces. The footer then [sticks at the bottom](https://csslayout.io/patterns/sticky-footer).

## Demo

:demo[]{title="Always put the footer at the bottom" url="/demo/always-put-the-footer-at-the-bottom/index.html"}
