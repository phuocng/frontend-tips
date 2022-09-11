---
title: Find scrollable elements
category: Tip
date: 2021-03-03 08:10:00 +7
layout: layouts/post.njk
topics: Firefox DevTools
---

The page has a scrollbar but you don't know which element on page creates that scrollbar.
The Firefox Developer Tools allows us to see all elements causing overflow.

-   In Firefox, open its Developer Tools
-   Under the _Inspector_ tab, if an element has a scrollbar (by using either `overflow: scroll` or `overflow: auto` but the content is longer than the element dimension), it will be shown with a `scroll` badge.

In the following screenshot, the highlighted element is displayed with the `scroll` badge indicating that it produces the scrollbar. Clicking the `scroll` badge will reveal the associate element.

![Find scrollable elements](/img/scrollable-overflow.png)
