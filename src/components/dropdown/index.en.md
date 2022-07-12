# Dropdown <Experimental></Experimental>

The menu panel that pops down.

## When to Use

It is suitable for filtering, sorting and changing the display range or order of the current page content.

## Demos

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

## Dropdown

### Props

| Name             | Description                                               | Type                                 | Default |
| ---------------- | --------------------------------------------------------- | ------------------------------------ | ------- |
| activeKey        | Active `Item` key                                         | `string \| null`                     | -       |
| arrow            | Custom arrow                                              | `React.ReactNode`                    | -       |
| closeOnClickAway | Whether to automatically hide after clicking outside area | `boolean`                            | `false` |
| closeOnMaskClick | Whether to automatically close after clicking on the mask | `boolean`                            | `true`  |
| defaultActiveKey | The default active `Item` key                             | `string \| null`                     | `null`  |
| onChange         | Triggered when `activeKey` changes                        | `(activeKey: string \| null)=> void` | -       |

### Ref

| Name  | Description        | Type         |
| ----- | ------------------ | ------------ |
| close | Close the Dropdown | `() => void` |

## Dropdown.Item

### Props

| Name           | Description                                            | Type              | Default |
| -------------- | ------------------------------------------------------ | ----------------- | ------- |
| arrow          | Custom arrow                                           | `React.ReactNode` | -       |
| destroyOnClose | Unmount content when not visible                       | `boolean`         | `false` |
| forceRender    | Whether to render the content even if it is not active | `boolean`         | `false` |
| highlight      | Highlight                                              | `boolean`         | `false` |
| key            | The unique value                                       | `string`          | -       |
| title          | Title                                                  | `ReactNode`       | -       |
