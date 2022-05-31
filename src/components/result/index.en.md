# Result

Feedback on the result of the previous operation.

## When to Use

It is used when there is an important operation that needs to inform the user of the processing result, and the feedback content is complex.

## Demos

<code src="./demos/demo1.tsx"></code>

## Result

### Props

| Name        | Description       | Type                                                       | Default |
| ----------- | ----------------- | ---------------------------------------------------------- | ------- |
| description | Description       | `ReactNode`                                                | ''      |
| icon        | Customized `icon` | `ReactNode`                                                | -       |
| status      | Status types      | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'` | -       |
| title       | Title             | `ReactNode`                                                | -       |
