---
title: Watch a variable's value with live expressions
category: tip
date: 2021-03-21 21:36:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DevTools
---

_Live expressions_ allows us to watch a JavaScript expression over time. The expression is evaluated and pinned at the top of the _Console_. It shows the value of expression in real-time.

It's very useful in some use cases such as

* Track CSS properties that are changed during an animation
* Track the [current active element](/track-the-focused-element-with-chrome-devtools.html)
* See the values of variables in real time without logging them

For example, when using the `console.log` function inside the handlers of the `mousemove`, `scroll` events, we can see a lot of logged values in the Console. It's not easy for us to scan the values when the event occurs.

```js
window.addEventListener('scroll', e => {
  console.log(window.scrollY);
});
```

<video loop muted controls>
  <source src="/img/busy-console.mp4" type="video/mp4">
</video>

Using live expressions can help us get rid of the issue. To use it, click the eye icon under the _Console_. Enter the variable that you want to watch in the textbox, and click outside of the textbox to save it. You can add as many expressions as you want.

From now on, you'll see the new value of expression whenever it changes.

<video loop muted controls>
  <source src="/img/live-expressions.mp4" type="video/mp4">
</video>

_More_

* [Track the focused element with Chrome DevTools](/track-the-focused-element-with-chrome-devtools.html)