# Rate

<code src="./demos/index.tsx"></code>

# API

| Name         | Description                                | Type                      | Default          |
| ------------ | ------------------------------------------ | ------------------------- | ---------------- |
| allowClear   | Whether to allow clear after clicked again | `boolean`                 | `true`           |
| allowHalf    | Whether to allow half selection            | `boolean`                 | `false`          |
| character    | Custom character                           | `ReactNode`               | `<StarFilled />` |
| count        | Total number of stars                      | `number`                  | `5`              |
| defaultValue | Default value                              | `number`                  | `0`              |
| readonly     | Read only, no interaction                  | `boolean`                 | `false`          |
| value        | Current number, controlled value           | `number`                  | -                |
| onChange     | Callback when selecting                    | `(value: number) => void` | -                |
