# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时。
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Switch

### 属性

| 参数                   | 说明                                                    | 类型                                      | 默认值  |
| ---------------------- | ------------------------------------------------------- | ----------------------------------------- | ------- |
| beforeChange（已弃用） | 变化前执行（已弃用，推荐使用 `onChange` 属性）          | `(val: boolean) => Promise<void>`         | -       |
| checked                | 指定当前是否打开                                        | `boolean`                                 | `false` |
| checkedText            | 选中时的内容                                            | `ReactNode`                               | -       |
| defaultChecked         | 初始是否打开                                            | `boolean`                                 | `false` |
| disabled               | 禁用状态                                                | `boolean`                                 | `false` |
| loading                | 加载状态                                                | `boolean`                                 | `false` |
| onChange               | 变化时的回调函数，当返回 Promise 时，会自动显示加载状态 | `(val: boolean) => void \| Promise<void>` | -       |
| uncheckedText          | 非选中时的内容                                          | `ReactNode`                               | -       |

### CSS 变量

| 属性            | 说明     | 默认值                     |
| --------------- | -------- | -------------------------- |
| --border-width  | 边框宽度 | `2px`                      |
| --checked-color | 填充颜色 | `var(--adm-color-primary)` |
| --height        | 高度     | `31px`                     |
| --width         | 宽度     | `51px`                     |

## FAQ

### 如何处理异步 `onChange` 中的异常？

`onChange` 事件支持返回一个 Promise，当 Promise 开始时，Switch 会自动进入加载状态，而当 Promise 完成或失败时，Switch 会自动退出加载状态。一般情况下，这满足大多数项目的需求。

但是当 Promise 失败时，Switch 并不会吃掉报错，而是会把这个错误对象重新抛出来，这是预期行为，如果你想自己拦截掉一些错误，避免他们被抛出，可以使用 `try/catch` 包裹 `onChange` 中的处理逻辑，例如：

```tsx
async function onChange(val: boolean) {
  try {
    await doSomething();
  } catch (e) {
    // handle or ignore error
  }
}
```
