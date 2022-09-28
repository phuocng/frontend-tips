---
title: Style list items with special characters
category: Tip
date: 2021-03-14 19:39:00 +7
layout: layouts/post.njk
topics: CSS
metadata:
    image: style-list-items-special-characters.png
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
    list-style-type: '☀️';
}

/* Or */
li {
    list-style-type: '\2600';
}
```

## Demo

```css
.weather--sun {
    list-style-type: '\2600';
}
.weather--cloud {
    list-style-type: '\2601';
}
.weather--sun-cloud {
    list-style-type: '\1F324';
}
```

<ul class="weather">
    <li class="weather--sun">Sun: 23° - 35°</li>
    <li class="weather--cloud">Mon: 24° - 32°</li>
    <li class="weather--sun">Tue: 24° - 35°</li>
    <li class="weather--cloud">Wed: 24° - 32°</li>
    <li class="weather--cloud">Thu: 25° - 33°</li>
    <li class="weather--sun-cloud">Fri: 25° - 34°</li>
    <li class="weather--sun-cloud">Sat: 26° - 35°</li>
</ul>

## See also

-   [Append leading zeros to ordered list items](/append-leading-zeros-to-ordered-list-items/)
-   [Create a descending list of numbered items](/create-a-descending-list-of-numbered-items/)
-   [Number headings and subheadings automatically](/number-headings-and-subheadings-automatically/)
-   [Set a numbering type for a list element](/set-a-numbering-type-for-a-list-element/)
-   [Style index numbers of list items](/style-index-numbers-of-list-items/)
