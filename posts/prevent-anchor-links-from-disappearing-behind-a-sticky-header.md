---
title: Prevent anchor links from disappearing behind a sticky header
category: tip
date: 2021-03-24 13:56:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

[Sticky headers](https://csslayout.io/patterns/sticky-header) is a common layout that can be seen in a lot of websites. The problem is that it doesn't play nicely with anchor links.

Imagine that we have a table of contents that contains different anchor links. Each anchor brings the user to a particular section in the page.

When users click an anchor, the page scrolls to the destination section. But some parts of the section are displayed under the header which is not a good experience for users.

To prevent it from happening, we would like to add a margin to the top of the destination, but it only has effect when scrolling. It's the time where the scroll-margin-top comes in handy.

```css
header {
    height: 2rem;
}

section {
    scroll-margin-top: 2rem;
}
```

_More_

* [Smooth scrolling with pure CSS](/smooth-scrolling-with-pure-css.html)