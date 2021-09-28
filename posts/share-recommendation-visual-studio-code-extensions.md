---
title: Share recommendation Visual Studio Code extensions
category: Tip
date: '2021-05-17 20:56:00 +7'
topics: Visual Studio Code
metadata:
    image: share-recommendation-extensions.png
---

When we're working in a team, we would like to use the same set of tools to make the development process more robust and productive.

With Visual Studio Code, it makes sense to use the same set of extensions.

You can share the extensions with other people in your team by creating a file `extensions.json` located in the `.vscode` folder.

```json
{
    "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode", "svelte.svelte-vscode"]
}
```

The `recommendations` key contains the list of extensions which each of them is defined by an extension identifier.

> You can see the list of installed extensions by running the command:
>
> ```shell
> $ code --list-extensions
>
> # Example output
> dbaeumer.vscode-eslint
> rvest.vs-code-prettier-eslint
> svelte.svelte-vscode
> ```

Visual Studio Code will ask your teammates to install the recommended extensions when they open the workspace for the first time. They can do it anytime when clicking `Extensions: Show Recommended Extensions command`.
