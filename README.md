# Front-end Tips

A series of super tiny, quick tips, tricks and best practices of front-end development.

The series cover different topics:

-   CSS
-   HTML
-   JavaScript
-   TypeScript
-   Browser developer tools

## Running it on local

1. Clone the project:

```shell
$ git clone https://github.com/phuocng/frontend-tips
```

2. Install the dependencies:

```shell
$ cd frontend-tips
$ npm install
```

3. Run it on the local:

```shell
$ npm run start
```

Open http://localhost:8081 in your browser to see it in action.

## Contributing

Pull requests are welcomed. To submit your favorite tip, please create a markdown file, and put it in the [contents](contents) folder.
The content of markdown file has to look like

```md
---
title: ___
category: ___
date: '___'
topics: ___
---

The content of post
```

-   `title`: Must match with the file name
-   `category`: Can be one of `tip`, `trick` or `Best practice`
-   `date`: The date that post is created
-   `topics`: The list of topic(s), separated by a comma

[Here](contents/convert-string-to-number.md) is an example.

## About

This project is developed by _Nguyen Huu Phuoc_. I love building products and sharing knowledge.

Be my friend on

-   [Twitter](https://twitter.com/nghuuphuoc)
-   [Github](https://github.com/phuocng)
