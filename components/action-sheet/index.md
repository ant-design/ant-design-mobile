---
category: Components
chinese: 动作面板
type: 导航
english: ActionSheet
---

## 如何使用
类似 iPhone 的底部弹出菜单


## API
> 参考 RN API：https://facebook.github.io/react-native/docs/actionsheetios.html#content

#### static showActionSheetWithOptions(options: Object, callback: Function)

Display an iOS action sheet. The options object must contain one or more of:

- options (array of strings) - a list of button titles (required)
- cancelButtonIndex (int) - index of cancel button in options
- destructiveButtonIndex (int) - index of destructive button in options
- message (string) - a message to show below the title

#### static showShareActionSheetWithOptions(options: Object, callback: Function)

- options (array of `{iconName: 'xx', title: ''}`) - a list of button titles (required)
- message (string) - a message to show below the title

#### static showActionSheetWithCustom(options: Object, callback: Function)

- component (your custom component)

#### static close()

programmatically close ActionSheet.
