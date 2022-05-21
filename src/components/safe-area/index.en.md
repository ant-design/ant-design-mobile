# SafeArea

Provides adaptive margin adjustment in full screen.

## When to Use

When the web page is displayed in full screen, automatic adaptation can be achieved with the help of the safe area.

## Note

The SafeArea component is used to provide adaptive margin adjustment in full screen. Its underlying implementation is actually `env(safe-area-inset-xxx)`.

When your web page is displayed in full screen, you can use it to achieve automatic adaptation. The blue part in the figure below is the area occupied by the top SafeArea, and the orange part is the area occupied by the bottom SafeArea.

<img alt="safe-area-top" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ATR3R5FOt9gAAAAAAAAAAAAAARQnAQ" width="500px" />

<img alt="safe-area-bottom" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*M9vOS5mUT_AAAAAAAAAAAAAAARQnAQ" width="500px" />

It should be noted that the demo below cannot be seen in the desktop browser:

## Demos

<code src="./demos/demo1.tsx"></code>

## SafeArea

### Props

| Name     | Description               | Type                | Default |
| -------- | ------------------------- | ------------------- | ------- |
| position | Position of the safe area | `'top' \| 'bottom'` | -       |
