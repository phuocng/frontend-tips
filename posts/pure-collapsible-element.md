---
title: Pure collapsible element
category: Tip
date: '2021-03-06 16:55:00 +7'
topics: HTML
---

We can create an expandable element with pure HTML tags as following:

```html
<details>
    <summary>Title</summary>
    <!--
    The hidden content that will be shown when 
    clicking the `summary` tag.
    -->
</details>
```

I often use the tags when including a long error log on GitHub:

```html
<details>
    <summary>Error log</summary>
    <pre><code><!-- Full log here --></code></pre>
</details>
```

### Demo

:demo[]{title="Pure collapsible element" url="/demo/pure-collapsible-element/index.html"}
