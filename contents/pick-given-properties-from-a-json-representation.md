---
title: Pick given properties from a JSON representation
category: Tip
date: 2021-04-19 13:18:00 +7
layout: layouts/post.njk
topics: JavaScript
metadata:
    image: pick-given-properties.png
---

By default, `JSON.stringify(value)` will pull all serializable properties of `value`.

```js
const resources = [
    {
        name: '1 LOC',
        description: 'Favorite JavaScript utilities in single line of code',
        link: 'https://1loc.dev',
    },
    {
        name: 'CSS Layout',
        description: 'A collection of popular layouts and patterns made with CSS',
        link: 'https://csslayout.io',
    },
    {
        name: 'HTML DOM',
        description: 'How to manage HTML DOM with vanilla JavaScript',
        link: 'https://htmldom.dev',
    },
    {
        name: 'Responsive Design Patterns',
        description: 'A collection of patterns to create a responsive web page',
        link: 'https://responsive.page',
    },
    {
        name: 'Front-end Tips',
        description: 'Super tiny, quick tips, tricks and best practices of front-end development',
        link: 'https://getfrontend.tips',
    },
    {
        name: 'this VS that',
        description: 'The differences between ___ and ___ in the front-end development',
        link: 'https://thisthat.dev',
    },
];

JSON.stringify(resources);
/*
[
	{
		"name": "1 LOC",
		"description": "...",
		"link": "..."
	},
	{
		"name": "CSS Layout",
		"description": "...",
		"link": "..."
	},
	{
		"name": "HTML DOM",
		"description": "...",
		"link": "..."
	},
    ...
]
*/
```

If you want to receive some particular properties, then pass them to the second parameter:

```js
// Only pick the `name` property
JSON.stringify(resources, ['name']);

// Pick the `name` and `link` properties
JSON.stringify(resources, ['name', 'link']);
```

You can use the same tip when [logging an array to the Console](/log-an-array-to-the-console).

## See also

-   [Log the full object in NodeJS](/log-the-full-object-in-nodejs)
-   [Pretty format JSON](/pretty-format-json)
-   [Transform values from a JSON representation](/transform-values-from-a-json-representation)
