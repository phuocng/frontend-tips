---
title: Access the selected node in the Console
category: Tip
date: 2021-03-04 08:10:00 +7
layout: layouts/post.njk
topics: DevTools
---

When you select a node under the _Elements_ tab, Chrome DevTools adds `== $0` right after the node.

In give us a hint that we can use the `$0` expression to access the selected node.
You can invoke any [DOM APIs](https://htmldom.dev) from `$0`.

![Access selected node](/assets/img/selected-node.png)

> The DevTools remembers the last five selected nodes. In addition to `$0`, we can use `$1`, `$2`, `$3` and `$4` to access the last selected nodes.

You also can right-click the node, and choose _Store as global variable_ from the context menu. DevTools creates a variable, `temp1` for example, to represent the selected node.
Now you can use `temp1` to manage the node in the same way as `$0`.

![Store selected node](/assets/img/store-selected-node.png)
