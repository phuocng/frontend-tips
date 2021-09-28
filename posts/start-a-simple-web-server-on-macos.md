---
title: Start a simple web server on macOS
category: Tip
date: '2021-03-24 11:17:00 +7'
topics: macOS
---

It's easy for us to test a HTML file just by simply opening it with our favourite browser. It doesn't work if we have to communicate with a remote server such as fetching data via Ajax requests.

That's where a simple HTTP server comes. macOS gives us the ability to run a simple web server from any folder.

```shell
$ python -m SimpleHTTPServer 8000
```

Or

```shell
$ php -S localhost:8000
```

The commands above create servers on the port 8000. It's up to you to change the port number if it's taken by another server.
The first command only serves HTML files while the last one can run PHP files.
