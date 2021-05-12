---
title: Skip questions when creating a package.json file
category: tip
date: 2021-05-12 19:42:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: NPM
metadata:
  image: skip-questions-npm.png
---

We often use the `npm init` command to initialize a `package.json` file. The command will ask you some questions that are used to fill the content of `package.json` later.

```shell
$ npm init
package name: (dev)
version: (1.0.0)
...
```

If you're a lazy at this step and would like to manually edit the file, you can skip all questions by using the `y` parameter:

```shell
$ npm init -y

// Or
$ npm init --yes
```

Then it will create a `package.json` file with the default value for basic options as following:

```json
{
  "name": "dev",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```