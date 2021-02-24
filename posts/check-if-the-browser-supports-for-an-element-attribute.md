---
title: Check if the browser supports for an element attribute
category: trick
date: 2021-02-24 14:00:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: DOM, JavaScript
---

We can detect if the current browser supports for given attribute, `pattern` for example, as following:

```js
const isPatternSupported = 'pattern' in document.createElement('input');
```

If you would like to check for the value of attribute, it takes more steps. The sample code below determines whether the [native date input](https://htmldom.dev/check-if-the-native-date-input-is-supported) is supported:

```js
const isDateInputSupported = () => {
    // Create new input element
    const ele = document.createElement('input');

    // Set the type attribute
    ele.setAttribute('type', 'date');

    const invalidValue = 'not-a-valid-date';

    // Set an invalid value
    ele.setAttribute('value', invalidValue);

    return ele.value !== invalidValue;
};
```

If the browser supports the date input, invoking `setAttribute` with an invalid date won't have effect on the `value` attribute. As a result, `ele.value` will be an empty string.
    
Otherwise, the input is treated as normal text input and `ele.value` returns the original value.