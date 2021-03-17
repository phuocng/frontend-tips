---
title: Style list items with special characters
category: tip
date: 2021-03-14 19:39:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

We often use circles or squares to style list items as following:

```css
li {
    list-style-type: circle;
}
```

Do you know that the `list-style-type` property also accepts a character. It means that we can use an emoji or Unicode character:

```css
li {
    list-style-type: "☀️";
}

/* Or */
li {
    list-style-type: "\2600";
}
```

_Demo_
<style>
.demo__weather li {
    padding-left: 0.5rem;
}
.demo__weather--sun {
    list-style-type: "\2600";
}
.demo__weather--cloud {
    list-style-type: "\2601";
}
.demo__weather--sun-cloud {
    list-style-type: "\1F324";
}
</style>

<ul class="demo__weather">
    <li class="demo__weather--sun">Sun: 23° - 35°</li>
    <li class="demo__weather--cloud">Mon: 24° - 32°</li>
    <li class="demo__weather--sun">Tue: 24° - 35°</li>
    <li class="demo__weather--cloud">Wed: 24° - 32°</li>
    <li class="demo__weather--cloud">Thu: 25° - 33°</li>
    <li class="demo__weather--sun-cloud">Fri: 25° - 34°</li>
    <li class="demo__weather--sun-cloud">Sat: 26° - 35°</li>
</ul>

_More_

* [Separate list items](/separate-list-items.html)
* [Style index numbers of list items](/style-index-numbers-of-list-items.html)