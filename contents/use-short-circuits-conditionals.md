---
title: Use short-circuits conditionals
category: Tip
date: 2021-02-27 10:00:00 +7
layout: layouts/post.njk
topics: JavaScript
---

If you want to execute a function when a condition matches, then use short-circuit to shorten the code:

```js
if (formValid) {
    submitForm();
}

// Use short-circuit
formValid && submitForm();
```

The logical OR operator `||` is used in a simliar way:

```js
!formValid || submitForm();
```

In the modern web frameworks, we can use the similar syntax to render a given component when a condition satisfies.
The following sample code gives you the idea of [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) in [React](https://reactjs.org):

```jsx
{
    unreadMessages.length > 0 && <div>You have {unreadMessages.length} unread messages.</div>;
}
```
