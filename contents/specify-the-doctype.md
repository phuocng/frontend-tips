---
title: Specify the doctype
category: Practice
date: 2021-04-29 09:29:00 +7
layout: layouts/post.njk
topics: HTML
metadata:
    image: specify-doctype.png
---

In the old days of the Internet, Netscape Navigator and Microsoft Internet Explorer were popular browsers. They had different sets of rules so that web pages have two different versions to serve them.

Later on, more browsers come and the Internet has standard specifications. But they have to support two different ways to render a webpage: standards and quirks modes. The standard mode is used to render pages using the standard web specifications, whereas the quick mode is used to support legacy websites.

These two modes are distinguished by the doctype which refers to _Document Type Definition_ (or DTD). It defines a set of rules for a particular HTML version. Below is an example of DocType declarations:

```html
<!-- HTML 4.01 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
```

If a page doesn't specify the doctype, it will be rendered in the quirks mode. As a result, it causes the page to have some weird appearance issues. For example, this page lists [quirks](https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_quirks_mode_behavior) on the Firefox browser.

Since HTML5 was introduced, we just simply add its doctype to the top of page:

```html
<!DOCTYPE html>
<html>
    ...
</html>

<!-- Or -->
<!DOCTYPE html>
<html>
    ...
</html>
```
