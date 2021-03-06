---
title: Always put the footer at the bottom
category: tip
date: 2021-03-06 17:21:00 +7
tags:
  - posts
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

header, footer {
    flex-shrink: 0;
}

main {
    flex-grow: 1;
}
```

Setting `flex-grow: 1` to the main content will make it take the available spaces. The footer then [sticks at the bottom](https://csslayout.io/patterns/sticky-footer).

_Demo_

{% callout %}
The placeholders shown below are powered by the [`<placeholders />` elements](https://placeholders.xyz/).
{% endcallout %}

<style>
.demo__layout {
    border: 1px solid #D1D5DB;
    display: flex;
    flex-direction: column;
    height: 32rem;
}
.demo__header {
    color: #2E2B74;
    flex-shrink: 0;
    padding: 0.5rem;
}
.demo__main {
    border-bottom: 1px solid #D1D5DB;
    border-top: 1px solid #D1D5DB;
    color: #2563EB;
    flex-grow: 1;
    padding: 0.5rem;
}
.demo__footer {
    color: #DC2626;
    flex-shrink: 0;
    padding: 0.5rem;
}
</style>

<div class="demo__layout">
    <div class="demo__header">
        <placeholder-lines size="2">
    </div>
    <div class="demo__main">
        <placeholder-lines size="10">
    </div>
    <div class="demo__footer">
        <placeholder-lines size="5">
    </div>
</div>