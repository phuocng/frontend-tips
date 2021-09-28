---
title: Create a file of any size
category: Tip
date: '2021-03-19 20:07:00 +7'
topics: macOS
---

Sometimes we want to have big files which are used for testing purposes. It is often used to test uploading, downloading processes or speed of the network.

macOS comes with an useful command to create a file of any size:

```shell
$ mkfile FILE_SIZE FILE_NAME
```

In the `FILE_SIZE` option, we can use one of possible suffixes including `b` (file size in bytes), `k` - kilobytes, `m` - megabytes or `g` - gigabytes.

For example, the following command produces an empty file named `big-file.ext` whose size is two gigabytes:

```shell
$ mkfile 2g big-file.ext
```

### See also

-   [Create a big file on Linux](/create-a-big-file-on-linux.html)
