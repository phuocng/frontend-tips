---
title: Access local webpack dev servers from external devices
category: Tip
date: '2021-04-26 09:18:00 +7'
topics: Webpack
metadata:
    image: webpack-dev-server-host-option.png
---

Sometimes we would like to access a local development server externally. It happens when we want to see how our web application works on mobile phones. Or co-workers want to see how it looks on their browsers.

The local server is available at `http://localhost:PORT` where `PORT` represents the port number that the server listens on. In order to make it accessible in the same network, we have to replace `localhost` with the IP address.

Webpack dev server allows the server to be available externally via the `host` option:

```js
// webpack.config.js
module.exports = {
  ...
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    ...
  },
};
```

The `host` option can be passed to the command line interface as well:

```shell
webpack serve --host 0.0.0.0
```

With the configurations above, we can access the server internally (`http://localhost:8001`) and externally (`http://THE-IP-ADDRESS:8001`).
