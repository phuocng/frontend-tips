---
title: Indicate img elements that miss alt attribute
category: tip
date: 2021-02-22 23:12:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: A11y, Accessibility, CSS
---

The following CSS gives a red outline to any img having a missing or blank alt attribute:

```css
img:not([alt]),
img[alt=""] {
    outline: 8px solid red;
}
```

If you are using Visual Studio Code, you can install the [webhint extension](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint). It will automatically detect the issue and show the details when you hover on the element.

![webhint image](/img/webhint-img.png)
