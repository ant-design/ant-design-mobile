# Collapse

<code src="./demos/index.tsx"></code>

## API

### Collapse

| Name             | Description                                | Type                                                                 | Default |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------------- | ------- |
| defaultActiveKey | the `key` of the expanded panel by default | accordion mode: `string \| null` <br/>non-accordion mode: `string[]` | -       |
| activeKey        | the `key` of the currently expanded panel  | accordion mode: `string \| null` <br/>non-accordion mode: `string[]` | -       |
| accordion        | whether to enable accordion mode           | `boolean`                                                            | `false` |
| onChange         | triggered when the panel is switched       | `(activeKey) => void`                                                | -       |

### Collapse.Panel

| Name        | Description                                       | Type               | Default |
| ----------- | ------------------------------------------------- | ------------------ | ------- |
| key         | the unique identifier                             | `string`           | -       |
| title       | the content on the left side of the title bar     | `string \| number` | -       |
| disabled    | whether disabled or not                           | `boolean`          | `false` |
| forceRender | whether to render the `DOM` structure when hidden | `boolean`          | `false` |
