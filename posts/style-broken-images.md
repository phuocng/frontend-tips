---
title: Style broken images
category: tip
date: 2021-02-23 17:06:00 +7
tags:
  - posts
layout: layouts/post.njk
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
  content: attr(alt) " image is broken";
  border: 2px dotted #D1D5DB;

  /* Center */
  align-items: center;
  display: flex;
  justify-content: center;
}
```

_Demo_

The demo below shows extra elements for a broken image whose markup is

```html
<img src="/img/not-found.png" alt="front-end tips" />
```

<style>
.demo__image {
  display: block;
  position: relative;
  height: auto;
  min-height: 4rem;
  width: 100%;
}
.demo__image::before,
.demo__image::after {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.demo__image::before {
  background: #fff;
  content: '';
}
.demo__image::after { 
  align-items: center;
  border: 2px dotted #D1D5DB;
  content: attr(alt) " image is broken";
  display: flex;
  justify-content: center;
}
</style>

<img class="demo__image" src="/img/not-found.png" rel="nofollow" alt="front-end tips" />
