---
title: Get rid of escaping quotes with template literal
category: tip
date: 2021-02-23 10:02:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

You can use the template literal syntax in ES6 to get rid of escaping quote. For example:

```js
// Instead of
const message = 'It\'s a message';

// We can do this which is more convenient
const message = `It's a message`;
```

_More_

* [Use template literal to concatenate strings](/use-template-literal-to-concatenate-strings.html)