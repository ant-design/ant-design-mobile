# Collapse

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Collapse

### Props

| Name             | Description                                                                             | Type                                                                                                             | Default |
| ---------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| defaultActiveKey | The `key` of the expanded panel by default                                              | accordion mode: `string \| null` <br/>non-accordion mode: `string[]`                                             | -       |
| activeKey        | The `key` of the currently expanded panel                                               | accordion mode: `string \| null` <br/>non-accordion mode: `string[]`                                             | -       |
| accordion        | Whether to enable accordion mode                                                        | `boolean`                                                                                                        | `false` |
| onChange         | Triggered when the panel is switched                                                    | accordion mode: `(activeKey: string \| null) => void` <br /> non-accordion mode: `(activeKey: string[]) => void` | -       |
| arrow            | Custom arrow. if you pass a ReactNode, antd-mobile will add a rotate animation for you. | `React.ReactNode \| ((active: boolean) => React.ReactNode)`                                                      | -       |

## Collapse.Panel

### Props

| Name           | Description                                       | Type                                                        | Default |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| key            | The unique identifier                             | `string`                                                    | -       |
| title          | The content on the left side of the title bar     | `ReactNode`                                                 | -       |
| disabled       | Whether disabled or not                           | `boolean`                                                   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`                                                   | `false` |
| destroyOnClose | Unmount content when not visible                  | `boolean`                                                   | `false` |
| onClick        | The click event of title bar                      | `(event: React.MouseEvent<Element, MouseEvent>) => void`    | -       |
| arrow          | Custom arrow                                      | `React.ReactNode \| ((active: boolean) => React.ReactNode)` | -       |
