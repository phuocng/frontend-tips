---
title: Number headings and subheadings automatically
category: tip
date: 2021-03-14 17:56:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: CSS
---

It's a common approach to use the [DOM APIs](https://htmldom.dev) to find all headings on the page, and number each of them. This post introduces another way to do that with CSS only.

If you follow some search engine optimization (known as _SEO_) practices, you are adviced to use only one `h1` tag on the page. The single `h1` tag is used to display the main title. Hence, we will ignore the `h1` tag when numbering the headings.

Given the following markup:

```html
<h2>Chapter 1</h2>
    
<h3>Section 1</h3>
<h4>Sub section A</h4>

<h3>Section 2</h3>
<h4>Sub section A</h4>
<h4>Sub section B</h4>

<h2>Chapter 2</h2>
```

It should produce the content as below:

```html
1. Chapter 1
    
1.1. Section 1
1.1.1. Sub section A

1.2. Section 2
1.2.1. Sub section A
1.2.2. Sub section B

2. Chapter 2
```

We can archive it by using the CSS counter. 

Going down from the `body` element, we will reset the counter for the first `h2`. The numbers are inserted before the content via the `::before` pseudo element:

```css
body, h1 {
    counter-reset: h2;
}
h2::before {
    counter-increment: h2;
    content: counter(h2) ". ";
}
```

The `counter-increment` property indicates that when we see the next `h2` tag, the number will be increased by one.

We continue using the same technique for `h3` tags. The number for a `h3` heading must be prefixed with the number of its parent `h2` tag:

```css
h2 {
    counter-reset: h3;
}
h3::before {
    counter-increment: h3;
    content: counter(h2) "." counter(h3) ". ";
}
```

Here we use the `.` character to separate the numbers. If you want to number deeper headings such as `h4`, `h5`, then the CSS should look like as following:

```css
h3 {
    counter-reset: h4;
}
h4 {
    counter-reset: h5;
}
h4::before {
    counter-increment: h4;
    content: counter(h2) "." counter(h3) "." counter(h4) ". ";
}
h5::before {
    counter-increment: h5;
    content: counter(h2) "." counter(h3) "." counter(h4) "." counter(h5) ". ";
}
```

_More_

* [Style index numbers of list items](/style-index-numbers-of-list-items.html)