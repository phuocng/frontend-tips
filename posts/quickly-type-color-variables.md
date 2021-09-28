---
title: Quickly type color variables
category: Tip
date: '2021-05-12 20:29:00 +7'
topics: Visual Studio Code
metadata:
    image: quickly-type-colors.png
---

We often declare variables for colors, mostly at the top of file, as following:

```css
:root {
    --color-primary: #...;
}
```

The colors then can be reused with the `var` function:

```css
.btn--primary {
    background-color: var(--color-primary);
}
```

If you're using Visual Studio Code, then you don't have to type `var(...)` completely. Instead, just type `--` and Visual Studio Code suggests the existing color variables.

![Visual Studio Code completes color variables automatically](/img/vscode-autocomplete-colors.png)
