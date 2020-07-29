---
title: Modal
nav:
  title: Components
  path: /components
---

### DEMO

#### alert
<code src="./demo/alert.tsx" />

#### confirm
<code src="./demo/confirm.tsx" />

#### standard
<code src="./demo/standard.tsx" />

#### promo
<code src="./demo/promo.tsx" />

#### product
<code src="./demo/product.tsx" />

### API

#### Modal

Properties | Description | Type | Default
-----------|------------|------|--------
| type | typeof Modal | 'product'\|'promo' | 'product' |
| visible | Determine whether a modal is visible or not | boolean | - |
| maskClosable | Determine whether to close the modal dialog when clicked mask of it | Boolean | true |
| onClose | Callback for clicking close icon x or mask | (): void | - |
| className  | additional className for dialog | string | |
| showCloseIcon  | show close icon | boolean | true |


### Modal.alert(options, cb).then(cb)

Properties | Description | Type | Default
-----------|------------|------|--------
| title | title | string | - |
| content | content of alert | string | -  |
| buttonText | text of the alert button | string | '我知道了' |

### Modal.confirm(options, cb).then(cb)
cb(res), confirm was pressed if res is true, else cancel was pressed

Properties | Description | Type | Default
-----------|------------|------|--------
| title | title | string | - |
| content | content of alert | string | -  |
| confirmText | text of the confirm button | string | '是' |
| cancelText | text of the cancel button | string | '否' |

### Modal.standard(options)

Properties | Description | Type | Default
-----------|------------|------|--------
| title | title | string | - |
| content | content of alert | string | -  |
| thumb | thumb | string | - |
| thumbSize | size of thumb | 'lg' \| 'md' | - |
| background | img of the modal | string | - |
| custom | custom element of the standard modal | ReactNode | - |
| mainButton | main button of the standard modal | {text: string, type?: 'normal'\|'primary'\|'bold'\|'danger', onPress?} | - |
| cancelButton | cancel button of the standard modal | {text: string, onPress?} | - |
| addonButton | addon button of the standard modal | {text: string, onPress?} | - |
| closeType | type of the notice modal close icon | 'dark'\|'light'|'none' | 'dark' |
