---
title: Avoid using the <b>, <i>, <s> and <u> tags
category: Best practice
date: 2021-05-13 20:01:00 +7
layout: layouts/post.njk
topics: Accessibility, HTML
metadata:
    image: avoid-bisu-tags.png
---

These tags are often used for styling purposes. It's recommended not to use them. Instead, use the semantic tags or CSS styles that provide the same appearances.

| Tag   | Recommended way                 |
| ----- | ------------------------------- |
| `<b>` | `<strong>`                      |
| `<i>` | `<em>`                          |
| `<s>` | `text-decoration: line-through` |
| `<u>` | `text-decoration: underline`    |

For more information about the differences between these tags , please take a look at [`<b>`, `<i>` vs `<strong>`, `<em>`](https://thisthat.dev/b-i-vs-strong-em/).
