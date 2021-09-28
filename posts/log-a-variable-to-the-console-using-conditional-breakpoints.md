---
title: Log a variable to the console using conditional breakpoints
category: Trick
date: '2021-03-01 20:56:00 +7'
topics: DevTools
---

Sometimes it's not possible for us to log data to the _Console_ directly in the code. For example, when we debug codes coming from external libraries.

Perform the steps below to print the variable:

-   Open the Chrome DevTools, and activate the _Sources_ tab
-   Navigate to the line of a given function that you want to log the data
-   Right-click the line number, and choose _Add conditional breakpoint ..._ from the context menu
-   Enter the condition

```js
console.log('replace-it-with-your-variable');
```

When the associcate line is hit by the debug process, it will try to evaluate the condition meaning that the variable is printed out.

The nice thing is that the script execution on the page is still being processed because the condition never happens (the `console.log` function returns `undefined`).

In the following screenshot, the `params` variable is logged to the _Console_ when the `sum` function is invoked.

![Log with conditional breakpoints](/img/log-conditional-breakpoints.png)

### See also

-   [Conditional logging in the Console](/conditional-logging-in-the-console.html)
-   [Log a value to the Console](/log-a-value-to-the-console.html)
-   [Log a variable in an arrow function](/log-a-variable-in-an-arrow-function.html)
-   [Log an array to the Console](/log-an-array-to-the-console.html)
