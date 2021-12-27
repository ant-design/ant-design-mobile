# Dropdown

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>

## Dropdown

### Props

| Name             | Description                        | Type                                 | Default |
| ---------------- | ---------------------------------- | ------------------------------------ | ------- |
| activeKey        | Active `Item` key                  | `string \| null`                     | -       |
| defaultActiveKey | The default active `Item` key      | `string \| null`                     | `null`  |
| onChange         | Triggered when `activeKey` changes | `(activeKey: string \| null)=> void` | -       |
| arrow            | Custom arrow                       | `React.ReactNode`                    | -       |

### Ref

| Name  | Description        | Type         |
| ----- | ------------------ | ------------ |
| close | Close the Dropdown | `() => void` |

## Dropdown.Item

### Props

| Name             | Description                                               | Type              | Default |
| ---------------- | --------------------------------------------------------- | ----------------- | ------- |
| key              | The unique value                                          | `string`          | -       |
| title            | Title                                                     | `ReactNode`       | -       |
| highlight        | Highlight                                                 | `boolean`         | `false` |
| forceRender      | Whether to render the content even if it is not active    | `boolean`         | `false` |
| destroyOnClose   | Unmount content when not visible                          | `boolean`         | `false` |
| closeOnMaskClick | Whether to automatically close after clicking on the mask | `boolean`         | `true`  |
| arrow            | Custom arrow                                              | `React.ReactNode` | -       |
