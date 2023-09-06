# Badge

Display numbers, text, and small red dots in the upper right corner.

## When to Use

It is suitable for reminders of productized new news, new functions, new services, etc., and attracts users to deal with it through eye-catching visual forms.

## Demos

<code src="./demos/demo1.tsx"></code>

## Badge

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| bordered | Whether to have border. | `boolean` | `false` |
| color | The background color of the Badge. Equivalent to setting the `--color` CSS variable. | `string` | - |
| content | The content of the Badge: if `null` `undefined` `''` or nothing is passed, it would not be displayed; if `Badge.dot` is passed, a small red dot would be displayed | `React.ReactNode \| typeof Badge.dot` | - |
| wrapperClassName | `Badge` wrap class name | `string` | - |
| wrapperStyle | `Badge` wrap style | `React.CSSProperties` | - |

### CSS Variables

| Name | Description | Default | Global |
| --- | --- | --- | --- |
| --color | The background color of the Badge | `var(--adm-color-highlight)` | `--adm-badge-color` |
| --right | The offset to the left, relative to the far right | `0` | - |
| --top | The downward offset, relative to the uppermost edge | `0` | - |
