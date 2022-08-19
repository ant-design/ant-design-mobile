# Footer 页脚

## When to Use

Applicable to information description at the bottom of the page。

## Demos

<code src="./demos/demo1.tsx"></code>

## Footer

### Props

| Name       | Description                                                                                                                 | Type                                      | Default |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------- |
| label      | Label                                                                                                                       | `ReactNode`                               | -       |
| links      | Links，Only one line of content is allowed. If the content exceeds the width, the content will be automatically intercepted | `ReactNode`                               | -       |
| label      | Content                                                                                                                     | `ReactNode`                               | -       |
| chips      | Chips，Only one line of content is allowed. If the content exceeds the width, the content will be automatically intercepted | `ChipItem[]`                              | -       |
| onTagClick | Click the bottom label to trigger, and it will only take effect when the label 'type' is' link '                            | `(item: ChipItem, index: number) => void` | -       |

### ChipItem

| Name     | Description                                            | Type                                                                    | Default |
| -------- | ------------------------------------------------------ | ----------------------------------------------------------------------- | ------- |
| text     | Tag Text                                               | `ReactNode`                                                             | -       |
| type     | Tag Type， `plain`is pure display, `link` is clickable | `plain` \| `link`                                                       | -       |
| tagProps | Tag Props                                              | [Tag Props](http://localhost:8000/zh/components/tag#%E5%B1%9E%E6%80%A7) | -       |
