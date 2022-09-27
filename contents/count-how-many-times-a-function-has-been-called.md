---
title: Count how many times a function has been called
category: Tip
date: 2022-09-27 14:00:00 +7
layout: layouts/post.njk
topics: JavaScript
---

If you want to count how many times a function has been called, you probably think of a global variable:

```js
let counter = 0;

const expensiveFunctionToDebug = () => {
    counter++;
    console.log(`This function has been called: ${counter}`);

    // Function body ...
};
```

We simply increase the counter by 1 and log the latest value whenever the `expensiveFunctionToDebug` function is invoked. `console` has a great method to do the same thing:

```js
const expensiveFunctionToDebug = () => {
    console.count('expensiveFunctionToDebug');

    // Function body ...
};
```

In the _Console_ tab of browsers, you will see something as following:

```shell
expensiveFunctionToDebug: 1
expensiveFunctionToDebug: 2
...
expensiveFunctionToDebug: 10
```

The `console.count` function prints the label you pass to it followed by the number of times the function is executed.

## See also

-   [Conditional logging in the Console](/conditional-logging-in-the-console/)
-   [Log a value to the Console](/log-a-value-to-the-console/)
-   [Log a variable in an arrow function](/log-a-variable-in-an-arrow-function/)
-   [Log a variable to the console using conditional breakpoints](/log-a-variable-to-the-console-using-conditional-breakpoints/)
-   [Log an array to the Console](/log-an-array-to-the-console/)
