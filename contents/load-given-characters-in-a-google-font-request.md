---
title: Load given characters in a Google font request
category: Tip
date: 2021-03-21 16:22:00 +7
layout: layouts/post.njk
topics: CSS, Google Font
---

By default, [Google font](https://fonts.google.com) loads the completed font that contains the full set of characters it supports.

There are associations that we only use a Google font for a logo or heading which has specific letters. Instead of downloading the entire font, we can ask Google for downloading a part of it that contains required characters.

We can pass the characters to the `text` parameter:

```html
<link href="https://fonts.googleapis.com/css2?family=Sacramento&text=MyHeading" rel="stylesheet" type="text/css" />
```

If you want to have Unicode characters, then encode them with their UTF-8 representations. For example `tips & tricks` are represented as `tips+%26+tricks`.

Reducing the size of the font file improves the loading time, especially on devices where the network speed is usually limited.

### See also

-   [Avoid invisible text when loading a font](/avoid-invisible-text-when-loading-a-font.html)
-   [Combine Google font requests](/combine-google-font-requests.html)
