---
title: Fold CSS declarations with region markers
category: Tip
date: 2021-05-12 20:56:00 +7
layout: layouts/post.njk
topics: CSS, Visual Studio Code
metadata:
    image: fold-css.png
---

In Visual Studio Code, we can make given CSS declarations foldable with the region markers.

Just wrap the declarations between `/*#region*/` and `/*#endregion*/` if you're using CSS, SCSS or Less.

SCSS and Less also accept `//` as a valid CSS comment, hence you can use `// #region` and `// #endregion` in the SCSS/Less files.

```css
/* === Header === */
/* #region */

/* The CSS styles for header go here */

/* #endregion */

/* === Footer === */
/* #region */

/* The CSS styles for footer go here */

/* #endregion */

/* === Responsive === */
/* #region */

/* The responsive styles go here */

/* #endregion */
```

The following screenshot shows how Visual Studio Code helps us organize the [CSS of this site](https://github.com/phuoc-ng/frontend-tips/blob/main/css/index.css):

![Fold CSS declarations with region markers](/img/fold-css-declarations.png)
