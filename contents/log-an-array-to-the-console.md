---
title: Log an array to the Console
category: Tip
date: 2021-02-27 16:55:00 +7
layout: layouts/post.njk
topics: JavaScript
---

Instead of using the `console.log` function, `console.table` produces a better output. It works pretty well with an array or object.

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

console.table(resources);
```

Here is the screenshot compares the output of two methods above:

![console.table](/img/console-table.png)

If you don't want to see all the columns, then you can indicate the columns explicitly:

```js
// Show `name` and `link` properties
console.table(resources, ['name', 'link']);
```

![console.table](/img/console-table-columns.png)

This tip also has effect when you want to [pick some particular properties from a JSON representation](/pick-given-properties-from-a-json-representation.html).

### See also

-   [Conditional logging in the Console](/conditional-logging-in-the-console.html)
-   [Log a value to the Console](/log-a-value-to-the-console.html)
-   [Log a variable in an arrow function](/log-a-variable-in-an-arrow-function.html)
-   [Log a variable to the console using conditional breakpoints](/log-a-variable-to-the-console-using-conditional-breakpoints.html)
