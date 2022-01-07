# List

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

## Props

### List

| Name   | Description                          | Type                  | Default     |
| ------ | ------------------------------------ | --------------------- | ----------- |
| header | The title of list.                   | `ReactNode`           | -           |
| mode   | Support two modes: default and card. | `'default' \| 'card'` | `'default'` |

### List.Item

| Name           | Description                                                                                                 | Type                            | Default                                                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| title          | The title area in the upper middle of the list item.                                                        | `ReactNode`                     | -                                                                                    |
| children       | The main content area in the middle of the list item.                                                       | `ReactNode`                     | -                                                                                    |
| description    | The description area in the lower middle of the list item.                                                  | `ReactNode`                     | -                                                                                    |
| prefix         | The left area of the list item.                                                                             | `ReactNode`                     | -                                                                                    |
| extra          | The right area of the list item.                                                                            | `ReactNode`                     | -                                                                                    |
| clickable      | Is the list item clickable.                                                                                 | `boolean`                       | Defaults to `true` when the `onClick` prop is present, otherwise defaults to `false` |
| arrow          | Whether to show the arrow icon on the right side, also supports passing `ReactNode` to customize the icon.  | `boolean \| ReactNode`          | same as `clickable`                                                                  |
| disabled       | Is the list item disabled                                                                                   | `boolean`                       | `false`                                                                              |
| onClick        | The click event of the list item. When the `onClick` property is set, the list item will have click effect. | `(e: React.MouseEvent) => void` | -                                                                                    |
| --padding-left | Left padding of the list.                                                                                   | `12px`                          |

## CSS Variables

### List

| Name                      | Description                                                                                     | Default                             |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| --prefix-width            | Width of the prefix part.                                                                       | `auto`                              |
| --active-background-color | The background color when clicked.                                                              | `var(--adm-border-color)`           |
| --align-items             | The [align-item](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) of the list item | `center`                            |
| --border-inner            | Border style of the list item bottom                                                            | `solid 1px var(--adm-border-color)` |
| --border-top              | Border style of the list top                                                                    | `solid 1px var(--adm-border-color)` |
| --border-bottom           | Border style of the list bottom                                                                 | `solid 1px var(--adm-border-color)` |

### List.Item

Support following css variables in List: `--prefix-width`, `--active-background-color` and `--align-items`
