# Front-end Tips

A series of super tiny, quick tips, tricks and best practices of front-end development.

The series cover different topics:

* CSS
* HTML
* JavaScript
* TypeScript
* Browser developer tools

![front-end tips](/img/screenshot.png)

## Running it on local

1. Clone the project:

```console
$ git clone https://github.com/phuoc-ng/frontend-tips
```

2. Install the dependencies:

```console
$ cd frontend-tips
$ npm install
```

3. Run it on the local:

```console
$ npm run serve
```

Look at the console to see the _Local URL_. Open it in your browser to see it in action.

## Contributing

Pull requests are welcomed. To submit your favorite tip, please create a markdown file, and put it in the [posts](posts) folder.
The content of markdown file has to look like

```md
---
title: ___
category: ___
date: ___
tags:
  - posts
layout: layouts/post.njk
topics: ___
---

The content of post
```

* `title`: Must match with the file name
* `category`: Can be one of `tip`, `trick` or `practice`
* `date`: The date that post is created
* `topics`: The list of topic(s), separated by a comma

[Here](posts/convert-string-to-number.md) is an example.

## About

This project is developed by _Nguyen Huu Phuoc_. I love building products and sharing knowledge.

Be my friend on
* [Twitter](https://twitter.com/nghuuphuoc)
* [dev.to](https://dev.to/phuocng)
* [Github](https://github.com/phuoc-ng)

## Products

You might be interested in my products:

_Products_
* [Blur Page - A browser extension to hide sensitive information on a web page](https://blur.page)
* [Check Browsers Support - A browser extension to check browser compatibility without leaving your tab](https://checkbrowsers.support)
* [Fake Numbers - Generate fake and valid numbers](https://fakenumbers.io)
* [Form Validation - The best validation library for JavaScript](https://formvalidation.io)
* [React PDF Viewer - A React component to view a PDF document](https://react-pdf-viewer.dev)

_Resources_
* [1LOC - Favorite JavaScript utilities in single line of code](https://1loc.dev)
* [CSS Layout - A collection of popular layouts and patterns made with CSS](https://csslayout.io)
* [HTML DOM - How to manage HTML DOM with vanilla JavaScript](https://htmldom.dev)
* [Responsive Design Patterns - A collection of patterns to create a responsive web page](https://responsive.page)
* [Super tiny, quick tips, tricks and best practices of front-end development](https://getfrontend.tips)
* [this VS that - The differences between ___ and ___ in the front-end development](https://thisthat.dev)