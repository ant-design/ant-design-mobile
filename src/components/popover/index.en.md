# Popover

Click on the element to pop up a bubble menu.

## When to Use

Navigation applicable to functions can only be evoked by the icons on the navigation bar, and is usually used to accommodate low-frequency functions.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo4.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Popover

### Props

| Name            | Description                                                                                  | Type                                                                                                                                                                 | Default               |
| --------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| children        | The element that triggered the popover                                                       | `React.ReactElement`                                                                                                                                                 | -                     |
| content         | The content of the Popover                                                                   | `React.ReactNode`                                                                                                                                                    | -                     |
| defaultVisible  | Whether to show or hide by default                                                           | `boolean`                                                                                                                                                            | `false`               |
| destroyOnHide   | When hiding, whether to destroy the content of `tooltip`                                     | `boolean`                                                                                                                                                            | `false`               |
| getContainer    | The floating layer renders the parent node, which would be rendered on the `body` by default | `() => HTMLElement`                                                                                                                                                  | `() => document.body` |
| mode            | Set bright color mode or black mode                                                          | `'light' \| 'dark'`                                                                                                                                                  | `'light'`             |
| onVisibleChange | Callback when the visible prop is changed                                                    | `(visible: boolean) => void`                                                                                                                                         | -                     |
| placement       | The position of the Popover                                                                  | `'top' \| 'top-start' \| 'top-end' \| 'right' \| 'right-start' \| 'right-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end'` | `'top'`               |
| stopPropagation | Stop the propagation of some events.                                                         | `PropagationEvent[]`                                                                                                                                                 | `['click']`           |
| trigger         | Event to trigger                                                                             | `'click'`                                                                                                                                                            | -                     |
| visible         | Whether to display pop-up content in controlled mode                                         | `boolean`                                                                                                                                                            | -                     |

Prior to version 5.5.0, the optional values for `placement` were:

`top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom`

In 5.5.0 and later versions, the writing of `placement` has undergone some adjustments, becoming:

`top top-start top-end right right-start right-end bottom bottom-start bottom-end left left-start left-end`

In order to maintain compatibility, we still support the use of the old version of the writing method, but if you see the prompt here, please try to use the new version of the writing method.

### CSS Variables

| Name      | Description                      | Default | Global                  |
| --------- | -------------------------------- | ------- | ----------------------- |
| --z-index | `z-index` of the popover element | `1030`  | `--adm-popover-z-index` |

### Ref

| Name    | Description                      | Type         |
| ------- | -------------------------------- | ------------ |
| hide    | Hide the Popover                 | `() => void` |
| show    | Show the Popover                 | `() => void` |
| visible | Whether the Popover is diplaying | `boolean`    |

## Popover.Menu

### Props

Except for `content`, all other attributes are inherited from `Popover`, the unique attributes are as follows:

| Name     | Description                                                | Type                     | Default |
| -------- | ---------------------------------------------------------- | ------------------------ | ------- |
| actions  | Menu list, used when the pop-up content is a standard menu | `Action[]`               | -       |
| onAction | Callback of the selected menum, when the menu list is used | `(item: Action) => void` | -       |

### Action

| Name     | Description                                                | Type               | Default                   |
| -------- | ---------------------------------------------------------- | ------------------ | ------------------------- |
| disabled | Whether disabled                                           | `boolean`          | `false`                   |
| icon     | The icon of the menu item                                  | `ReactNode`        | `null`                    |
| key      | The unique identifier of the menu, the default is `index`  | `string \| number` | `actions` array's `index` |
| onClick  | Triggered on click                                         | `() => void`       | -                         |
| text     | Menu list, used when the pop-up content is a standard menu | `ReactNode`        | -                         |

### CSS Variables

Same as Popover.

### Ref

Same as Popover.

## FAQ

### Why the Popover not show in some cases?

Click Popover will trigger two click events, one for label, one for input.

```jsx
<label>
  <Popover content='hello' trigger='click'>
    <span>label</span>
  </Popover>
  <input />
</label>
```

Default behavior can be prevented with `e.preventDefault()`.

```jsx
<label>
  <Popover content='hello' trigger='click'>
    <span onClick={e => e.preventDefault()}>label</span>
  </Popover>
  <input />
</label>
```

### What if the warning `findDOMNode is deprecated in StrictMode.` appears in the browser console?

If React StrictMode is enabled in your project, you may encounter the following warning:

```text
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wrapper which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/ link/strict-mode-find-node
```

Don't panic, this is expected behavior, because we haven't found a better alternative, so we can only continue to use the deprecated `findDOMNode` API. Please just ignore this error.
