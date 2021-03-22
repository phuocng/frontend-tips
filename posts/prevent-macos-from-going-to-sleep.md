---
title: Prevent macOS from going to sleep
category: tip
date: 2021-03-22 20:40:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: macOS
---

By default, macOS goes to sleep if it hasn't been used for a certain amount of time. However, there are cases we want to prevent it from happening such as during a presentation, downloading a big file.

macOS provides a command to do that:

```shell
$ caffeinate
```

Pressing <kbd>ctrl</kbd> + <kbd>C</kbd> will bring it back to the normal mode.

The command also supports the time parameter. It indicates that macOS won't enter the sleep mode after a given number of seconds.
For example, the command below asks macOS to awake in the next 10 minutes.

```shell
$ caffeinate -u -t 600
```