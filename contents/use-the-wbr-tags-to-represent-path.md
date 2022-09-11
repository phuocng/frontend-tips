---
title: Use the wbr tags to represent path
category: Tip
date: 2021-02-23 09:45:00 +7
layout: layouts/post.njk
topics: HTML
---

A browser might break a long text at unexpected places. For example, the specific path (`/this/is/.../folder`) in the following text is placed at the second line:

```console
┌───────────────────────────────────────────────────────┐
| Copy file to the folder:                              |
| /this/is/a/very/long/path/to/the/destination/folder   |
└───────────────────────────────────────────────────────┘
```

To prevent this behavior, HTML5 provides the `<wbr>` element. It stands for _Word Break Opportunity_, and is used to specify the positions that a line break would be created.

Getting back to the example above. If we use `<wbr>` elements right before each path separator (`\`) as follow:

```html
Copy your file to the folder: <wbr />/this <wbr />/is <wbr />/a ... <wbr />/destination <wbr />/folder
```

The browser will break the paths in between the directory names:

```console
┌───────────────────────────────────────────────────────┐
| Copy your file to the folder: /this/is/a/very/long    |
| /path/to/the/destination/folder                       |
└───────────────────────────────────────────────────────┘
```
