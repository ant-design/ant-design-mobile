# ResultPage <Experimental></Experimental>

Feedback on the result of the previous operation with an entire page.

## When to Use

It is used when there is a very important operation that needs to inform the user of the processing result, and the feedback content is complex.

## Demos

### Basic use

<code src="./demos/demo1.tsx"></code>

### Show detailed data

More than three lines will be automatically collapsed.
<code src="./demos/demo2.tsx"></code>

### Use with Card

Using with [ResultPage.Card](#resultpagecard) or [Card](/components/card).
<code src="./demos/demo3.tsx"></code>

### Bottom buttons

<code src="./demos/demo4.tsx"></code>

### Custom use

<code src="./demos/demo5.tsx"></code>

## ResultPage

### Props

```typescript | pure
interface ResultPageDetail {
  label: ReactNode;
  value: ReactNode;
  bold: boolean; // When the `bold` field is `true`, the text will be bolded.
}

type ResultPageDetails = ResultPageDetail[]
```

| Name                   | Description                                                                                                                              | Type                                                                                | Default  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | -------- |
| children               | Page content, it is recommended to only pass in the [Card](/components/card) component. [Refer to here for specific use](#use-with-card) | [Card](/components/card)                                                            | -        |
| description            | Description                                                                                                                              | `ReactNode`                                                                         | -        |
| details                | Details, more than three automatic folds                                                                                                 | `ResultPageDetail[]`                                                                | -        |
| icon                   | Customized `icon`                                                                                                                        | `ReactNode`                                                                         | -        |
| onPrimaryButtonClick   | Event after the primary button is clicked                                                                                                | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -        |
| onSecondaryButtonClick | Event after the secondary button is clicked                                                                                              | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \|Promise<void>`  | -        |
| primaryButtonText      | The text of the primary button, the button is not displayed when it is `undefined`, `null` or the empty character                        | `ReactNode`                                                                         | -        |
| secondaryButtonText    | The text of the secondary button, the button is not displayed when it is `undefined`, `null` or the empty character                      | `ReactNode`                                                                         | -        |
| status                 | Status types                                                                                                                             | `'success' \| 'error' \| 'info' \| 'waiting' \| 'warning' `                         | `'info'` |
| title                  | Title                                                                                                                                    | `ReactNode`                                                                         | -        |

### CSS Variables

| Name                    | Description                  | Default                    |
| ----------------------- | ---------------------------- | -------------------------- |
| --head-background-color | background color of the head | `var(--adm-color-primary)` |

## ResultPage.Card

Provides a white, no `padding` card, and you can control its style yourself.

| Name     | Description         | Type      | Default |
| -------- | ------------------- | --------- | ------- |
| children | content of the Card | ReactNode | -       |
