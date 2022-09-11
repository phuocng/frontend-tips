---
title: Avoid invisible text when loading a font
category: Practice
date: 2021-03-25 10:54:00 +7
layout: layouts/post.njk
topics: CSS, Google Font
---

It takes time to load a big font. Most browsers will hide texts until the font is loaded completely. This problem is known as _flash of invisible text_ (FOIT).

We can prevent it from happening by asking the browser to use the system font while the custom font is still being loaded. Once the font is loaded, it will replace the system font used earlier.
This phrase is also known as _flash of unstyled text_ (FOUT).

In order to archive it, we can use the `font-display` style:

```css
@font-face {
    font-family: 'Roboto';
    font-display: swap;
}
```

If you are using [Google fonts](https://fonts.google.com), then putting the `display=swap` parameter is the equivalent way:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:400,700&display=swap" rel="stylesheet" />
```

### See also

-   [Combine Google font requests](/combine-google-font-requests.html)
-   [Load given characters in a Google font request](/load-given-characters-in-a-google-font-request.html)
