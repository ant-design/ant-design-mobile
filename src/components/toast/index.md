# Toast 轻提示

<code src="./demos/index.tsx" />

# API

Toast 为单例，同一时间只允许弹出一个轻提示，暂不支持多例模式

### Toast.show

> show 方法的返回值是 updateConfig 方法，可以更新以下属性:

| 属性          | 说明                                | 类型                                            | 默认值        |
| ------------- | ----------------------------------- | ----------------------------------------------- | ------------- |
| afterClose    | Dialog 完全关闭后的回调             | () => void                                      | -             |
| maskStyle     | Toast 遮罩样式                      | React.CSSProperties                             | -             |
| maskClassName | Toast 遮罩类名                      | string                                          | -             |
| maskClickable | 是否允许背景点击                    | boolean                                         | true          |
| content       | toast 文本内容                      | React.ReactNode                                 | -             |
| icon          | toast 图标                          | React.ReactNode                                 | -             |
| duration      | 提示持续时间，若为 0 则不会自动关闭 | number                                          | 2000          |
| position      | 垂直方向显示位置                    | 'top' \| 'bottom' \| 'center'                   | 'center'      |
| getContainer  | 自定义轻提示的父容器                | HTMLElement \| (() => HTMLElement) \| undefined | document.body |

### Toast.loading

默认包含一个加载中图标，其余参数和 show 相同

### Toast.success

默认包含一个成功的图标，其余参数和 show 相同

### Toast.fail

默认包含一个失败的图标，其余参数和 show 相同

### Toast.clear

关闭显示中的 Toast
