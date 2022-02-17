# ProgressCircle 进度圈

<code src="./demos/demo1.tsx"></code>

### 属性

| 参数     | 说明       | 类型              | 默认值 |
| -------- | ---------- | ----------------- | ------ |
| percent  | 百分比     | `number`          | `0`    |
| children | 自定义信息 | `React.ReactNode` | -      |

### CSS 变量

| 属性          | 说明                       | 默认值                     | 全局变量                            |
| ------------- | -------------------------- | -------------------------- | ----------------------------------- |
| --size        | 画布的宽高，仅支持 px 单位 | `50px`                     | `--adm-progress-circle-size`        |
| --track-width | 线条宽度，仅支持 px 单位   | `3px`                      | `--adm-progress-circle-track-width` |
| --track-color | 轨道的颜色                 | `#e5e5e5`                  | `--adm-progress-circle-track-color` |
| --fill-color  | 填充部分的颜色             | `var(--adm-color-primary)` | `--adm-progress-circle-fill-color`  |

## 常见问题

### 关于使用 rem 的重要提醒

ProgressCircle 仅支持 `px` 单位，因为在 Safari 下非 `px` 单位会出现样式 bug。

所以如果你的项目中使用了 rem 布局，那么编译时对样式的预处理会导致默认的 `--size` 和 `--track-width` 的单位变为 `rem`，从而很可能在 iOS 设备中会出现 bug。解决方法是在项目中手动将 `--size` 和 `--track-width` 设置回 `px` 单位。
