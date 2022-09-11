---
title: Create a custom emoji cursor
category: Trick
date: 2021-04-12 12:26:00 +7
layout: layouts/post.njk
topics: CSS
---

There are two popular ways to create a custom cursor:

-   Using an image
-   Creating a canvas element and generate the base 64 image

Both approaches finally change the cursor by setting the image's URL to the `cursor` property:

```css
.custom-cursor {
    cursor: url(/path/to/image.png), auto;
}

/* Or */
.custom-cursor {
    cursor: url('data:image/png;base64,...'), auto;
}
```

To create a custom emoji cursor, we can use an inline SVG element which displays the emoji at the center as following:

```css
.custom-cursor {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewport="0 0 48 48" style="fill:black;font-size:24px"><text y="50%">🚀</text></svg>')
            16 0, auto;
}
```

### Demo

:demo[]{title="Create a custom emoji cursor" url="/demo/create-a-custom-emoji-cursor/index.html"}
