# Ellipsis <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

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
