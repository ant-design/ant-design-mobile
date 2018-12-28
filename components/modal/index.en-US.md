---
category: Components
type: Feedback
title: Modal
---

Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation.

### Rules
- Use as few as possible. Modal will interrupt user operation, only use it at important situation.
- Title should be concise, do not exceed 1 line; description should be concise and complete, generally no more than 2 lines.
- Operation buttons are up to 3(vertical), generally 1-2(horizontal); [ActionSheet](/components/action-sheet) is preferred when there are more than 3 actions.
- Generally put the most likely clicked button on the right side. In addition, the cancel button should always be on the left.

## API

### Modal

Properties | Descrition | Type | Default
-----------|------------|------|--------
| afterClose | Specify a function that will be called when modal is closed completely. | function | - |
| visible | Determine whether a modal dialog is visible or not | Boolean | false |
| closable | Determine whether a close (x) button is visible or not | Boolean | false |
| maskClosable | Determine whether to close the modal dialog when clicked mask of it | Boolean | true |
| onClose | Callback for clicking close icon x or mask | (): void | - |
| transparent | transparent mode or full screen mode | Boolean | false |
| popup | popup mode | Boolean | false |
| animationType | Options: 'slide-down / up' / 'fade' / 'slide' | String | fade |
| title | title | React.Element | - |
| footer | footer content | Array [{text, onPress}] | [] |
| platform  | set the special style depends on platform, Options `android`, `ios` | String | `ios` |
| transitionName  | Modal animation css class name | String | |
| maskTransitionName  | mask animation css class name | String | |
| className  | additional className for dialog | String | |
| wrapClassName  | additional className for dialog wrap | String | |

### Modal.alert(title, message, actions?) ( Support Platform：WEB、React-Native )

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or React.Element | -  |
| message | message  | String or React.Element  | -  |
| actions | button group, [{text, onPress, style}]  | Array | -  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

call `Modal.alert(title, message, actions?).close()`  can close Alert Modal outside anywhere as you wish.

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title | title | String or React.Element | -  |
| message | message  | String or React.Element  | -  |
| callbackOrActions  | button group [{text, onPress}] or callback | Array or Function | -  |
| type  | prompt style | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue  | Default(input whick type is password is not supported) | String | -  |
| placeholders  | ['', '']  | String[] | -  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

call Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?).close()` can close prompt Modal outside anywhere as you wish.

### Modal.operation(actions?)

Properties | Descrition | Type | Default
-----------|------------|------|--------
| actions | button group, [{text, onPress, style}]  | Array | -  |
| platform  |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|

call Modal.operation(actions?).close()` can close Operation Modal outside anywhere as you wish.
