---
title: Shorten import paths in Webpack
category: Tip
date: 2021-03-17 11:04:00 +7
layout: layouts/post.njk
topics: Webpack
---

Say you're using [Webpack](https://webpack.js.org) to bundle your application.
If you think that using a relative path when importing a given file is ugly and hard to maintain when changing the directory structure:

```js
import { formatDate } from '../../../helpers/formatDate';
```

Then using the aliases is one of the solutions. Webpack allows to map a prefix of import path to a given path. For example, we would like to map all the imports starting with `@` to the `src` folder.

The Webpack config looks like:

```js
// webpack.config.js
const path = require('path');

module.exports = {
    resolve: {
        alias: {
            // Assume that the `src` folder is located at the root folder
            '@': path.join(__dirname, 'src'),
        },
    },
};
```

The helper function mentioned at the top can be shorten as below:

```js
import { formatDate } from '@/helpers/formatDate';
```

Webpack will be looking for the helper in the `src/helpers/formatDate` file.

## See also

-   [Shorten import paths in TypeScript](/shorten-import-paths-in-typescript)
