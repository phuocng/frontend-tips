---
title: Hide an element with Chrome DevTools
category: Tip
date: '2021-03-15 21:28:00 +7'
topics: DevTools
---

We can hide an element by inspecting it with Chrome DevTools, right-clicking the element under the _Elements_ tab, and choosing the _Hide element_ menu from the context menu.

![Hide an element](/img/hide-element.png)

If you're a fan of using the shortcut, then pressing the <kbd>h</kbd> key has the same effect.

<video loop muted controls>
    <source src="/img/hide-element.mp4" type="video/mp4">
</video>

Both ways add a specical CSS class named `__web-inspector-hide-shortcut__` to the element:

```css
.__web-inspector-hide-shortcut__ {
    visibility: hidden !important;
}
```

> Setting `display: none`, `opacity: 0`, and `visibility: hidden` are the common ways to hide an element with CSS. If you want to see the differences between them, take a look at this [post](https://thisthat.dev/display-none-vs-opacity-0-vs-visibility-hidden)
