---
title: Compose multiple React providers
category: Tip
date: '2021-05-13 20:36:00 +7'
topics: React
metadata:
    image: compose-react-providers.png
---

Nowadays, it is common to use React's context at the root of an application to manage a shared state between any components.

For example, checking whether or not the current user has logged in might be accomplished by the `AuthProvider` provider:

```js
const App = () => {
    return (
        <AuthProvider>
            {...}
        </AuthProvider>
    );
};
```

Using multiple providers could make the code harder to read because there are a lot of nested components:

```js
const App = () => {
    return (
        <Router>
            <AuthProvider>
                <ThemeProvider>
                    <LocalizationProvider>
                        {...}
                    </LocalizationProvider>
                </ThemeProvider>
            </AuthProvider>
        </Router>
    );
};
```

The providers can be composed together by using the `reduce` function:

```js
const compose = (providers) =>
    providers.reduce((Prev, Curr) => ({ children }) => (
        <Prev>
            <Curr>{children}</Curr>
        </Prev>
    ));
```

The provider declarations in the root can be shorten as below:

```js
const Provider = compose([
    Router,
    AuthProvider,
    ThemeProvider,
    LocalizationProvider,
]);

const App = () => {
    return (
        <Provider>
            {...}
        </Provider>
    );
};
```
