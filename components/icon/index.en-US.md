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


## How to Use (React-Native)

> You need to use custom font(`anticon.ttf`) for RN

- Download`https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf` and rename to `anticon.ttf`
- Open `info.plist` file in your xcode project, add `Fonts provided by application` property with one item and value `anticon.ttf`, then drag `anticon.ttf` to your xcode project.
- In Android project, you need place `anticon.ttf` in the `android/app/src/main/assets/fonts/` folder;

example：

```html
built-in icon： <Icon type="check" size="md" color="red" />
customized icon：<Icon type={'\ue601'} size={55} /> (具体参看 demo)
```
> Note: You can find some unicode charactors in [https://ant.design/components/icon/](https://ant.design/components/icon/) by using Chrome Developer Tool to inspect icons.

## API

Support：WEB、React-Native

| Properties        | Description           | Type            | Default       |
|------------|----------------|----------------|--------------|
| type    |   string name of built-in icon for `WEB` or unicode string for `RN`    | String   |
| size    |   icon size     | 'xxs'/'xs'/'sm'/'md'/'lg' (`RN/WEB`)/ number(`RN Only`)  | `md` |
| color(`RN Only`) | icon color  | Color | '#000' |
