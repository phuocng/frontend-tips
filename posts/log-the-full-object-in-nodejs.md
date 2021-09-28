---
title: Log the full object in NodeJS
category: Tip
date: '2021-03-06 09:12:00 +7'
topics: NodeJS
---

Using the `console.log` method in NodeJS might not be ideal if the input has deep nested properties. It will replace the deep nested property with `[Object]`.

Let's say that the `person` variable holds the information of a person. `console.log(person)` will produce the following output:

```json
{
    username: 'johndoe',
    meta: {
        firstName: 'John',
        lastName: 'Doe',
        profile: { address: [Object] }
    }
}
```

To get rid of `[Object]`, you can use the `console.dir` method to see the full object:

```js
console.dir(person, { depth: null });
/*
{
    username: 'johndoe',
    meta: {
        firstName: 'John',
        lastName: 'Doe',
        profile: {
            address: { street: '123 Main St', city: 'AnyTown' }
        }
    }
}
*/
```

It's also possible to use the same technique mentioned in the [_Pretty format JSON_](/pretty-format-json.html) tip which works in both NodeJS and browser environments.

### See also

-   [Transform values from a JSON representation](/transform-values-from-a-json-representation.html)
