---
title: Pure collapsible element
category: tip
date: 2021-03-06 16:55:00 +7
tags:
  - posts
layout: layouts/post.njk
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

_Demo_

<details>
    <summary>TLDR</summary>
    <div>TLDR stands for "too long, don't read". But it's too short, isn't it?</div>
</details>

<details>
    <summary>A question?</summary>
    <div>The answer is hidden initially</div>
</details>