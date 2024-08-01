# Alert

Display warning messages that require attention.

## When to Use

- When you need to show alert messages to users.
- When you need a persistent static container which is closeable by user actions.

## Demos

<code src="./demos/demo1.tsx"></code>

## API

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| `type` | Decide color and default icon of alert. | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | 5.38.0 |
| `showIcon` | Whether to show icon. | `boolean` | `false` | 5.38.0 |
| `icon` | Custom icon, effective when `showIcon` is `true`. | `ReactNode` | - | 5.38.0 |
| `ellipsis` | Limit content to one line and show ellipsis when content is too long. | `boolean` | `false` | 5.38.0 |
| `extra` | Show extra content at the end. | `ReactNode` | - | 5.38.0 |
| `closeable` | Show close button. | `boolean` | `false` | 5.38.0 |
| `onClose` | Callback when alert is closed | `() => void` | - | 5.38.0 |

### CSS Variables

| Name | Description | Default | Global | Version |
| --- | --- | --- | --- | --- |
| `--adm-alert-border-radius` | Border radius of the alert. | `4px` | `--adm-alert-border-radius` | 5.38.0 |
| `--adm-alert-close-color` | Color of the alert close icon. | `var(--adm-color-light)` | `--adm-alert-close-color` | 5.38.0 |
| `--adm-alert-close-size` | Size of the alert close icon. | `16px` | `--adm-alert-close-size` | 5.38.0 |
| `--adm-alert-font-size` | Font size of the alert. | `12px` | `--adm-alert-font-size` | 5.38.0 |
| `--adm-alert-gap` | Gap between icon, content, extra and close. | `8px` | `--adm-alert-gap` | 5.38.0 |
| `--adm-alert-icon-size` | Size of the alert icon. | `16px` | `--adm-alert-icon-size` | 5.38.0 |
| `--adm-alert-line-height` | Line height of the alert. | `16px` | `--adm-alert-line-height` | 5.38.0 |
