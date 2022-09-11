---
title: Prefix class name with js to manipulate with javascript
category: Practice
date: 2021-02-23 08:23:00 +7
layout: layouts/post.njk
topics: DOM, HTML
---

Have you ever seen a class name starting with `js-`?

If the answer is not, then you can visit the [GitHub repository](https://github.com/phuoc-ng/frontend-tips) and see the source of generated HTML. There are bunch of elements whose class are prefixed with `js-` such as:

```html
<meta class="js-ga-set" name="userId" content="..." /> <meta class="js-ga-set" name="dimension1" content="..." />
```

They are often used to manage the list of elements that we don't want to set id for (dynamic elements, for example). In these cases, we use the `document.querySelectorAll('js-xxx')` method to retrieve the elements list.

In the other words, the `js-` classes don't define the styles, but for managing the elements in JavaScript instead. That's why they are prefixed with `js-`.

Follow this naming convention is helpful if you're working in a team. Other engineers will be aware of the class name, and don't remove them when refactoring the page.
