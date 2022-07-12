# IndexBar

Arrange the content according to the letters A-Z.

## When to Use

Category display and quick positioning for lists.

## Demos

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx" debug></code>

## IndexBar

### Props

| Name          | Description                                           | Type                      | Default |
| ------------- | ----------------------------------------------------- | ------------------------- | ------- |
| onIndexChange | Trigger when the anchor point changed                 | `(index: string) => void` | -       |
| sticky        | Whether to turn on the anchor point automatic ceiling | `boolean`                 | `true`  |

### Ref

| Name     | Description                          | Type                      |
| -------- | ------------------------------------ | ------------------------- |
| scrollTo | Scroll to the specified anchor point | `(index: string) => void` |

### CSS Variables

| Name                | Description                                                                        | Default | Global |
| ------------------- | ---------------------------------------------------------------------------------- | ------- | ------ |
| --sticky-offset-top | The distance between the anchor point and the top when it is automatically ceiling | `0`     | -      |

## IndexBar.Panel

### Props

| Name  | Description                           | Type        | Default                                                  |
| ----- | ------------------------------------- | ----------- | -------------------------------------------------------- |
| brief | The brief title in the right sidebar. | `ReactNode` | The first character of `index` would be used by default. |
| index | Unique index.                         | `string`    | -                                                        |
| title | The panel title in the main area.     | `ReactNode` | `index` would be used by default.                        |
