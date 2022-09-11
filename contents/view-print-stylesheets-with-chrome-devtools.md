---
title: View print stylesheets with Chrome DevTools
category: Tip
date: 2021-03-18 20:13:00 +7
layout: layouts/post.njk
topics: DevTools
---

The CSS styles used in the print mode can be defined using the `print` media type:

```css
@media print {
    /* ... */
}
```

However, we can't see these styles under the _Styles_ panel in Chrome DevTools. In order to debug the print styles, we have to force the current page into the print preview mode.

-   In DevTools, click the vertical dots icon at the right, and choose _More tools_ > _Rendering_
-   In the _Emulate CSS media type_ section, choose _print_

Under the _Styles_ panel, DevTools will show the print styles for the selected element if there are. In the following screenshot, you will see the print styles of `.rpv-print-page-thumbnail` elements.

![Emulate print CSS](/img/emulate-print-css.png)
