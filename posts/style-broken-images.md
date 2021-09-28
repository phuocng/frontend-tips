---
title: Style broken images
category: Tip
date: '2021-02-23 17:06:00 +7'
topics: CSS
---

By default, the browser will display a placeholder for a broken image. This post introduces a simple tip to replace that placeholder with our stylable elements.

When the image is not found, the `::before` and `::after` pseudo-elements are displayed as long as they have content. We can take this advantage to make these elements visible to the user.

```css
img {
    position: relative;

    /* The initial styles */
    display: block;
    height: auto;
    min-height: 4rem;
    width: 100%;
}

img::before,
img::after {
    /* Take full size of the image */
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

img::before {
    /* Hide the default placeholder */
    background: #fff;
    content: '';
}

img::after {
    /* Taken from the `alt` attribute of the element */
    content: attr(alt) ' image is broken';
    border: 2px dotted #d1d5db;

    /* Center */
    align-items: center;
    display: flex;
    justify-content: center;
}
```

### Demo

The demo below shows extra elements for a broken image whose markup is

```html
<img src="/img/not-found.png" alt="front-end tips" />
```

:demo[]{title="Style broken images" url="/demo/style-broken-images/index.html"}
