---
category: Components
type: Components
chinese: 选择列表
english: Select List
----------------------



## 如何使用

* 数据源的例子,其中`name`、`id`必选,`disabled`可选,代表当前项不可选,`pinyin`、`py`用于搜索(暂时不公开)

```
const SelectorData = [
  {
    name:'浙江',
    pinyin:'zhejiang',
    py:'zj',
    id:'zj',
    disabled: true
  }, {
    name:'上海',
    pinyin:'shanghai',
    py:'sh',
    id:'sh'
  }, {
    name:'江苏',
    pinyin:'jiangsu',
    py:'js',
    id:'js'
  }, {
    name:'福建',
    pinyin:'fujian',
    py:'fj',
    id:'fj'
  }, {
    name:'山东',
    pinyin:'shandong',
    py:'sd',
    id:'sd'
  }, {
    name:'安徽',
    pinyin:'anhui',
    py:'ah',
    id:'ah'
  }];
```

## API

| 成员        | 说明           | 类型        |  可选值       | 默认值       |
|------------|----------------|--------------------|--------------|
| value    | 默认值        | Object,必选字段如```{name:'浙江',id:'zj',disabled: true}``` |    |  |
| data   | 数据源        | Array,元素为对象,如value |    |   |
| onChange  | 选中后的回调  | Function(value) | |  无  |
| needSearch（暂时不公开）    | 是否需要搜索功能        | Bollean | |  `false`  |
