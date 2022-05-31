# 减弱动效 <Experimental></Experimental>

在一些场景下，你可能并不希望界面上存在各种复杂的动画效果，那么可以通过 antd-mobile 提供的 `reduceMotion` 和 `restoreMotion` 函数，来控制组件的动画效果。

当你调用 `reduceMotion()` 之后，antd-mobile 的组件会尽可能的跳过动画效果。

```jsx
import { reduceMotion } from 'antd-mobile'

reduceMotion()
```

需要注意的是，`reduceMotion()` 只会控制 antd-mobile 提供的组件，不会影响你业务项目中自己的组件。

当你希望恢复动画效果时，可以调用 `restoreMotion()`。

## 示例

<code src="../../src/utils/demos/reduce-motion/demo1.tsx"></code>

<code src="../../src/utils/demos/reduce-motion/demo2.tsx"></code>

## 跟随系统设置

一些情况下，你可能会希望动画是否兼容直接跟随系统设置，例如 iOS 下的 "辅助功能 - 兼容动态效果" 设置：

<img alt="reduce-motion-zh" src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*LVkBSrQkji4AAAAAAAAAAAAAARQnAQ" width="500px" />

那么可以配合 [react-reduce-motion](https://github.com/infiniteluke/react-reduce-motion) 使用：

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
