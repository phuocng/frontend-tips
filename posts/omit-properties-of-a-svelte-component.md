---
title: Omit properties of a Svelte component
category: Tip
date: '2021-11-03 20:56:00 +7'
topics: Svelte
metadata:
    image: omit-properties-svelte-component.png
---

[Svelte](https://svelte.dev) is one of the libraries for building user interfaces. We usually declare the properties and values of a component in the same syntax of declaring a HTML tag.

The following component has three different properties. Two of them represent the first and last name of an account, and the last one updates these values.

```html
<script>
    let firstName = 'John';
    let lastName = 'Doe';

    const onSetFullName = (props) => {
        firstName = props.firstName;
        lastName = props.lastName;
    };
</script>

<Account firstName="{firstName}" lastName="{lastName}" onSetFullName="{onSetFullName}" />
```

The cool thing is that, if you use the same name for both property and the variable representing its value, you can omit the property. The `Account` component can be shorten as following:

```js
<Account
    {firstName}
    {lastName}
    {onSetFullName}
/>
```

### See also

-   [Omit values of HTML boolean attributes](/omit-values-of-html-boolean-attributes)
