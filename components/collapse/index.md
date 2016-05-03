---
category: Components
chinese: 折叠面板
type: 展示
english: Collapse
-----------------




## 何时使用


## API

### Collapse

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| prefixCls    |         | Object |  无  |
| style    |         | Object | 无  |
| activeKey    |  current active Panel key   | Array<String>/String |   The first panel key  |
| defaultActiveKey    |  default active key   | Array<String>/String |   Null  |
| accordion    | accordion mode, default is null, is collapse mode | Boolean | false  |
| onChange      |   called when collapse Panel is changed   | Function(key) |  noop  |

### Collapse.Panel

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| header      |   header content of Panel   | String or node | |