---
title: Do not use submit to name a submit button
category: Best practice
date: '2021-03-04 20:00:00 +7'
topics: HTML
---

Given a form element, we often call the `submit()` method to submit the form after validating its fields.

If the submit button of the form has either `name="submit"` or `id="submit"` attribute, then `formEle.submit` will return the submit button instance.
As a result, `formEle.submit()` throws an exception because it's not an actual function anymore.

We can face the similar issue when using special properties of form such as `reset`, `length`, `method`.

```html
<!-- Do NOT -->
<button type="submit" name="submit">Submit</button>
<button type="submit" id="submit">Submit</button>

<!-- Do -->
<button type="submit" name="submitButton">Submit</button>
```

### See also

-   [Avoid to use colons and periods in the id attribute](/avoid-to-use-colons-and-periods-in-the-id-attribute.html)
