---
title: Add keyboard shortcuts
category: Trick
date: 2021-03-14 16:55:00 +7
layout: layouts/post.njk
topics: HTML
---

By using the `accesskey` attribute, we can specify a shortcut key for the user to activate or focus on an element. The value of the attribute has to be a single character.

It's worth noting that each browser provides a different combination of keys to access the shortcut.

| Browser | macOS                | Windows               | Linux                 |
| ------- | -------------------- | --------------------- | --------------------- |
| Chrome  | `alt` + `ctrl` + key | `alt` + key           | `alt` + key           |
| Firefox | `alt` + `ctrl` + key | `alt` + `shift` + key | `alt` + `shift` + key |
| Safari  | `alt` + `ctrl` + key | n/a                   | n/a                   |

In the following sample code, pressing the combination `alt` + `ctrl` + `e` on Chrome macOS will trigger the button's `click` event.

```html
<button accesskey="e" onclick="alert('Edit')">Edit</button>
```
