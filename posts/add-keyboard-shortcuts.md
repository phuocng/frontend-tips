---
title: Add keyboard shortcuts
category: trick
date: 2021-03-14 16:55:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: HTML
---

By using the `accesskey` attribute, we can specify a shortcut key for the user to activate or focus on an element. The value of the attribute has to be a single character.

It's worth noting that each browser provides a different combination of keys to access the shortcut.

| Browser   | macOS                                     | Windows                                   | Linux                                     |
|-----------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Chrome    | <kbd>alt</kbd> + <kbd>ctrl</kbd> + key    | <kbd>alt</kbd> + key                      | <kbd>alt</kbd> + key                      |
| Firefox   | <kbd>alt</kbd> + <kbd>ctrl</kbd> + key    | <kbd>alt</kbd> + <kbd>shift</kbd> + key   | <kbd>alt</kbd> + <kbd>shift</kbd> + key   | 
| Safari    | <kbd>alt</kbd> + <kbd>ctrl</kbd> + key    | n/a                                       | n/a                                       |

In the following sample code, pressing the combination <kbd>alt</kbd> + <kbd>ctrl</kbd> + <kbd>e</kbd> on Chrome macOS will trigger the button's `click` event.

```html
<button accesskey="e" onclick="alert('Edit')">Edit</button>
```