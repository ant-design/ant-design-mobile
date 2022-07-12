# Collapse

A content area that can be collapsed/expanded.

## When to Use

- Group and hide complex areas to keep pages tidy.
- An accordion is a special type of accordion panel that only allows a single content area to expand.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Collapse

### Props

| Name             | Description                                                                             | Type                                                                                                             | Default |
| ---------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| accordion        | Whether to enable accordion mode                                                        | `boolean`                                                                                                        | `false` |
| activeKey        | The `key` of the currently expanded panel                                               | accordion mode: `string \| null` <br/>non-accordion mode: `string[]`                                             | -       |
| arrow            | Custom arrow. if you pass a ReactNode, antd-mobile will add a rotate animation for you. | `React.ReactNode \| ((active: boolean) => React.ReactNode)`                                                      | -       |
| defaultActiveKey | The `key` of the expanded panel by default                                              | accordion mode: `string \| null` <br/>non-accordion mode: `string[]`                                             | -       |
| onChange         | Triggered when the panel is switched                                                    | accordion mode: `(activeKey: string \| null) => void` <br /> non-accordion mode: `(activeKey: string[]) => void` | -       |

## Collapse.Panel

### Props

| Name           | Description                                       | Type                                                        | Default |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------- | ------- |
| arrow          | Custom arrow                                      | `React.ReactNode \| ((active: boolean) => React.ReactNode)` | -       |
| destroyOnClose | Unmount content when not visible                  | `boolean`                                                   | `false` |
| disabled       | Whether disabled or not                           | `boolean`                                                   | `false` |
| forceRender    | Whether to render the `DOM` structure when hidden | `boolean`                                                   | `false` |
| key            | The unique identifier                             | `string`                                                    | -       |
| onClick        | The click event of title bar                      | `(event: React.MouseEvent<Element, MouseEvent>) => void`    | -       |
| title          | The content on the left side of the title bar     | `ReactNode`                                                 | -       |
