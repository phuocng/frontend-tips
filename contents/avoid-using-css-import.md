---
title: Avoid using CSS @import
category: Practice
date: 2021-03-21 14:50:00 +7
layout: layouts/post.njk
topics: CSS
---

The `@import` function allows us to include styles from an external file. It's very useful when our project has a lot of styles. Instead of creating a single file to define all styles, we can split them into multiple files and compose them in a master file.

```css
/* The main file */
@import 'common.css';
@import 'components.css';
@import 'pages.css';
...
```

Using `@import` makes our styles more organized and easier to maintain. However, the browser has to download and parse each CSS file one by one before continuing rendering the page. The CSS files are downloaded sequentially instead of parallelly.

It also can slow down the website depending on how many the number of CSS files are.

There are a few ways to get rid of the issues while the styles are still organized.

# Using CSS preprocessors

We can use CSS preprocessors such as [Less](http://lesscss.org), [SASS](https://sass-lang.com). They not only provide the ability of using `@import` as normal CSS, but also merge styles in a single, final CSS file.

# Using multiple link tags

Each CSS can be downloaded by a separate `link` tag as following:

```html
<head>
    <link rel="stylesheet" type="text/css" href="common.css" />
    <link rel="stylesheet" type="text/css" href="components.css" />
    ...
</head>
```

> **Good to know**
>
> In the old versions of Internet Explorer, the `@import` function behaves the same as the target CSS is inserted at the bottom of the page
