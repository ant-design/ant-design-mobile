# Stepper 步进器

<code src="./demos/index.tsx" />

## API

### Stepper

| 参数         | 说明                     | 类型                    | 默认值 |
| ------------ | ------------------------ | ----------------------- | ------ |
| value        | 当前数，受控值           | number                  | -      |
| onChange     | 变化时的回调             | (value: number) => void | -      |
| defaultValue | 默认值                   | number                  | 1      |
| min          | 最小值                   | number                  | -      |
| max          | 最大值                   | number                  | -      |
| step         | 每次改变步数，可以为小数 | number                  | 1      |
| disabled     | 是否禁用步进器           | boolean                 | false  |
