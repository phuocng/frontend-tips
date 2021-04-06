---
title: Prevent browsers from asking to translate
category: tip
date: 2021-04-06 13:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
---

If the contents of a website are written in a particular language, the visitors might be prompted to translate them into another language when using certain browsers ([Google Chrome](https://www.google.com/chrome), for example).

You can prevent this from happening by setting the `translate` attribute for the whole document:

```html
<html translate="no">
```

The `translate` attribute has an effect on some translation tools such as [Google Translate](https://translate.google.com).

Moreover, it's a global attribute meaning that we can use it for any elements. It's very useful if we don't want to translate a brand name even if the page is translated:

```html
<footer>
    (c) 2021 <span translate="no">Brand Name</span>
</footer>
```