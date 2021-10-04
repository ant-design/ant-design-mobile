# Badge

<code src="./demos/index.tsx"></code>

### Props

| Name    | Description                                                                                                                                                        | Type                                  | Default   |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | --------- |
| content | the content of the Badge: if `null` `undefined` `''` or nothing is passed, it would not be displayed; if `Badge.dot` is passed, a small red dot would be displayed | `React.ReactNode \| typeof Badge.dot` | -         |
| color   | the background color of the Badge                                                                                                                                  | `string`                              | `#FF411C` |

### CSS Variables

| Name    | Description                                         | Default |
| ------- | --------------------------------------------------- | ------- |
| --right | the offset to the left, relative to the far right   | `0`     |
| --top   | the downward offset, relative to the uppermost edge | `0`     |
