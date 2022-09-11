---
title: Add an icon to external links
category: Tip
date: 2021-02-23 20:42:00 +7
layout: layouts/post.njk
topics: CSS
---

If you want to add an icon to `a` element that links to an external website, then you can depend on the `href` or `[target="_blank"]` attribute.

### The target attribute

```css
a[target='_blank'] {
    align-items: center;
    display: flex;
}
a[target='_blank']:after {
    /* The icon can be a SVG or image file */
    content: url(/link/to/icon.svg);
    margin-left: 0.25rem;
}
```

The `content` property can be a string that appends to the link:

```css
a[target='_blank']:after {
    content: ' (external)';
}
```

Using an icon font such as [Font Awesome](https://fontawesome.com) is another option:

```css
a[target='_blank']:after {
    content: ' \f08e';
    font-family: 'FontAwesome';
}
```

### The href attribute

This approach relies on the `href` attribute. A link is treated as external if

-   It doesn't match with the domain of website
-   It isn't an anchor (doesn't start with `#`)
-   It doesn't start with `/`

It's up to you to define more conditions here. But with the set of conditions above, the `:after` looks like

```css
a:not([href*='domain.com']):not([href^='#']):not([href^='/']):after {
    /* Set the `content` property as mentioned in the first approach */
}
```

### Demo

:demo[]{title="Add an icon to external links" url="/demo/add-an-icon-to-external-links/index.html"}

### See also

-   [Ignore case sensitivity in a CSS attribute selector](/ignore-case-sensitivity-in-a-css-attribute-selector.html)
