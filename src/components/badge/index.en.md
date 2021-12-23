# Badge

<code src="./demos/demo1.tsx"></code>

### Props

| Name    | Description                                                                                                                                                        | Type                                  | Default   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------- |
| content | The content of the Badge: if `null` `undefined` `''` or nothing is passed, it would not be displayed; if `Badge.dot` is passed, a small red dot would be displayed | `React.ReactNode \| typeof Badge.dot` | -         |
| color   | The background color of the Badge                                                                                                                                  | `string`                              | `#FF411C` |

### CSS Variables

| Name    | Description                                         | Default |
| ------- | --------------------------------------------------- | ------- |
| --right | the offset to the left, relative to the far right   | `0`     |
| --top   | the downward offset, relative to the uppermost edge | `0`     |
