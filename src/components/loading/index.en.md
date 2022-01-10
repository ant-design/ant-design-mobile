# Loading

## DotLoading

<code src="../dot-loading/demos/demo1.tsx"></code>

### Props

| Name  | Description          | Type                                          | Default     |
| ----- | -------------------- | --------------------------------------------- | ----------- |
| color | Color of the Loading | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

The size of `DotLoading` would automatically be adjusted according to the current text size.

## SpinLoading

<code src="../spin-loading/demos/demo1.tsx"></code>

### Props

| Name  | Description                                                       | Type                                          | Default     |
| ----- | ----------------------------------------------------------------- | --------------------------------------------- | ----------- |
| color | Color of line. Equals to manually set the `--color` CSS variable. | `'default' \| 'primary' \| 'white' \| string` | `'default'` |

### CSS Variables

| Name    | Description          | Default                 |
| ------- | -------------------- | ----------------------- |
| --color | Color of line.       | `var(--adm-color-weak)` |
| --size  | Size of the element. | `32px`                  |

## Loading

In order to maintain compatibility with older versions of usage, we keep the reference to Loading, so if you continue to use Loading, there is still no problem. However, since we are likely to remove the Loading reference in future major version upgrades, if you see this prompt, please replace Loading in the project with DotLoading as soon as possible.
