---
title: Create a download link
category: Tip
date: '2021-03-01 14:13:00 +7'
topics: HTML
---

It's common to use an `a` tag to create a download link. The browser will open the file for some well-supported file types, such as image, pdf, etc.

If you want to enforce the browser to download the file, then use the HTML 5 `download` attribute. The value of attribute, if specified, will be used as the name of download file.

```html
<!-- Download instead of openning it -->
<a href="/assets/document.pdf" download>
    <!-- Download it with new file name -->
    <a href="/assets/document.pdf" download="a copy of document.pdf"></a
></a>
```

> It's worth noting that the `download` attribute only works if the file belongs to the same domain as the current website. It doesn't have effect if the `href` attribute has the different origin to the site
