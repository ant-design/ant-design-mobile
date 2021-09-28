# Badge 徽标

<code src="./demos/index.tsx"></code>

## API

### Badge

| 属性    | 说明                                                                                            | 类型                                  | 默认值    |
| ------- | ----------------------------------------------------------------------------------------------- | ------------------------------------- | --------- |
| content | 徽标内容：如果传 `null` `undefined` `''` 或不传，则不显示徽标；如果传 `Badge.dot`，会显示小红点 | `React.ReactNode \| typeof Badge.dot` | -         |
| color   | 徽标背景色                                                                                      | `string`                              | `#FF411C` |
| offset  | 徽标相对于默认位置的偏移量 `[x, y]`， 单位 `px`                                                 | `[number, number]`                    | `[0, 0]`  |
