---
title: Put special operators at the beginning of a function
category: trick
tags:
  - posts
layout: layouts/post.njk
---

Usually, we can invoke a function by using the form of Immediately Invoked Function Expression (IIFE).

```js
(function(a, b) {
    return a + b;
})(4, 2);

// 6
```

Do you know that we get the same result if we omit the parentheses and put + at the beginning as follow:

```js
+function(a, b) {
    return a + b;
}(4, 2)

// 6
```

It works because putting `+` at the beginning of function declaration will turn it to an expression, and passing the parameters with `()` at the end will invoke the expression.
It is rare to see that code in development, but it is used in the minifications to save the file size.
In addition to `+`, you can use other operators such as `-`, `!`, `~` and void in the similar way to invoke a function:

```js
-function() { ... }();
!function() { ... }();
~function() { ... }();
void function() { ... }();
```

Note that the return value could be different from the original function, for example:

```js
!function() { return false; }();     // true
```