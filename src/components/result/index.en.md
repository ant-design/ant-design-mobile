# Result

Feedback on the result of the previous operation.

## When to Use

It is used when there is an important operation that needs to inform the user of the processing result, and the feedback content is complex.

## Demos

<code src="./demos/demo1.tsx"></code>

## Result

### Props

| Name                   | Description                                                                                                     | Type                                                                                | Default  |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| description            | Description                                                                                                     | `ReactNode`                                                                         | -        |
| icon                   | Customized `icon`                                                                                               | `ReactNode`                                                                         | -        |
| status                 | Status types                                                                                                    | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning'`                          | `'info'` |
| title                  | Title                                                                                                           | `ReactNode`                                                                         | -        |
| details                | Details, More than three auto collapse                                                                          | `ResultPageDetail[]`                                                                | -        |
| children               | Content, Only the incoming card component is supported                                                          | `Card`                                                                              | -        |
| primaryButtonValue     | The text of the main operation button. If it is undefined, null or empty, the button will not be displayed      | `ReactNode`                                                                         | -        |
| onPrimaryButtonClick   | Event after clicking the main operation button                                                                  | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -        |
| secondaryButtonValue   | The text of the auxiliary operation button. If it is undefined, null or empty, the button will not be displayed | `ReactNode`                                                                         | -        |
| onSecondaryButtonClick | Event after clicking the auxiliary operation button                                                             | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -        |
