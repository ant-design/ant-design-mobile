# Collapse

<code src="./demos/index.tsx"></code>

## API

### Collapse

| Name             | Description                                | Type                                                                 | Default |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------------- | ------- |
| defaultActiveKey | The `key` of the expanded panel by default | accordion mode: `string \| null` <br/>non-accordion mode: `string[]` | -       |
| activeKey        | The `key` of the currently expanded panel  | accordion mode: `string \| null` <br/>non-accordion mode: `string[]` | -       |
| accordion        | Whether to enable accordion mode           | `boolean`                                                            | `false` |
| onChange         | Triggered when the panel is switched       | `(activeKey) => void`                                                | -       |

### Collapse.Panel

| Name           | Description                                       | Type               | Default |
| -------------- | ------------------------------------------------- | ------------------ | ------- |
| key            | The unique identifier                             | `string`           | -       |
| title          | The content on the left side of the title bar     | `string \| number` | -       |
| disabled       | Whether disabled or not                           | `boolean`          | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`          | `false` |
| destroyOnClose | Unmount content when not visible                  | `boolean`          | `false` |
