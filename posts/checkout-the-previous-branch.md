---
title: Checkout the previous branch
category: tip
date: 2021-03-07 09:25:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: Git
---

It's common that we have multiple branches in the same Git repository. Each branch is used to fix a given bug, or implements a new feature.

Switching between branches is one of popular tasks in our daily work:

```shell
$ git checkout <target-branch-name>
```

Without specifying the branch name, we can quickly checkout the previous branch with the following command:

```shell
$ git checkout -
```