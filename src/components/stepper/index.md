# Stepper 步进器

<code src="./demos/index.tsx"></code>

## API

### Stepper

| 参数         | 说明                                                | 类型                    | 默认值 |
| ------------ | --------------------------------------------------- | ----------------------- | ------ |
| value        | 当前数，受控值                                      | number                  | -      |
| onChange     | 变化时的回调                                        | (value: number) => void | -      |
| defaultValue | 默认值                                              | number                  | 1      |
| min          | 最小值                                              | number                  | -      |
| max          | 最大值                                              | number                  | -      |
| step         | 每次改变步数，可以为小数                            | number                  | 1      |
| digits       | 格式化到小数点后固定位数，设置为 0 表示格式化到整数 | number                  | -      |
| disabled     | 是否禁用步进器                                      | boolean                 | false  |
