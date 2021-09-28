---
title: Combine styles with the :is pseudo-class selector
category: Tip
date: '2021-03-23 16:19:00 +7'
topics: CSS
---

The `:is` pseudo-class selector applies the styles for any element that matches a selector listed in the arguments.

Rather than writing separate selectors:

```css
header a:hover,
nav a:hover,
footer a:hover {
    text-decoration: underline;
}
```

We can combine them into a single one as following:

```css
:is(header, nav, footer) a:hover {
    text-decoration: underline;
}
```
