# Segmented

This component is available since `antd-mobile@5.38.0`.

## When To Use

- When displaying multiple options and user can select a single option;
- When switching the selected option, the content of the associated area changes.

## Demos

<code src="./demos/demo1.tsx"></code>

## Segmented

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| block | Option to fit width to its parent\'s width | boolean | false |
| defaultValue | Default selected value | string \| number |  |
| disabled | Disable all segments | boolean | false |
| onChange | The callback function that is triggered when the state changes | function(value: string \| number) |  |
| options | Set children optional | string\[] \| number\[] \| SegmentedItemType\[] | [] |
| value | Currently selected value | string \| number |  |

### SegmentedItemType

| Property  | Description                      | Type             | Default |
| --------- | -------------------------------- | ---------------- | ------- |
| label     | Display text for Segmented item  | ReactNode        | -       |
| value     | Value for Segmented item         | string \| number | -       |
| icon      | Display icon for Segmented item  | ReactNode        | -       |
| disabled  | Disabled state of segmented item | boolean          | false   |
| className | The additional css class         | string           | -       |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| Name | Description | Default |
| ------------------- | ---------------------- | ----------------------- |
| --segmented-background | Background color | `var(--adm-color-fill-content)` |
| --segmented-item-color | Text color of segment item | `var(--adm-color-text-secondary)` |
| --segmented-item-selected-background | Background color of selected segment | `var(--adm-color-background)` |
| --segmented-item-selected-color | Text color of selected segment item | `var(--adm-color-text)` |
| --segmented-item-disabled-color | Text color of disabled segment item | `var(--adm-color-weak)` |
