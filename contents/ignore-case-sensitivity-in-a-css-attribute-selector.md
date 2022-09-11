---
title: Ignore case sensitivity in a CSS attribute selector
category: Tip
date: 2021-03-23 14:24:00 +7
layout: layouts/post.njk
topics: CSS
---

By default, CSS attribute selectors are case-sensitive. It means that `a[href$=".png"]` has effect with the links whose extensions are `.png` only.

Imagine that you're building a files management application. It would add an icon to a file based on its extension. For example, the following CSS inserts an icon to any `.png` file.

```css
a[href$='.png']:after {
    content: url(/img/png.svg);
}
```

In reality, the files are uploaded by the users and we can't control the file extensions. A png file can be named as `.png`, `.PNG`, `.pNG`.

In order to accept all of these variants, we can add `i` right before `]` in the selector.

```css
a[href$='.png' i]:after {
    content: url(/img/png.svg);
}
```

### See also

-   [Add an icon to external links](/add-an-icon-to-external-links.html)
