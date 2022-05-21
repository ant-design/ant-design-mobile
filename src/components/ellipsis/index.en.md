# Ellipsis <Experimental></Experimental>

When the display space is not enough, hide some content and replace it with "...".

## When to Use

- The text content length or height exceeds the column width or row height.
- The space in the chart is limited and the text content cannot be fully displayed.
- Width becomes smaller during adaptive adjustment.

## Demos

<code src="./demos/demo1.tsx"></code>

## Ellipsis

### Props

| Name                            | Description                                                                          | Type                            | Default |
| ------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------- | ------- |
| content                         | The text content                                                                     | `string`                        | -       |
| direction                       | Position omitted                                                                     | `'start' \| 'end' \| 'middle'`  | `'end'` |
| rows                            | The number to display lines                                                          | `number`                        | `1`     |
| expandText                      | Expand operation text                                                                | `string`                        | `''`    |
| collapseText                    | Collapse operation text                                                              | `string`                        | `''`    |
| stopPropagationForActionButtons | Prevent the event bubbling caused by the expand operation and the collapse operation | `PropagationEvent[]`            | `[]`    |
| onContentClick                  | Trigger when clicked text content                                                    | `(e: React.MouseEvent) => void` | -       |
