---
title: Lazy loading images with the loading attribute
category: tip
date: 2021-04-12 10:28:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
---

By default, the browser will download all images found on a page no matter where they are located. To improve the user experience, we often use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) or external libraries to lazy load images.

The lazy loading means that an image is only downloaded to the client when it's available in the browser's viewport.

In the latest version of Chromium-powered (including Chrome, Edge and Opera) and Firefox browsers support it natively with the `loading="lazy"` attribute:

```html
<img src="..." alt="..." loading="lazy" />
```

The browser now will defer the loading of images until they are visible in the viewport.

It's common to see that the layout is shifted when an image is loaded completely. To avoid the issue, it's recommended to set the size of image using either inline styles or the attributes:

```html
<img 
    loading="lazy"
    style="height: 200px; width: 300px;"
/>

<!-- Or -->
<img 
    loading="lazy"
    height="200"
    width="300"
/>
```