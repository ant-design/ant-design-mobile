---
category: Components
type: Data Entry
title: Button
---

To trigger an operation.


## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| type     | can be set to `primary`/`ghost`/`warning` or omitted  |   string   |   -  |
| size     | can be set to `large`、`small` or omitted | string | `large`|
| activeStyle | the feedback's custom style (set to false to disable click feedback) | {}/false | {} |
| activeClassName  | the feedback's custom class name | string |  |
| disabled   | set disabled   | boolean |  false  |
| onClick    | set the handler to handle `click` event | (e: Object): void |  -  |
| style    | custom style |   Object  | - |
| inline     | whether set as an inline button  | boolean |   false  |
| loading	   | whether set loading state  | boolean	 | false |
| icon  | can be set to one type value of the [Icon Component](https://mobile.ant.design/components/icon) or any valid React.Element. (Note: It will be overwritten by the `loading` setting) | `string`/`React.Element` | -  |
| prefixCls |  prefix class | string | `am-button` |
| className |  class name | string | '' |
