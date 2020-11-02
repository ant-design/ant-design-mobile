---
title: Stepper
nav:
  title: Components
  path: /components
---

`Stepper` can be used to increase or decrease value step by step

### DEMO

<code src="./demo/basic.tsx" />

### Single

<code src="./demo/single.tsx" />

### Rule

- When you want to make small adjustments to the value, you can use `Stepper`. eg: Adjust the annual return from 4.00% to 4.05%.


### API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min     | Specifies the minimum value   | Number | -Infinity        |
| max     | Specifies the maximum value       | Number      | Infinity           |
| value     | Specifies the value of the `Stepper`       | Number      |            |
| step     | Specifies the legal number intervals  | Number or String      |  1      |
| defaultValue     | Specifies the defaultValue of the `Stepper`       | Number      |            |
| onChange     | Called when value of the `Stepper` changed      | (): void      |            |
| onFocus     | Called when focus      | (e: React.SyntheticEvent\<HTMLInputElement\>) => void      |            |
| onBlur     | Called when blur      | (e: React.SyntheticEvent\<HTMLInputElement\>) => void      |            |
| disabled     | Specifies the `Stepper` should be disabled      | Boolean      |      false      |
| readOnly     | Specifies the `Stepper` is read only       | Boolean      |      false      |
| showNumber  | Whether to display number value  | Boolean      |      false      |
