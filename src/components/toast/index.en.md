# Toast

Lightweight feedback on the result of an operation that disappears without user action.

## When to Use

It is suitable for use when the change of page content cannot directly reflect the operation result.

## Demos

<code src="./demos/demo1.tsx"></code>

## Toast

### Imperative API

`Toast` only supports Imperative calls.

### Toast.show

The `show` method supports passing in a `props` object, which contains the following props:

| Name            | Description                                                        | Type                                                  | Default         |
| --------------- | ------------------------------------------------------------------ | ----------------------------------------------------- | --------------- |
| afterClose      | Callback after `Toast` is completely closed                        | `() => void`                                          | -               |
| content         | `Toast` text content                                               | `React.ReactNode`                                     | -               |
| duration        | Prompt duration, if it is `0`, it will not be closed automatically | `number`                                              | `2000`          |
| getContainer    | The customized parent container of the light prompt                | `HTMLElement \| (() => HTMLElement) \| null`          | `document.body` |
| icon            | `Toast` icon                                                       | `'success' \| 'fail' \| 'loading' \| React.ReactNode` | -               |
| maskClassName   | `Toast` mask class name                                            | `string`                                              | -               |
| maskClickable   | Whether allowed to click the background                            | `boolean`                                             | `true`          |
| maskStyle       | `Toast` mask style                                                 | `React.CSSProperties`                                 | -               |
| position        | Vertical display position                                          | `'top' \| 'bottom' \| 'center'`                       | `'center'`      |
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
