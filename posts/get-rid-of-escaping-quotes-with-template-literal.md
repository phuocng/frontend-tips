---
title: Get rid of escaping quotes with template literal
category: tip
tags:
  - posts
layout: layouts/post.njk
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