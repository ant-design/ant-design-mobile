# Toast

<code src="./demos/index.tsx"></code>

## Imperative API

`Toast` only supports Imperative calls.

### Toast.show

The `show` method supports passing in a `props` object, which contains the following props:

| Name          | Description                                                        | Type                                                  | Default         |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------------------- | --------------- |
| afterClose    | callback after `Dialog` is completely closed                       | `() => void`                                          | -               |
| maskStyle     | `Toast` mask style                                                 | `React.CSSProperties`                                 | -               |
| maskClassName | `Toast` mask class name                                            | `string`                                              | -               |
| maskClickable | whether allowed to click the background                            | `boolean`                                             | `true`          |
| content       | `Toast` text content                                               | `React.ReactNode`                                     | -               |
| icon          | `Toast` icon                                                       | `'success' \| 'fail' \| 'loading' \| React.ReactNode` | -               |
| duration      | prompt duration, if it is `0`, it will not be closed automatically | `number`                                              | `2000`          |
| position      | vertical display position                                          | `'top' \| 'bottom' \| 'center'`                       | `'center'`      |
| getContainer  | the customized parent container of the light prompt                | `HTMLElement \| (() => HTMLElement) \| undefined`     | `document.body` |

> Only one light reminder is allowed to pop up at the same time, and the newly appeared `Toast` will squeeze out the previously displayed `Toast`.

You can also pass in a string directly, and `Toast.show` will automatically use it as `content`.

### Toast.clear

Turn off `Toast` in all displays.
