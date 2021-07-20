# TabBar 标签栏

<code src="./demos/index.tsx">

## API

### TabBar

| 属性             | 说明                                           | 类型                   | 默认值      |
| ---------------- | ---------------------------------------------- | ---------------------- | ----------- |
| activeKey        | 当前激活 item 的 key                           | string                 | -           |
| defaultActiveKey | 初始化选中 item 的 key，如果没有设置 activeKey | string                 | 第一个 item |
| onChange         | 切换面板的回调                                 | function(activeKey) {} | -           |

### TabBar.Item

| 属性  | 说明           | 类型      | 默认值 |
| ----- | -------------- | --------- | ------ |
| key   | 对应 activeKey | string    | -      |
| title | 标题           | ReactNode | -      |
| icon  | 图标           | ReactNode | -      |
