# Dialog

It is used for notification of important information or feedback of operation, with a small number of options for users
to operate.

## When to Use

When users need to process transactions, but do not want to jump to pages to interrupt the workflow, you can use Modal
to open a floating layer in the middle of the current page to carry the corresponding operations.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx" debug></code>

## Dialog

### Props

| Name              | Description                                                                                                                   | Type                                                       | Default     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ----------- |
| actions           | The list of the operation button, a secondary array can be passed in to realize multiple buttons side by side in the same row | `(Action \| Action[])[]`                                   | `[]`        |
| afterClose        | Callback after `Dialog` is completely closed                                                                                  | `() => void`                                               | -           |
| afterShow         | Triggered after fully displayed                                                                                               | `() => void`                                               | -           |
| bodyClassName     | `Dialog` content class name                                                                                                   | `string`                                                   | -           |
| bodyStyle         | `Dialog` content style                                                                                                        | `React.CSSProperties`                                      | -           |
| closeOnAction     | Whether to close after clicking the operation button                                                                          | `boolean`                                                  | `false`     |
| closeOnMaskClick  | Whether to support clicking the mask to close the dialog box                                                                  | `boolean`                                                  | `false`     |
| content           | The content of the Dialog                                                                                                     | `React.ReactNode`                                          | -           |
| destroyOnClose    | Unmount content when not visible                                                                                              | `boolean`                                                  | `false`     |
| disableBodyScroll | Whether to disable `body` scrolling                                                                                           | `boolean`                                                  | `true`      |
| forceRender       | Whether to render the `DOM` structure when hidden                                                                             | `boolean`                                                  | `false`     |
| getContainer      | The parent container of the custom dialog                                                                                     | `HTMLElement \| (() => HTMLElement) \| null`               | `null`      |
| header            | The top area                                                                                                                  | `React.ReactNode`                                          | -           |
| image             | The `url` of the picture                                                                                                      | `string`                                                   | -           |
| maskClassName     | `Dialog` mask class name                                                                                                      | `string`                                                   | -           |
| maskStyle         | `Dialog` mask style                                                                                                           | `React.CSSProperties`                                      | -           |
| onAction          | Triggered when the action button is clicked                                                                                   | `(action: Action, index: number) => void \| Promise<void>` | -           |
| onClose           | Triggered when closed                                                                                                         | `() => void`                                               | -           |
| stopPropagation   | Stop the propagation of some events.                                                                                          | `PropagationEvent[]`                                       | `['click']` |
| title             | The title of the Dialog                                                                                                       | `React.ReactNode`                                          | -           |
| visible           | To show or hide                                                                                                               | `boolean`                                                  | `false`     |

### Action

| Name      | Description                       | Type                          | Default |
| --------- | --------------------------------- | ----------------------------- | ------- |
| bold      | Whether the text is bold          | `boolean`                     | `false` |
| className | Class name of the action button   | `string`                      | -       |
| danger    | Whether in dangerous state or not | `boolean`                     | `false` |
| disabled  | Whether disabled state or not     | `boolean`                     | `false` |
| key       | The unique mark                   | `string \| number`            | -       |
| onClick   | Triggered on click                | `() => void \| Promise<void>` | -       |
| style     | Style of the action button        | `React.CSSProperties`         | -       |
| text      | The title                         | `React.ReactNode`             | -       |

## Imperative

You can use `Dialog` in an imperative way:

### Dialog.show

```ts | pure
const handler = Dialog.show(props)
```

You can directly open the dialog box by calling the `show` method on the `Dialog`. The type of the `props` parameter is
the same as the above table, but the `visible` prop is not supported.

When the dialog box is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following properties:

| Name  | Description         | Type         | Default |
| ----- | ------------------- | ------------ | ------- |
| close | To close the dialog | `() => void` | -       |

`show` is just a very basic method. In actual business, the following `alert` and `confirm` methods are more commonly
used:

### Dialog.alert

`alert` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return value
is not a controller object, but `Promise<void>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default |
| ----------- | -------------------------------------------- | ----------------------------- | ------- |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`  |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -       |

### Dialog.confirm

`confirm` accepts the same parameters as `show`, but does not support the `closeOnAction` `actions` prop. Its return
value is not a controller object, but `Promise<boolean>`.

In addition, it supports the following props:

| Name        | Description                                  | Type                          | Default    |
| ----------- | -------------------------------------------- | ----------------------------- | ---------- |
| cancelText  | The content of the cancel button             | `ReactNode`                   | `'Cancel'` |
| confirmText | The content of the confirm button            | `ReactNode`                   | `'Ok'`     |
| onCancel    | Triggered when the cancel button is clicked  | `() => void \| Promise<void>` | -          |
| onConfirm   | Triggered when the confirm button is clicked | `() => void \| Promise<void>` | -          |

It should be noted that for the Dialog created by **instructive**, ** will not perceive the re-rendering of the parent
component and the update of the state in it**, so the following writing is completely wrong:

```tsx
export default function App() {
  const [captcha, setCaptcha] = useState<string>("");
  const showCaptcha = () => {
    return Dialog.confirm({
      title: "SMS verification",
      content: (
        <div>
          <Input
            placeholder="Please enter verification code"
            value={captcha} // Updates to the captcha state in App will not be passed to the Dialog
            onChange={(v) => {
              setCaptcha(v)
            }}
          />
        </div>
      )
    });
  };
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  );
}
```

If you need to include a lot of complex states and logic in Dialog, you can use declarative syntax, or consider
encapsulating the internal state and logic as a separate component, see [#4762](https://github.com/ant-design/ant-design-mobile/issues/4762).

### Dialog.clear

You can directly close all dialogs by calling the `clear` method on `Dialog`. Usually, you can use it in router change
event to close all dialogs automatically without using dialog reference to close.
