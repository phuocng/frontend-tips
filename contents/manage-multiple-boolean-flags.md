---
title: Manage multiple boolean flags
category: Tip
date: 2021-02-25 14:36:00 +7
layout: layouts/post.njk
topics: JavaScript
---

Sometimes a function has to deal with different conditions. It's not ideal to pass all of them as separated parameters.

To demonstrate the problem, let's say that we need to validate a password in a registration form. It's up to you to define differents rules for a strong password, but this example covers rules listed as following:

-   Should have at least 8 characters
-   Should contain at least one upper case character
-   Should contain at least one lower case character
-   Should contain at least one digit

As we imagine, each rule could be represented by a `boolean` parameter. The validator function looks like:

```js
const validatePassword = (password, checkLength, checkUpperCase, checkLowerCase, checkDigit) => {
    // returns `true` or `false`
    // ...
};
```

The number of parameters can be increased quickly depending on the number of rules. Also, the implementation is a mess if we combine the rules together.
To fix the problem, we introduce the rule flag by different numbers. Each number is a power of 2:

```js
const RULE_LENGTH = 1 << 0; // 1
const RULE_UPPER_CASE = 1 << 1; // 2
const RULE_LOWER_CASE = 1 << 2; // 4
const RULE_DIGIT = 1 << 3; // 8
```

We can create a combination of rules via the bitwise (`|`) operator. Using `|` with different rule(s) will generate an unique number, because a number can be written as the sum of different power of 2.

| Combination                                                       | Number |
| ----------------------------------------------------------------- | ------ |
| `RULE_LENGTH`                                                     | 1      |
| `RULE_UPPER_CASE`                                                 | 2      |
| `RULE_LENGTH \| RULE_UPPER_CASE`                                  | 3      |
| `RULE_LOWER_CASE`                                                 | 4      |
| `RULE_LENGTH \| RULE_LOWER_CASE`                                  | 5      |
| `RULE_UPPER_CASE \| RULE_LOWER_CASE`                              | 6      |
| `RULE_LENGTH \| RULE_UPPER_CASE \| RULE_LOWER_CASE`               | 7      |
| ...                                                               | ...    |
| `RULE_LENGTH \| RULE_UPPER_CASE \| RULE_LOWER_CASE \| RULE_DIGIT` | 15     |

The validator function can be shortent as following, where `rule` is a number:

```js
// The default rule should cover all the cases
const RULE_DEFAULT = RULE_LENGTH | RULE_UPPER_CASE | RULE_LOWER_CASE | RULE_DIGIT; // 15

const validatePassword = (password, rule = RULE_DEFAULT) => {};
```

You just need to pass the required rules instead of indicating all of them:

```js
// Only check the length rule
validatePassword(password, RULE_LENGTH);

// Check length and upper case rules
validatePassword(password, RULE_LENGTH | RULE_UPPER_CASE);
```

From the `rule` number, we can know whether a given rule is enabled by using the `&` operator:

```js
const validatePassword = (password, rule = RULE_DEFAULT) => {
    // `RULE_LENGTH` is enabled
    if (rule & RULE_LENGTH && password.length < 8) {
        return false;
    }

    if (rule & RULE_UPPER_CASE && password === value.toUpperCase()) {
        return false;
    }

    if (rule & RULE_LOWER_CASE && password === value.toLowerCase()) {
        return false;
    }

    if (rule & RULE_DIGIT && password.search(/[0-9]/) < 0) {
        return false;
    }

    return true;
};
```

### See also

-   [Avoid boolean parameters](/avoid-boolean-parameters.html)
