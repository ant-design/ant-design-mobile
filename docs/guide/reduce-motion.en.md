# Reduce Motion <Experimental></Experimental>

In some scenarios, you may not want various complex animation effects on the interface, so you can control the animation effects of components through the `reduceMotion` and `restoreMotion` functions provided by antd-mobile.

When you call `reduceMotion()`, the antd-mobile component will skip the animation as much as possible.

```jsx
import { reduceMotion } from 'antd-mobile'

reduceMotion()
```

It should be noted that `reduceMotion()` will only control the components provided by antd-mobile, and will not affect your own components in your business project.

When you want to restore the animation effect, you can call `restoreMotion()`.

## Demos

<code src="../../src/utils/demos/reduce-motion/demo1.tsx"></code>

<code src="../../src/utils/demos/reduce-motion/demo2.tsx"></code>

## Follow System Settings

In some cases, you may want the animation compatibility to follow the system settings directly, such as the "Accessibility - Compatible Motion Effects" setting under iOS:

<img alt="reduce-motion-en" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*MiDURJ7_vAwAAAAAAAAAAAAAARQnAQ" width="500px" />

Then you can use it with [react-reduce-motion](https://github.com/infiniteluuke/react-reduce-motion):

```jsx
import { useReducedMotion } from 'react-reduce-motion'
import { reduceMotion, restoreMotion } from 'antd-mobile'

const MyApp = () => {
  const prefersReducedMotion = useReducedMotion()
  React.useEffect(() => {
    if (prefersReducedMotion) {
      reduceMotion()
    } else {
      restoreMotion()
    }
  }, [prefersReducedMotion])
  // ...
}
```
