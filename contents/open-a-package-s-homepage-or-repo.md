---
title: Open a package's homepage or repo
category: Tip
date: 2021-03-17 12:14:00 +7
layout: layouts/post.njk
topics: NPM
---

When looking for the documentation of a npm package, we often use Google to search for its homepage and npm page.

It turns out that we can go to the homepage quickly by running the following command:

```shell
$ npm home PACKAGE_NAME
```

Opening its repository is easy too:

```shell
$ npm repo PACKAGE_NAME
```

Both commands open the destination website in your default browser.
