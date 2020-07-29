---
title: ActionSheet
nav:
  title: Components
  path: /components
  order: 1
---

### DEMO

<code src="./demo/basic.tsx" />

### STANDARD

<code src="./demo/standard.tsx" />

### API
`ActionSheet.show(options, callback)`

#### options
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| title | title of action sheet | React.ReactNode | - |
| items | list of action | (string|{value?: string,warn: boolean})[] | - |
| maskClosable | detect mask will close action sheet | boolean | false  |

#### callback 参数
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| index | the index of pressed item, start with 0, the cancel is -1 | number | - |

#### support promise
as `ActionSheet.show(options).then(cb)`


### standard
`ActionSheet.standard(standardOptions): {close, prev, next}`

#### standardOptions
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| title | title of action sheet | React.ReactNode | - |
| maskClosable | detect mask will close action sheet | boolean | false  |
| content | body of action sheet,array for steps mode | React.ReactNode \| React.ReactNode[] | false  |
| onClose | close callback for standard | () => void | - |

#### return
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| prev | steps mode only, apply to show prev step of content | () => void | - |
| next | steps mode only, apply to show next step of content | () => void | - |
| close | apply to close the standard ActionSheet | () => void | - |
