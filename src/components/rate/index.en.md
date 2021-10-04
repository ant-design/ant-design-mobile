# Rate

<code src="./demos/index.tsx"></code>

# API

| Name         | Description                                | Type                      | Default          |
| ------------ | ------------------------------------------ | ------------------------- | ---------------- |
| allowClear   | whether to allow clear after clicked again | `boolean`                 | `true`           |
| allowHalf    | whether to allow half selection            | `boolean`                 | `false`          |
| character    | custom character                           | `ReactNode`               | `<StarFilled />` |
| count        | total number of stars                      | `number`                  | `5`              |
| defaultValue | default value                              | `number`                  | `0`              |
| readonly     | read only, no interaction                  | `boolean`                 | `false`          |
| value        | current number, controlled value           | `number`                  | -                |
| onChange     | callback when selecting                    | `(value: number) => void` | -                |
