---
category: Components
type: Components
chinese: 选择器
english: Picker
---

适用于数据有级联关系的选择器，比如`省市区选择`、`商品分类选择`。

## 如何使用

* 数据源的例子
其中,`value`、`label`、`children`三个属性必选,children可以是空数组,代表下一级没有数据

```
const data = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];
```


## API

| 成员        | 说明           | 类型        |  可选值       | 默认值       |
|------------|----------------|--------------------|--------------|
| data    | 数据源        | Array |    |   |
| value   | 值, 格式[value1, value2, value3], 对应数据源的N级value    | Array |    |  |
| format  | 格式化选中的值  | Function | | ```(values) => { return values.join(','); } ``` |
| cols    | 列数        | Number | `1`、`2`、`3`... |  `3`  |
| onChange | 选中后的回调   | Function(value) ,如果使用rc-form,一般不需要自己处理|   | |
| children| 通常是List.Item | Object |   |  List.Item  |
| okText  | 选中的文案 | String |   |  `确定`  |
| dismissText  | 取消选中的文案 | String |   |  `取消`  |
| title  | 大标题 | String |   |    |
| extra   | Children如果是List.Item,则是extra属性的默认值, 如果是其它的UI组件,则value或者extra属性会经过format方法处理后传给children的extra属性,用户需要自己实现这个属性 | String |   |  `请选择`  |
| style   | 样式 | Object |   |  无  |
