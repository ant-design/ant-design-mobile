---
order: 2
title: Real project with Dva
---

[dva](https://github.com/dvajs/dva) is a React and redux based, lightweight and elm-style framework, which supports side effects, hot module replacement, dynamic on demand, react-native, SSR. And it has been widely used in production environment.

This article will guide you to create a simple application from zero using dva and antd.

Include the following:

---

## Install dva-cli

Install dva-cli with npm, and make sure the version is larger then `0.7.0`.

```bash
$ npm install dva-cli -g
$ dva -v
0.7.0
```

## Create New App

After installed dva-cli, you can have access to the `dva` command in terminal ([can't access?](http://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found)). Now, create a new application with `dva new`.

```bash
$ dva new dva-quickstart
```

This creates `dva-quickstart` directory, that contains the project directories and files, and provides development server, build script, mock service, proxy server and so on.

Then `cd` the `dva-quickstart` directory, and start the development server.

```bash
$ cd dva-quickstart
$ npm start
```

After a few seconds, you will see the following output:

```bash
Compiled successfully!

The app is running at:

  http://localhost:8000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Open http://localhost:8000 in your browser, you will see dva welcome page.

## Integrate antd-mobile

[See here for details](/docs/react/introduce#Usage), the process is summarized as follows:

- `npm install antd-mobile babel-plugin-import --save` install dependency.
- `babel-plugin-import` is used to load scripts and styles on demand, edit` .roadhogrc `so that the` babel-plugin-import` plugin takes effect. [see here for details](https://github.com/sorrycc/roadhog#extrababelplugins)
- [HD program settings](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE)
- Configure `svg-sprite-loader` to support the use of the Icon component. [see here for details](https://github.com/sorrycc/roadhog#svgspriteloaderdirs) （roadhog >= 0.6.0-beta1）


## Next:

- Define Router
- Write UI Components
- Define Model

See [dva examples](https://github.com/dvajs/dva/tree/master/examples)

## Build

Now that we've written our application and verified that it works in development, it's time to get it ready to deploy to our users. To do so, run the following command:

```bash
$ npm run build
```

The `build` command packages up all of the assets that make up your application —— JavaScript, templates, CSS, images, and more. Then you can find these files in the `dist /` directory.

## What's Next

We have completed a simple application, but you may still have lots of questions, such as:

- How to dealing with async logic
- How to load initial data elegantly
- How to handle onError globally and locally
- How to load Routes and Models on demand
- How to implement HMR
- How to mock data
- and so on...

You can:

- Visit [dva official website](https://github.com/dvajs/dva).
- Be familiar with the [8 Conpects](https://github.com/dvajs/dva/blob/master/docs/Concepts.md), and understand how they are connected together
- Know all [dva APIs](https://github.com/dvajs/dva/blob/master/docs/API.md)
- Checkout [dva knowledgemap](https://github.com/dvajs/dva-knowledgemap), including all the basic knowledge with ES6, React, dva
- Checkout [more FAQ](https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq)
- If your project is created with [dva-cli](https://github.com/dvajs/dva-cli) , checkout how to [Configure it](https://github.com/sorrycc/roadhog#配置)
