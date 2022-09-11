---
title: Truncate long text
category: Tip
date: 2021-03-15 14:32:00 +7
layout: layouts/post.njk
topics: CSS
---

I'm pretty sure that it's one of well-known CSS snippets to truncate long text:

```css
.truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```

However, it truncates the origin text to a single line. If you want to truncate to a given number of lines, then the [`-webkit-line-clamp` property](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp) comes in handy.

The CSS declaration below limits the number of lines to 3:

```css
.truncate {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
```

Note that the `-webkit-line-clamp` property only works when we have `display: -webkit-box` and `-webkit-box-orient: vertical` declarations.

## Demo

:demo[]{title="Truncate long text" url="/demo/truncate-long-text/index.html"}
