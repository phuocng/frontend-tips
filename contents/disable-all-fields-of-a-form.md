---
title: Disable all fields of a form
category: Tip
date: 2022-09-27 15:50:00 +7
layout: layouts/post.njk
topics: HTML
metadata:
    image: disabled-fieldset.png
---

It's easy to disable a particular HTML input or button element by using the `disabled` attribute.
The following piece of code demonstrates a simple signing in form that consists of two disabled inputs:

```html
<input type="text" placeholder="Username" disabled />
<input type="password" placeholder="Password" disabled />
```

There is the other way that you don't have to apply the `disabled` attribute to fields one by one.

Instead, you can use the `fieldset` element to organize the input. Using the `disabled` attribute to the `fieldset` will disable all input belonging to it:

```html
<fieldset disabled>
    <legend>Login</legend>

    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
</fieldset>
```
