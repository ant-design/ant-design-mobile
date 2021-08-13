# Dialog 弹窗

<code src="./demos/index.tsx"></code>

# API

### Dialog.show

> show 方法的返回值是用来关闭弹窗的方法

| 属性          | 说明                                              | 类型                                                                              | 默认值        |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------------------- | ------------- |
| afterClose    | Dialog 完全关闭后的回调                           | () => void                                                                        | -             |
| headerImage   | 顶部图片 url                                      | string                                                                            | -             |
| waitImageLoad | 是否等待图片预加载完成后再弹出对话框              | boolean                                                                           | true          |
| bodyStyle     | Dialog 内容样式                                   | React.CSSProperties                                                               | -             |
| bodyClassName | Dialog 内容类名                                   | string                                                                            | -             |
| maskStyle     | Dialog 遮罩样式                                   | React.CSSProperties                                                               | -             |
| maskClassName | Dialog 遮罩类名                                   | string                                                                            | -             |
| title         | 对话框标题                                        | React.ReactNode                                                                   | -             |
| content       | 对话框提示文字                                    | React.ReactNode                                                                   | -             |
| cancelText    | 取消的文字                                        | React.ReactNode                                                                   | '我知道了'    |
| cancelProps   | 取消按钮的状态                                    | { loading?: boolean; disabled?: boolean }                                         | -             |
| onCancel      | 点击取消的回调，当返回 false 时，会阻止对话框关闭 | (e: React.MouseEvent) => void \| Boolean \| Promise\<Boolean\> \| Promise\<void\> | -             |
| okText        | 确认的文字                                        | React.ReactNode                                                                   | '确认'        |
| okProps       | 确认按钮的状态                                    | { loading?: boolean; disabled?: boolean }                                         | -             |
| onOk          | 点击确认的回调，当返回 false 时，会阻止对话框关闭 | (e: React.MouseEvent) => void \| Boolean \| Promise\<Boolean\> \| Promise\<void\> | -             |
| maskClosable  | 是否支持点击遮罩关闭对话框                        | boolean                                                                           | false         |
| getContainer  | 自定义对话框的父容器                              | HTMLElement \| (() => HTMLElement) \| undefined                                   | document.body |

### Dialog.confirm

confirm 接受的参数同 show, 返回值为 Promise\<boolean>, 可通过布尔值判断点击了确定(true)或取消(false)

### Dialog.alert

alert 可创建只有取消功能的对话框，返回 Promise\<React.MouseEvent>
