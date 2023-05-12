# Footer

## When to Use

Applicable to information description at the bottom of the page。

## Demos

<code src="./demos/demo1.tsx"></code>

## Footer

### Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| label | Top content with a dividing line | `string \| ReactNode` | - |
| links | Links to content | `LinkItem[]` | - |
| label | The common content section | `string \| ReactNode` | - |
| chips | Chips, only one line of content is allowed. If the content exceeds the width, the content will be automatically intercepted | `ChipItem[]` | - |
| onTagClick | Click the bottom label to trigger, and it will only take effect when the label 'type' is' link ' | `(item: ChipItem, index: number) => void` | - |
| onLinkClick | Clicking the link triggers an event that intercepts the href jump to the A tag | `(item: LinkItem, index: number) => void` | - |

### ChipItem

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| text | Tag Text | `string \| ReactNode` | - |
| type | Tag Type, `plain`is pure display, `link` is clickable | `'plain' \| 'link'` | `'plain'` |

### LinkItem

| Name | Description   | Type     | Default |
| ---- | ------------- | -------- | ------- |
| text | Text of links | `string` | -       |
| href | Href of links | `string` | -       |

### CSS Variables

| Name               | Description | Default                       |
| ------------------ | ----------- | ----------------------------- |
| --background-color | background  | `var(--adm-color-background)` |
