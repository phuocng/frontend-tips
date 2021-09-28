---
title: Add a subject to a mailto link
category: Tip
date: '2021-03-25 13:21:00 +7'
topics: HTML
---

We already know that when users click a mailto link (`<a href="mailto: ___"`), the browser will open the default email application and fill the receiver's email address automatically.

Is it possible to fill the initial subject? The answer is yes. We can define it by passing the `subject` parameter:

```html
<a href="mailto:john@example.com&subject=..."></a>
```

In addition to the `subject` parameter, there are also `cc`, `bcc` and `body` parameters. They'll be filled in the default email application if specified.

```html
<a href="mailto:john@example.com&cc=...&bcc=...&body=..."></a>
```

It's worth noting that the `subject` and `body` parameters must replace the spaces with `%20`. There are some [online tool](https://mailtolinkgenerator.com) to [generate](https://mailtolink.me) the final mailto link for us.

> If you want to use multiple email addresses in the `cc` and `bcc` parameters, then separate them with commas (`,`)
