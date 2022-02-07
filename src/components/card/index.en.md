# Card

<code src="./demos/demo1.tsx"></code>

### Props

| Name            | Description                         | Type                                                            | Default |
| --------------- | ----------------------------------- | --------------------------------------------------------------- | ------- |
| title           | The left area of the header         | `ReactNode`                                                     | -       |
| extra           | The right area of the header        | `ReactNode`                                                     | -       |
| headerStyle     | The custom style of the header      | `React.CSSProperties`                                           | -       |
| headerClassName | The custom class name of the header | `string`                                                        | -       |
| bodyStyle       | The custom style of the body        | `React.CSSProperties`                                           | -       |
| bodyClassName   | The custom class name of the body   | `string`                                                        | -       |
| onClick         | The click event of the Card         | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |
| onHeaderClick   | The click event of the header area  | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |
| onBodyClick     | The click event of the body area    | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -       |
