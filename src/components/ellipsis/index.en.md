# Ellipsis

When the display space is not enough, hide some content and replace it with "...".

## When to Use

- The text content length or height exceeds the column width or row height.
- The space in the chart is limited and the text content cannot be fully displayed.
- Width becomes smaller during adaptive adjustment.

## Demos

<code src="./demos/demo1.tsx"></code>

## Ellipsis

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| collapseText | Collapse operation text | `React.ReactNode` | `''` |  |
| content | The text content | `string` | - |  |
| direction | Position omitted | `'start' \| 'end' \| 'middle'` | `'end'` |  |
| expandText | Expand operation text | `React.ReactNode` | `''` |  |
| onContentClick | Trigger when clicked text content | `(e: React.MouseEvent) => void` | - |  |
| rows | The number to display lines | `number` | `1` |  |
| stopPropagationForActionButtons | Prevent the event bubbling caused by the expand operation and the collapse operation | `PropagationEvent[]` | `[]` |  |
| defaultExpanded | Whether to expand by default | `boolean` | `false` |  |
| onExpand | Callback when expand or collapse | `(expanded: boolean, info: { event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void}` | - | 5.41.0 |

## FAQ

### When the text content contains long and continuous numbers or English words, what should I do if there is no ellipsis?

The value of the `word-break` CSS property is read inside the `Ellipsis` component. If the value of this style property is not set, the default value is: `normal`. So, when the text content contains a lot of numbers or English words, the text content cannot be omitted (default behavior of browsers). At this point, if you need to make the text ellipsis take effect, you can manually add the `word-break` style (for example, `word-break: break-word`) to the `Ellipsis` component or its outer elements, and the `Ellipsis` component will fully follow the style inheritance behavior, get the `word-break` you set, so as to achieve automatic ellipsis.
