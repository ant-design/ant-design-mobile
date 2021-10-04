# Dropdown

<code src="./demos/demo1.tsx"></code>

# API

| Name        | Description                        | Type                          | Default |
| ----------- | ---------------------------------- | ----------------------------- | ------- |
| activeKey   | active `Item` `key`                | `string`                      | -       |
| onChange    | triggered when `activeKey` changes | `(activeKey?: string)=> void` | -       |
| forceRender | rendering of content forcibly      | `boolean`                     | `false` |

## Dropdown.Item

| Name      | Description      | Type        | Default |
| --------- | ---------------- | ----------- | ------- |
| key       | the unique value | `string`    | -       |
| title     | title            | `ReactNode` | -       |
| highlight | highlight        | `boolean`   | `false` |
