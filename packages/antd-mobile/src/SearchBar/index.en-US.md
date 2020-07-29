---
title: SearchBar
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

#### SearchBar

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue |  the uncontrolled default value    | String |    |
| value      |  the controlled current value  | String |    |
| placeholder    |    placeholder   | String |    |
| onSubmit    |  submit event (click the enter on the keyboard) | (val: string): void |    |
| onChange    |    change event callback     | (val: string): void |    |
| onFocus    |    focus event callback     | (): void |    |
| onBlur    |    blur event callback     | (): void |    |
| onCancel  | Click the `Cancel` button to trigger | (val: string): void |    |
| showCancelButton |  Whether the `Cancel` button is always displayed  | bool |  `false`  |
| cancelText  |  Customize the text of the `Cancel` button   | String |  `取消`  |
| disabled    |   Set disabled  | bool |  `false`  |
| onClear  |  Click the clear icon to trigger   | (val: string): void |    |
| maxLength      |  The maxlength attribute limits the number of characters that SearchBar can accept    | number | -  |
| borderColor      |  borderColor    | string | -  |


#### SearchBar ref methods

Property | Description | Type | Default
----|-----|------|------
| focus     | Force focus back onto the search input node  | (): void |  -  |
