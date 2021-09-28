---
title: Write CSS rules for Firefox only
category: Trick
date: '2021-03-04 08:50:00 +7'
topics: CSS
---

If you want to add a few CSS rules that fix issues on Firefox only, then this trick might be useful.
It introduces two ways to detect Firefox:

```css
@-moz-document url-prefix() {
    h1 {
        color: blue;
    }
}

/* Or use `@support` */
@supports (-moz-appearance: none) {
    h1 {
        color: blue;
    }
}
```

The sample code above will add the blue color to `h1` on Firefox.
