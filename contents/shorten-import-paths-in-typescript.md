---
title: Shorten import paths in TypeScript
category: Tip
date: 2021-03-16 08:37:00 +7
layout: layouts/post.njk
topics: TypeScript
---

In TypeScript, we often use the relative path to import a particular file. Here is an example of importing multiple files from the `helper` and `services` folder:

```js
import { validator } from '../../../helpers/validator';
import { authService } from '../../../services/authService';
```

The disadvantage is that when we change the directory structure, these imports must be updated accordingly. Despite the fact that popular editors such as Visual Studio Code updates the paths automatically, it doesn't ensure that the process works all the time.

Fortunately, TypeScript provides the ability of using the absolute paths. In the TypeScript configuration file, `tsconfig.json`, we can indicate the alias for particular paths under the `paths` property.

For example, the following settings will find all imports starting with `@` in the `src` folder:

```json
{
    "paths": {
        "@/*": ["src/*"]
    }
}
```

| Import path              | Identical absolute path    |
| ------------------------ | -------------------------- |
| `@/helpers/validator`    | `src/helpers/validator`    |
| `@/services/authService` | `src/services/authService` |

Our imports can be shorten as following:

```js
import { validator } from '@/helpers/validator';
import { authService } from '@/services/authService';
```

Some libraries, Angular for instance, follows a specific pattern of directory structure, we can pre-define the path for given folders:

```json
{
    "paths": {
        "@helpers/*": ["src/helpers/*"],
        "@models/*": ["src/models/*"],
        "@services/*": ["src/services/*"]
    }
}
```

Then the imports of files belonging to these folders can be shorten as below:

```js
import { validator } from '@helpers/validator';
import { userModel } from '@models/user';
import { authService } from '@services/authService';
```

## See also

-   [Shorten import paths in Webpack](/shorten-import-paths-in-webpack)
