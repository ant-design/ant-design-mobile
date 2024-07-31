# Card

Universal card container.

## When to Use

It can carry text, lists, pictures, paragraphs, etc., which is convenient for users to browse the content.

## Demos

<code src="./demos/demo1.tsx"></code>

## Card

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bodyClassName | The custom class name of the body | `string` | - |  |
| bodyStyle | The custom style of the body | `React.CSSProperties` | - |  |
| extra | The right area of the header | `ReactNode` | - |  |
| headerClassName | The custom class name of the header | `string` | - |  |
| headerStyle | The custom style of the header | `React.CSSProperties` | - |  |
| icon | The left icon of the header | `ReactNode` | - | 5.38.0 |
| onBodyClick | The click event of the body area | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| onClick | The click event of the Card | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| onHeaderClick | The click event of the header area | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | - |  |
| title | The left area of the header | `ReactNode` | - |  |

### CSS Variables

| Name | Description | Default | Global | Version |
| --- | --- | --- | --- | --- |
| `--adm-card-border-radius` | Border radius of the button. | `8px` | `--adm-card-border-radius` |  |
| `--adm-card-padding-inline` | Horizontal padding of the card. | `12px` | `--adm-card-padding-inline` |  |
| `--adm-card-header-border-width` | Bottom border width of the card header. | `0.5px` | `--adm-card-header-border-width` |  |
| `--adm-card-header-border-color` | Bottom border color of the card header. | `var(--adm-color-border)` | `--adm-card-header-border-color` |  |
| `--adm-card-header-gap` | Horizontal gap of the card header. | `8px` | `--adm-card-header-gap` | 5.38.0 |
| `--adm-card-header-padding-block` | Vertical of the card header. | `12px` | `--adm-card-header-padding-block` |  |
| `--adm-card-body-padding-block` | Vertical padding of the card body. | `12px` | `--adm-card-body-padding-block` |  |
