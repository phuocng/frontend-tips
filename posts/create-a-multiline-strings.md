---
title: Create a multiline strings
category: Tip
date: '2021-04-13 09:03:00 +7'
topics: JavaScript
---

To create a multiline strings, the most common way is to concatenate them as shown below:

```js
const multilineStrings = 'This is a\n' + 'multiline\n' + 'strings';
```

Joining an array of strings is another approach:

```js
const multilineStrings = ['This is a', 'multiline', 'strings'].join('\n');
```

ES6 introduces an easier way to do that. It uses the template literal which is delimited by backticks:

```js
const multilineStrings = `This is a
multiline
strings`;
```

### See also

-   [Get rid of escaping quotes with template literal](/get-rid-of-escaping-quotes-with-template-literal.html)
-   [Prevent a string from being escaped](/prevent-a-string-from-being-escaped.html)
-   [Use template literal to concatenate strings](/use-template-literal-to-concatenate-strings.html)
