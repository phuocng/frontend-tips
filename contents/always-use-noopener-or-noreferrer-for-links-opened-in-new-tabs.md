---
title: Always use "noopener" or "noreferrer" for links opened in new tabs
category: Best practice
date: 2021-03-16 15:36:00 +7
layout: layouts/post.njk
topics: HTML
---

In order to open a link in a new tab, we use the `target="_blank"` attribute. However, it can lead to some issues if you aren't aware of them.

First, the newly opened tab uses the same process with the opener one. Hence, it can slow down your page.
More importantly, the new tab is able to access the `window` object of the opener page via the `window.opener` object. Imagine that the new tab executes the following code:

```js
window.opener.location = 'http://fake.website.here';
```

As the code implies, it redirects the original tab to a fake website. What happens if the fake website has the same UI as the real one? Since users already opened it, they may not realize that the website they are looking at isn't real.

Adding `rel="noopener"` fixes the issues.

It's good to know that there is the `rel="noreferrer"` attribute. It not only fixes the issues that `noopener` does, but also prevents the `Referer` header from being sent to the new tab.

```html
<!-- Don't -->
<a target="_blank">...</a>

<!-- Do -->
<a target="_blank" rel="noopener">...</a>

<!-- Or -->
<a target="_blank" rel="noreferrer">...</a>
<a target="_blank" rel="noopener noreferrer">...</a>
```

> Some modern browsers, such as Chrome 88+, automatically adds the `noopener` behavior if it's missing.
> However, it's still recommended to add `rel="noopener"` or `rel="noreferrer"` to avoid the security and performance issues in old legacy browsers.
