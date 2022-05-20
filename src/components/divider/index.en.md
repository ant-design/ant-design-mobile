# Divider

A dividing line that separates content.

## When to use

- Split text paragraphs in different chapters.
- Split inline text/links, such as the action column of a table.

<code src="./demos/demo1.tsx"></code>

### Props

| Name            | Description                                                                     | Type                            | Default        |
| --------------- | ------------------------------------------------------------------------------- | ------------------------------- | -------------- |
| contentPosition | The position of the content. Only take effect when `direction` is `horizontal`. | `'center' \| 'left' \| 'right'` | `'center'`     |
| direction       | The direction type of divider                                                   | `'horizontal' \| 'vertical'`    | `'horizontal'` |
