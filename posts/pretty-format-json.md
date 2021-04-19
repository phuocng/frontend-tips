---
title: Pretty format JSON
category: tip
date: 2021-02-27 21:02:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

We often use `JSON.stringify` to generate JSON for a given object. By default, it removes all spaces between items. It's not easy to scan the output, especially when using with `console.log`.

Do you know that it's possible for us to generate a pretty output by passing the indentation level to the third parameter?

```js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    ages: 42,
};

JSON.stringify(person, null, 2);

/*
"{
  "firstName": "John",
  "lastName": "Doe",
  "ages": 42
}"
*/
```

If you prefer tab for the indentations, then passing the `\t` character:

```js
JSON.stringify(person, null, '\t');

/*
"{
	"firstName": "John",
	"lastName": "Doe",
	"ages": 42
}"
*/
```

_More_

* [Log the full object in NodeJS](/log-the-full-object-in-nodejs.html)
* [Pick given properties from a JSON representation](/pick-given-properties-from-a-json-representation.html)
* [Transform values from a JSON representation](/transform-values-from-a-json-representation.html)