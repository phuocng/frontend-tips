---
title: Escape CSS class names
category: Tip
date: '2021-05-17 20:25:00 +7'
topics: CSS
metadata:
    image: escape-css-class.png
---

CSS class names can't contain the `:` character. For example, it's not possible to declare the following class in CSS:

```css
.lg:flex {
    ...
}
```

However we can use the `\` character to correct it:

```css
.lg\:flex {
    ...
}
```

The class name is usable in HTML as usual:

```html
<div class="lg:flex">    ...</div>
```

Using `\` to escape CSS class names has been used a lot in some CSS frameworks such as [Tailwind](https://tailwindcss.com).
