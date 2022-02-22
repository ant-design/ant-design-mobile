# Toast

<code src="./demos/demo1.tsx"></code>

## Imperative API

`Toast` only supports Imperative calls.

### Toast.show

The `show` method supports passing in a `props` object, which contains the following props:

| Name            | Description                                                        | Type                                                  | Default         |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------- | --------------- |
| afterClose      | Callback after `Toast` is completely closed                        | `() => void`                                          | -               |
| maskStyle       | `Toast` mask style                                                 | `React.CSSProperties`                                 | -               |
| maskClassName   | `Toast` mask class name                                            | `string`                                              | -               |
| maskClickable   | Whether allowed to click the background                            | `boolean`                                             | `true`          |
| content         | `Toast` text content                                               | `React.ReactNode`                                     | -               |
| icon            | `Toast` icon                                                       | `'success' \| 'fail' \| 'loading' \| React.ReactNode` | -               |
| duration        | Prompt duration, if it is `0`, it will not be closed automatically | `number`                                              | `2000`          |
| position        | Vertical display position                                          | `'top' \| 'bottom' \| 'center'`                       | `'center'`      |
| getContainer    | The customized parent container of the light prompt                | `HTMLElement \| (() => HTMLElement) \| null`          | `document.body` |
| stopPropagation | Stop the propagation of some events.                               | `PropagationEvent[]`                                  | `['click']`     |

> Only one light reminder is allowed to pop up at the same time, and the newly appeared `Toast` will squeeze out the previously displayed `Toast`.

You can also pass in a string directly, and `Toast.show` will automatically use it as `content`.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description                  | Type         | Default |
| ----- | ---------------------------- | ------------ | ------- |
| close | To close the current `Toast` | `() => void` | -       |

### Toast.clear

Turn off `Toast` in all displays.

### Toast.config

Methods for global configuration. Support `duration`, `position` and `maskClickable`. The configuration method is as follows:

```ts
Toast.config({ duration: 1000, position: 'top' })
```
