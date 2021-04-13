---
title: Prevent a string from being escaped
category: tip
date: 2021-03-01 21:55:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

By default, JavaScript will escape the next characters whenever it sees an escape character.
For example, the backslash (`\`) is one of escape character, the actual value of following path isn't the same as it is represented.

```js
'C:\\Foo\Bar\Fuzz\document.pdf';    // C:\FooBarFuzzdocument.pdf
```

If you want to keep a string from being escaped, then use the [String.raw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw) function:

```js
String.raw`C:\\Foo\Bar\Fuzz\document.pdf`;  // C:\\Foo\Bar\Fuzz\document.pdf
```

* [Create a multiline strings](/create-a-multiline-strings.html)
* [Get rid of escaping quotes with template literal](/get-rid-of-escaping-quotes-with-template-literal.html)
* [Use template literal to concatenate strings](/use-template-literal-to-concatenate-strings.html)