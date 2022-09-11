---
title: Use the datetime attribute when displaying dates, times
category: Best practice
date: 2021-04-13 14:02:00 +7
layout: layouts/post.njk
topics: HTML
---

You probably know that the semantic `<time>` tag can be used to display a date or time. It's recommended to use it with the `datetime` attribute which brings some benefits:

-   Search engines produce better results
-   It can be used by some devices allowing you to add a reminder or calendar event easily

```html
<div>The meeting will start at <time>09:00</time></div>

<!-- Better -->
<div>The meeting will start at <time datetime="09:00">09:00</time></div>
```
