---
title: Early return
category: practice
date: 2021-03-21 13:42:00 +7
tags:
  - posts
layout: layouts/post.njk
topics: JavaScript
---

Using the `if` statement is a common technique to deal with conditional logics. The code flow is split into different branches based on a given logic.

Let's take a look at a simple function that [suffixes a given hour](https://1loc.dev/#add-am-pm-suffix-to-an-hour) number with _am_ or _pm_. The suffix is determined based on which range the hour belongs to as you can see in the following table: 

| Hour      | With suffix   |
|-----------|---------------|
| 0         | 12am          |
| 1 - 11    | 1am - 11am    |
| 12        | 12pm          |
| 13 - 23   | 1pm - 11pm    |

An initial implementation of the function could look like:

```js
const suffixAmPm = hour => {
    if (hour === 0) {
        return '12am';
    } else {
        if (hour < 12) {
            return `${hour}am`;
        } else {
            if (hour === 12) {
                return '12pm';
            } else {
                return `${hour % 12}pm`;
            }
        }
    }
};
```

Imagine how the code looks like if we use multiple nested `if` statements. It's very hard to follow and maintain. Rather than using `else` or nested `if` statements, the function can return as soon as the condition matches:

```js
const fn = args => {
    if (condition) {
        return 'foo';
    } else {
        // Long implementation
        return 'bar';
    }
};

// Better
const fn = args => {
    if (condition) {
        return 'foo';
    }

    // Long implementation
    // Don't need to wrap within an `else`
    return 'bar';
};
```

Using this practice, a new version of the `suffixAmPm` function looks like:

```js
const suffixAmPm = hour => {
    if (hour === 0) {
        return '12am';
    }
    
    if (hour < 12) {
        return `${hour}am`;
    }
    
    if (hour === 12) {
        return '12pm';
    }

    return `${hour % 12}pm`;
};
```

_More_

* [Replace multiple if statements with a lookup table](/replace-multiple-if-statements-with-a-lookup-table.html)
* [Replace multiple if statements with a single switch statement](/replace-multiple-if-statements-with-a-single-switch-statement.html)