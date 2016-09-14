---
order: 2
english: 更新日志
---

### 0.8.5

`2016-09-14`

- 修复 Picker 和 DatePicker `extra`设置在 ListItem 上不生效问题 #241
- 去除 Button  `size=small` 只在 `inline` 设置后生效的限制
- 修复 Button 组件在 pc 版本的 demo 里的按下效果 #244
- 优化 Picker / DatePicker 点击反馈效果 https://github.com/ant-design/ant-design-mobile/commit/adb5a45ae35e13f64d4f295dd328cf9da45aec57  #195
- 去除 Stepper 组件的 input 不能输入限制，并更改`readOnly`默认值 https://github.com/ant-design/ant-design-mobile/commit/8325f6444970559e465d71df625e81cbe57c0b85#commitcomment-19012543
- 优化 Drawer / Popup 等组件 demo，网站展示细节优化

### 0.8.3

`2016-09-09`

- `Checkbox` 修复同意协议这种场景下，label中有协议无法触发`onClick`的bug。
- `SearchBar` 优化动画效果。
- `Carousel` 修改为基于`nuka-carousel`。原有`card`模式不再提供，需自行定制。

ps: 目前`listview` 和 `refresh-control` 不兼容，正在修复中

### 0.8.2

`2016-09-07`

- 给`body`标签设置默认背景色，以及默认的`font-size`,`html`设置默认的`font-size`。
- `Grid`属性扩展，每行列数可配置，提供`renderItem`方法。
- 修复`Checkbox`、`Radio`样式细节以及兼容性问题。
- `SearchBar`输入框`Blur`状态时`placeholder`固定靠左对齐。
- `Menu`高度计算bugfix。

### 0.8.1

`2016-09-02`

- 修复并整理各弹出层类组件 z-index 顺序 https://github.com/ant-design/ant-design-mobile/commit/bb875c2a924f61cc03b8d013fd1a8f5ee8e22972
- Tab 增加禁止 swipeable 的功能 #209
- TabBar 更改为和 iOS 原生方式一致，保持 web 和 rn 统一，去掉 swipeable
- List组件 list-body 边框支持配置 https://github.com/ant-design/ant-design-mobile/commit/76760060cb5dfa5c9474b2174ee03db3c30b5197

### 0.8.0

`2016-08-31`
> UI 风格更换为 alipay 官方风格

- 修复 `Object.assign` 兼容问题
- Picker / DatePicker 添加 disabled 支持
- InputItem 和 TextareaItem API `format` 改为 `type`，移除原来type；修复 maxLength bug
- ListView 增加`useBodyScroll` API, IndexedList 支持分两步渲染
- Button `ghost`从原来的单独属性，变为`type`下的属性值，修复样式细节问题
- Modal `footer` 类型更改
- Dropdown 效果和 `ActionSheet.showActionSheetWithCustom` 效果集成到新增的`Popup`组件里；`ActionSheet.showActionSheetWithCustom` API 移除
- `ActionSheet.showShareActionSheetWithOptions`支持多行，`options`配置项支持二维数组，callback参数增加显示行序列
- `ActionSheet.showActionSheetWithOptions`/`ActionSheet.showShareActionSheetWithOptions` 的 `callback`支持返回 Promise
- ActionSheet react-native android 下新增`close` API，支持自定义内容下的编程关闭 ActionSheet
- Toast rn组件修复遮挡 NavBar 问题
- 修复 rn 组件离线图片找不到问题
- 官方网站展示优化，demo 分类优化，web demo 采用 rem 和页面 scale 缩放方案，达到页面高清效果

#### 新增 rn 组件
- Checkbox
- Carousel
- Radio
- Steps
- SearchBar
- SegmentedControl
- TabBar
- Tabs

#### 组件变更
- Timeline 移除
- Tooltip 移除
- Tabs 拆分为 SegmentedControl、TabBar、Tabs
- Tabs tabPosition => tabBarPosition, animation => animated

#### 组件更名
- FloatMenu => Popover
- Collapse => Accordion
- PageResult => Result
- TopNotice => NoticeBar
- Uploader => ImagePicker

## 0.7.6

`2016-08-12`

* `Tabs` `Object.assign`使用`object-assign`替代。

## 0.7.5

`2016-08-11`

* `List` 1px问题优化,`List`的容器设定了固定高度，`overflow`设置为`scroll`，`List.Item`的边框会消失。
* `Grid` 处理`Grid`的`icon`图片不是正方形的显示问题。

## 0.7.4

`2016-08-10`

* `List.Item` 解决`onClick`时组件`unmount`而同时在更新组件内部state引起的报错。
* `SearchBar` 修复在部分Android机型下宽度异常。

## 0.7.3

`2016-08-09`

* `ListView` 非 sticky 模式功能问题修复，并增加更多 demo （rn demo优化）
* `DatePicker` 修正并扩展 format 函数功能
* `InputNumber` `Dialog` `Menu` `ActivityIndicator` `Checkbox` 等细节优化

## 0.7.2

`2016-08-02`

* 修复 iconfont 重复引用问题；
* 各组件动画设置统一到`components/style/anim.less`里；
* 网站的移动版展示优化；

## 0.7.1

`2016-08-01`

* `Toast`组件`z-index`优化；
* 纠正文档中错误的 `DatePicker` value / minDate / maxDate 类型，修复 rn 点击不能打开问题;
* `ActionSheet` 分享功能的 icon 样式优化，rn demo 展示优化；
* 工具增加`babel-runtime`支持；

## 0.7.0

`2016-07-29`

* 新增 `Tooltips`、`Card`、`Pagination`、`Loading`、`Table` 组件；
* `ListAction` 更名为 `SwipeAction`；
* `WhiteSpace` 和 `WingBlank` 组件的 mode 属性修改为 size;
* `InputItem`、`TextareaItem` 的左边label字数可以配置，有默认值;
* `DatePicker` value 类型更改;
* typescript 支持；
* 完成 30+ 组件 对应的 react native 组件；demo app beta版二维码：

  ![demo app](https://zos.alipayobjects.com/rmsportal/qYVpyTZzcWMGerJ.png)

* demo app 支持扫码预览 web & react native 项目；
* [官方网站](http://mobile.ant.design)优化；

## 0.6.0

`2016-06-20`

- 新增 `ListView`、`ListAction``Grid` `Menu`、`Uploader`、`RefreshControl`组件；
- `ListPicker` / `ListDatePicker` 组件更名为 Picker / DatePicker；
- 删除 `SelectList` 组件（可使用 `Radio` 组件代替），或者使用更强大的`Menu`组件；
- 更新`Flex`，全部支持flex属性。（ps：UC内核对flex布局支持不完善）；
- 更新`List.Item`、`InputItem`、`TextareaItem`的报错样式；
- `InputItem`支持数字输入(`format="number"`)；
- `Tabs` 组件新增 tabbar 形式；
- `TopNotice` 当mode 为 `closable`时, 则自动销毁;
- `Steps`组件支持size为`pointer`的点状样式;
- 提供`List`、`Button`、`Flex`、`WhiteSpace`、`WingBlank`五个UI组件；

## 0.5.0

`2016-05-16`

发布全新的基于 Ant Design 设计规范的版本。
