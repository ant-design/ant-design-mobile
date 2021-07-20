# Tabs 标签页

<code src="./demos/index.tsx">

## API

### Tabs

| 属性             | 说明                                         | 类型                   | 默认值     |
| ---------------- | -------------------------------------------- | ---------------------- | ---------- |
| activeKey        | 当前激活 tab 面板的 key                      | string                 | -          |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | string                 | 第一个面板 |
| onChange         | 切换面板的回调                               | function(activeKey) {} | -          |

### Tabs.TabPane

| 属性        | 说明                      | 类型      | 默认值 |
| ----------- | ------------------------- | --------- | ------ |
| key         | 对应 activeKey            | string    | -      |
| tab         | 选项卡头显示文字          | ReactNode | -      |
| forceRender | 被隐藏时是否渲染 DOM 结构 | boolean   | false  |
