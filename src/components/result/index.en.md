# Result

Feedback on the result of the previous operation.

## When to use

It is used when there is an important operation that needs to inform the user of the processing result, and the feedback content is complex.

<code src="./demos/demo1.tsx"></code>

### Props

| Name        | Description       | Type                                                       | Default |
| ----------- | ----------------- | ---------------------------------------------------------- | ------- |
| status      | Status types      | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'` | -       |
| title       | Title             | `ReactNode`                                                | -       |
| description | Description       | `ReactNode`                                                | ''      |
| icon        | Customized `icon` | `ReactNode`                                                | -       |
