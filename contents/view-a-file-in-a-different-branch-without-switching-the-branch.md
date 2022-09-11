---
title: View a file in a different branch without switching the branch
category: Tip
date: 2021-03-15 16:18:00 +7
layout: layouts/post.njk
topics: Git
---

We can use the following command to see the content of a particular file on another branch:

```shell
$ git show branch:file
```

-   `branch` represents the name of destination branch
-   `file` represents the relative path of the file

For example, `git show feature/tip:css/styles.css` shows the content of the file located at `css/styles.css` in the `feature/tip` branch.

You also can open the file in your favourite editor, Vim for example:

```shell
$ git show branch:file | vim -
```
