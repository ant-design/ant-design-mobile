---
category: Components
type: Data Display
title: Icon
---

## Naming Conventions

Each icon has its own semantic naming，the naming rules are as follows:

- The solid and line icons have same name，we use `-o` to distinguish it. eg: `question-circle` (solid icon), `question-circle-o` (line icon)
- Sequence in naming: `[icon name]-[shape(optional)]-[`-o` or not]-[direction(optional)]`。

## How to Use (WEB)

```html
<Icon type="check" />
```

### Tips

Now, we only support the built-in 'check-circle', 'check', 'check-circle-o', 'cross-circle', 'cross', 'cross-circle-o', 'up' , 'left', 'right', 'ellipsis', 'loading' these icon types, **no longer support other custom types of icon**. If you need to use your custom icon type, there are several ways:

1. view svg icon document for 1.x => 2.0 in [/docs/react/upgrade-notes](/docs/react/upgrade-notes#1.x-=>-2.0)
2. Use your own iconfont file
3. Other methods, you can reuse the `.am-icon` style name we have provided


## How to Use (React-Native)

> You need to run `react-native link` before using `Icon`

example：

```html
built-in icon： <Icon type="check" size="md" color="red" />
customized icon：<Icon type="step-backward" size={55} /> (See demo for further details)
```
> Note: You can find `type` in [https://ant.design/components/icon/](https://ant.design/components/icon/).

## API

Support：WEB、React-Native

| Properties        | Description           | Type            | Default       |
|------------|----------------|----------------|--------------|
| type    |   string name of built-in icon for `WEB` or unicode string for `RN`    | String   |
| size    |   icon size     | 'xxs'/'xs'/'sm'/'md'/'lg' (`RN/WEB`)/ number(`RN Only`)  | `md` |
| color   | icon color  | Color | '#000' |
