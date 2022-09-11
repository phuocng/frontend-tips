---
title: Locate an element with a given selector
category: Tip
date: 2021-03-27 11:35:00 +7
layout: layouts/post.njk
topics: DevTools
---

We can use the arrow keys to navigate between elements under the _Elements_ tab. However, it's not convenient for us to find a given element when the page has a lot of nested elements.

You probably see the problem when you're working on a unit of page (a component or widget, for example), and don't have the full knowledge of the entire page. In that situation, you might don't know exactly where your element is.

Fortunately, DevTools gives us the `inspect` function to locate an element if we know its selector. The following code finds an element that has the `.rpv-default-layout-main` class and reveals it under the _Elements_ tab if there's any.

```js
inspect($('.rpv-default-layout-main'));
```

> The `$` function is equivalent to the [`document.querySelector`](/quick-query-elements-in-the-console) function

<video loop muted controls>
    <source src="/assets/img/inspect-function.mp4" type="video/mp4">
</video>

## See also

-   [Quick query elements in the Console](/quick-query-elements-in-the-console)
