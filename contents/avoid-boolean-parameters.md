---
title: Avoid boolean parameters
category: Best practice
date: 2021-05-13 20:17:00 +7
layout: layouts/post.njk
topics: JavaScript
metadata:
    image: avoid-boolean-parameters.png
---

Let's consider a situation where we have a function that writes a string to a file. It allows user to append the content to file, or override the content via the `override` parameter:

```js
const writeToFile = (content: string, file: string, override: boolean) => {
...
};
```

With that signature, the function will be invoked as following

```js
// Append the content to file
writeToFile(content, file, true);

// Override the file
writeToFile(content, file, false);
```

If you are not the one who creates the function, you have to question what the boolean value represents until looking at the implementation.

It is worse if the function has a lot of boolean flags. Using boolean flags makes the core harder to read and maintain.

There are a few ways to get rid of the issue.

### Provide explicit methods

```js
appendToFile(content, file);
overrideFile(content, file);
```

### Use an object parameter

```js
writeToFile(content, file, { override });
```

### Use an enum

If you're using TypeScript, then you can use `enum` to represent the possible values of a boolean flag.

```js
enum SaveMode {
  Append,
  Override,
}

writeToFile(content, file, mode: SaveMode);
```

It's confident for consumers to call the method:

```js
writeToFile(content, file, SaveMode.Append);

// Or
writeToFile(content, file, SaveMode.Override);
```

### See also

-   [Manage multiple boolean flags](/manage-multiple-boolean-flags.html)
