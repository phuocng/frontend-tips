---
title: Persist Console logs between page refreshes
category: tip
date: 2021-04-13 11:01:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DevTools
---

Imagine a situation where you print something in the _Console_ when clicking or following a link. When you navigate to another page, the _Console_ is cleared and all the messages are lost.

Fortunately, both Chrome DevTools and Firefox Developer Tools give us options to persist the logs between page loads.

Under the _Console_ panel of Chrome DevTools, click the cog icon on the right, and turn on the _Preserve log_ option:

![Preserve log in Chrome DevTools](/img/preserve-log.png)

In addition to the logs of each page, DevTools also lets you know when you navigate to another page. It's easy for us to determine where a log message comes from.