---
title: Create an object with dynamic keys
category: Tip
date: '2021-02-25 10:33:00 +7'
topics: JavaScript
---

We often use the bracket notation to add a dynamic key to an object.

```js
const key = 'ages';
const person = {
    name: 'John Doe',
};

person[key] = 42;
```

ES6 allows us to do that in a declarative way as following:

```js
const key = 'ages';
const person = {
    name: 'John Doe',
    [key]: 42,
};
```

Here is a simple usage. The sample code below returns the list of name and value of given input fields in a form:

```js
// `formEle` is the form element
const data = [...formEle.querySelectorAll('input')].map((field) => {
    return {
        [field.getAttribute('name')]: field.getAttribute('value'),
    };
});
```
