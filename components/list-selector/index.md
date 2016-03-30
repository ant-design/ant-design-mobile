# List Selector

- category: Components
- chinese: 单选
- type: 表单

---

## 如何使用

* 数据源的例子,其中`name`、`pinyin`、`py`、`id`必选,`pinyin`、`py`用于搜索

```
const SelectorData = [
  {
    name:'浙江',
    pinyin:'zhejiang',
    py:'zj',
    id:'zj'
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
| value    | 默认值        | Array |    |  |
| data   | 数据源        | Array |    |  [] |
| onClick  | 选中后的回调  | Function | |  无  |
| needSearch    | 是否需要搜索功能        | Bollean | |  `true`  |