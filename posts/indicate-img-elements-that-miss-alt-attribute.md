---
title: Indicate img elements that miss alt attribute
category: tip
tags:
  - posts
layout: layouts/post.njk
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
