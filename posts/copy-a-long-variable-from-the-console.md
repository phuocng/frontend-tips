---
title: Copy a long variable from the Console
category: tip
tags:
  - posts
layout: layouts/post.njk
topics: DevTools
---

The Chrome DevTools' Console will collapse and split a long variable into smaller ranges. The following screenshot shows how you see `console.log(range)` in the _Console_, where `range` is an array of numbers between 0 and 500.

![long variable in the Console](/img/long-variable-in-console.png)

It's not easy to see the full value or copy the content to clipboard. Here is the tip to do that with ease:

* In the _Console_, right click the output and click _Store object as global variable_
* _Console_ creates a temporary variable, `temp1` for example, that holds the variable value
* Type `temp1 + ''` in the _Console_, and press the _Enter_ key

_Console_ will try to convert the result to `String`. As a result, you get the full content of original variable.

Here is the output which was omitted to fit in the screen:

```js
"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,...,
490,491,492,493,494,495,496,497,498,499"
```
