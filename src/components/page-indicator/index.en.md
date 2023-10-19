# PageIndicator

Indicates which page of the multi-page view is currently displayed.

## When to Use

Applicable to indicate that the current content block can be scrolled horizontally to turn pages.

## Demos

<code src="./demos/demo1.tsx"></code>

## PageIndicator

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color | `'primary' \| 'white'` | `'primary'` |
| current | Current page (counting from `0`) | `number` | - |
| direction | Layout direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| total | Total page number | `number` | - |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --active-dot-border-radius | rounded corner size the current page | `var(--dot-border-radius)` |
| --active-dot-color | dot color of the current page | `var(--adm-color-primary)` |
| --active-dot-size | dot size of the current page | `13px` |
| --dot-border-radius | rounded corner size the non-current pages | `1px` |
| --dot-color | dot color of the non-current pages | `var(--adm-color-light)` |
| --dot-size | dot size of the non-current pages | `3px` |
| --dot-spacing | space between dots of the page indicators | `3px` |
