---
order: 3
title: 更新日志
timeline: true
toc: false
---

`antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

### 2.0.0

`2017-xx-xx`

- **Feature**

  - [Web] `DatePicker`新增 API `use12Hours`, 支持 12 小时制 ([#1578](https://github.com/ant-design/ant-design-mobile/issues/1578))
  - [Web] `Button` 组件分别对应各个 type 新增各自的 disabled 状态样式
  - [Web] `Grid` 新增 `square` api, 支持高度自适应模式
  - [Web] `Grid` 新增 `activeClassName`, `activeStyle` api, 支持自定义触摸反馈样式
  - [Web] `Modal.alert / Modal.prompt / Modal.opeartion` 新增可选参数 `platform`
  - [Web] `ListView`(beta.3) 新增 pull-up 功能
  - [Web/RN] 新增 `DatePickerView` 组件，支持更灵活的时间选择器用法 ([#1232](https://github.com/ant-design/ant-design-mobile/issues/1232))
  - [Web/RN] 新增 `Calendar` 组件，支持跨日期的日期时间选择 ([#1610](https://github.com/ant-design/ant-design-mobile/issues/1610))

- **Break Change**

  - [Web] "高清方案" / "SVG Icon" 从“内置”改为“外置”
  - [Web] `Button` 组件去除 `across` 模式
  - [Web] `Modal`、`List.Item`、`Switch` 默认采用 iOS 样式，不再根据 UA 进行自动探测 ([#1371](https://github.com/ant-design/ant-design-mobile/issues/1371))
  - [Web/RN] 各个组件的 `ref` 从 `string` 修改为 `function` ([#1354](https://github.com/ant-design/ant-design-mobile/issues/1354))
  - [Web/RN] 重构 `Tabs` 组件，底层重写，**APIs 大量更改**
  - [Web/RN] 去除 `Popup` 组件，给 `Modal` 组件新增 `popup` 属性，相应地 Modal 组件中原 `animationType` 属性开始支持 web 版本、用以标识 popup 弹出动画的类型 [#1125](https://github.com/ant-design/ant-design-mobile/issues/1125)
  - [Web/RN] `InputItem` / `TextareaItem` 组件
      - 将 `style` 属性传至 input(web) / TextInput(rn)
      - 去除 `focused` / `autoFocus` 属性 (用 `focus()` 实例方法实现同样效果)
  - [Web/RN] `DatePicker` 组件去除 moment.js 依赖
      - 相应地 `value` / `minDate` / `maxDate` / `format` / `onChange` 数据类型变为`Date`对象
  - [Web/RN] `pagination` 组件 `current` 属性改成从 `1` 开始索引
  - [Web/RN] `Progress` 组件
      - `wrapStyle` 改为 `style`, 原来的 `style` 改为 `barStyle`
      - `unfilled` 属性值更改为 boolean 值
  - [Web/RN] 移除 `List` 组件的 `onLongPress` 属性
  - [Web/RN] `Result` 组件的 `buttonClick` 更改为 `onButtonClick`
  - [Web/RN] 删除 `Table` 组件
  - [Web] 去除 `createTooltip` 组件，如果你需要 range/slider 带 tooltip 功能，你可以用 [react-component/slider/createSliderWithTooltip](https://github.com/react-component/slider/blob/master/src/createSliderWithTooltip.jsx) 实现
  - [Web] `Switch` 组件的 `style` 属性设置，从外围元素改为内层元素上
  - [Web] `Slider` 去除默认的 margin & padding 样式
  - [Web] `Carousel` 的 `easing` 属性类型从 string 改为 Function
  - [Web] `Flex` 清理冗余 `align` 属性值 `top / middle / bottom`
  - [Web] `ListView`(beta.3) 移除 `stickyHeader` 属性和 [react-sticky](https://github.com/captivationsoftware/react-sticky) 依赖，但是你仍然可以使用 react-sticky 和 `useBodyScroll` 属性来自己实现相应效果 (查看 demo)
      > 因为 sticky 效果实际并不常用，而且不包含 UI，因此不适合集成在 ListView 里
  - [Web] `RefreshControl`(beta.3) 修改内部的 dom className
      - 从 `${prefixCls}-ptr` 改为 `${prefixCls}-indicator`
      - 从 `${prefixCls}-ptr-icon` 改为 `${prefixCls}-indicator-icon-wrapper`
      - 从 `${prefixCls}-ptr-loading` 改为 `${prefixCls}-indicator-loading-wrapper`
  - [Web] `ListView`(beta.6) 新增 `pullToRefresh` 属性，移除 `useZscroller` `scrollerOptions` `refreshControl` `pullUpEnabled` `pullUpRefreshing` `pullUpOnRefresh` `pullUpDistanceToRefresh` `pullUpRenderer` 属性
  - [Web] `RefreshControl`(beta.6) 已经被移除，请使用新增的 `PullToRefresh` 组件代替
  - [RN] `RefreshControl`(beta.6) 已经被移除，请直接引用 react-native RefreshControl
  - [RN] `ActionSheet.showShareActionSheetWithOptions` 利用 react native `Share` 进行重新实现
  - [RN] `Button` 组件 style 里 `disabledRaw` / `disabledRawText` 修改为 `defaultDisabledRaw` / `defaultDisabledRawText`
  - [Web] `NavBar`(beta.7) 修改属性 `iconName` 为 `icon`，你需要使用 `Icon` 组件或自定义图标
  - [Web] `ActionSheet`(beta.7) 删除 `iconName` 属性，使用 `icon` 代替

- **Theme**

  - 删除 `@fill-overlay-inverse`, `@color-shadow`, `@brand-hot`, `@font-size-display-sm`, `@font-size-display-md`, `@font-size-display-xl`, `@font-size-display-lg`,`@font-family-code`, `@font-family-base`；
  - `@searchbar-font-size` 重命名为 `@search-bar-font-size`。

- **Enhancement**
  - 不再需要配置 `webpack.resolve`
  - `rmc-picker` 升级，简化 picker 相关的 dom 结构。（[#1593](https://github.com/ant-design/ant-design-mobile/issues/1593)）
  - 去除全局的 `user-select: none`。[#1793](https://github.com/ant-design/ant-design-mobile/issues/1793)

## 1.6.10/1.6.11
`2017-09-25`

- **Bug Fix**

  - Fix `InputItem` 不能 focus 在点击 clear icon 后.

## 1.6.9
`2017-09-25`

- **Bug Fix**

  - Fix `Modal.prompt` 聚焦延迟. ([#1857](https://github.com/ant-design/ant-design-mobile/issues/1857))
  - Fix `TextareaItem` 当 `autoHeight` 属性为 true，且输入很多文字时，切换 active 元素导致页面滚动. ([#1858](https://github.com/ant-design/ant-design-mobile/issues/1858))
  - Fix `Popvoer` ts 属性定义错误.

- **Improve && Enhancement**

  - Add `indicatorStyle` 和 `itemStyle` 属性用于 `Picker/PickerView`. ([#1856](https://github.com/ant-design/ant-design-mobile/issues/1856))

## 1.6.8
`2017-09-18`

- **Bug Fix**

  - Fix `segmented-control` 激活状态样式. ([#1832](https://github.com/ant-design/ant-design-mobile/issues/1832))
  - Fix `InputItem` `TextareaItem` [类型定义](https://github.com/ant-design/ant-design-mobile/commit/5fd21d1539f19fe80fd415716d349d82c1a77408).
  - Fix `swipe-action` [样式问题](https://github.com/ant-design/ant-design-mobile/commit/ab2297c64fcde0766b502b96349bc8824cbd8bff).

## 1.6.7
`2017-09-11`

- **Bug Fix**

  - Fix `Carousel` `swipeSpeed` ts 属性未定义. ([#1824](https://github.com/ant-design/ant-design-mobile/issues/1824))
  - Fix `TabBar` 在 android 平台 item 只有一个时报错. ([#1827](https://github.com/ant-design/ant-design-mobile/issues/1827))
  - Fix RN `PickerView` 垂直布局问题 ([#1795](https://github.com/ant-design/ant-design-mobile/issues/1795))


## 1.6.6
`2017-09-09`

- **Bug Fix**

  - Fix `Modal.operation` android 下面多操作选项样式问题 ([#1791](https://github.com/ant-design/ant-design-mobile/issues/1791))
  - Fix RN `Accordion` 必须依赖 Icon 组件的问题 ([#1784](https://github.com/ant-design/ant-design-mobile/issues/1784))
  - Fix `Modal` 按钮默认的 `href="#"` 导致 react-router 跳转到 '/' ([#1780](https://github.com/ant-design/ant-design-mobile/issues/1780))
  - Fix RN `ActionSheet` 空 title / message 报错([#1767](https://github.com/ant-design/ant-design-mobile/issues/1767)
  - Fix RN `Picker、PickerView` 布局错误 ([#1767](https://github.com/ant-design/ant-design-mobile/issues/1767))

## 1.6.5
`2017-08-29`

- **Bug Fix**
  - 修复 `SeachBar` cancel 无法自动 blur 的问题。([#1721](https://github.com/ant-design/ant-design-mobile/issues/1721))
  - 修复 `InputItem` unkown props warning。([#1754](https://github.com/ant-design/ant-design-mobile/issues/1754))
  - 修复 `InputItem[type='money']` `focused` api 在初始化时不生效的问题。([#1758](https://github.com/ant-design/ant-design-mobile/issues/1758))

## 1.6.4
`2017-08-29`

- **Bug Fix**
  - 修复 `SeachBar` 在特定客户端内`onClear`事件触发时无法自动 `focus` 到搜索栏的问题。([#1721](https://github.com/ant-design/ant-design-mobile/issues/1721))
  - 修复 `ListView` 空保护 bug ([#16](https://github.com/react-component/m-list-view/pull/16))
  - 修复` SwipeAction`  [触摸反馈与滑动冲突的问题](https://github.com/react-component/swipeout/commit/b9b373bf4d378c5c98730b5ce96953050c29dbe2)。
  - 修复 `Stepper` icon 不支持自定义颜色。([#1694](https://github.com/ant-design/ant-design-mobile/issues/1694))
  - 修复 RN `ImagePicker` 不兼容 react 16 error. ([#1707](https://github.com/ant-design/ant-design-mobile/issues/1707))
  - 修复` SwipeAction` 与 `InputItem` z-index 冲突的问题。([#1720](https://github.com/ant-design/ant-design-mobile/issues/1720))

- **Improve && Enhancement**
  - 统一升级 `rmc-picker` 到 v4。([#1593](https://github.com/ant-design/ant-design-mobile/issues/1593))
  - `SearchBar` [支持 MaxLength](https://github.com/ant-design/ant-design-mobile/commit/cb674f77d8e6495a081c06c65b71f23a04c32954)。
  - `InputItem[type=money]` 虚拟数字键盘重构，全局独立复用。([#1724](https://github.com/ant-design/ant-design-mobile/issues/1724))
  - `SearchBar` 清除交互体验优化。([#1731](https://github.com/ant-design/ant-design-mobile/pull/1731))
  - `Picker` 显示支持受控模式。([900f691](https://github.com/ant-design/ant-design-mobile/commit/900f6910bdd2b42fa97bac142671bf5089abc0a3))

## 1.6.3

`2017-08-15`

- **Bug Fix**
  - 修复 `TextareaItem` 不正确处理换行符长度的问题。 ([#1265](https://github.com/ant-design/ant-design-mobile/issues/1265))

- **Improve && Enhancement**
  - `SwipeAction` 防止竖滑误触发；禁用时性能优化；滑块宽度自适应。 ([#1595](https://github.com/ant-design/ant-design-mobile/issues/1595))

## 1.6.2

`2017-08-13`

- **Improve && Enhancement**
  - `Tabs` 支持 `data-*` 属性 ([#1648](https://github.com/ant-design/ant-design-mobile/issues/1648))

## 1.6.1

`2017-08-12`

- **Bug Fix**
  - 修复 `TextareaItem` 输入表情符号计数不正确的bug ([#1670](https://github.com/ant-design/ant-design-mobile/pull/1670))
  - 修复 `SwipeAction` 只设置 left 或者 right 时，相反一边还可以滑动的问题；([#1655](https://github.com/ant-design/ant-design-mobile/issues/1655))
  - 修复 `RN InputItem` 自定义样式 color 不生效（被强制覆盖）的问题; ([#1471](https://github.com/ant-design/ant-design-mobile/issues/1471))
  - 修复 `Toast[mask=false]` 时跟随页面滚动问题；([#1642](https://github.com/ant-design/ant-design-mobile/issues/1642))
  - 修复 `ListView` 存在body滚动条的时候，无法实现滚动到顶部在下拉刷新; ([#1588](https://github.com/ant-design/ant-design-mobile/issues/1588))
- **Improve && Enhancement**
  - 网站导航栏高亮 ([#1534](https://github.com/ant-design/ant-design-mobile/issues/1534))


## 1.6.0

`2017-07-30`

- **Feature**
  - `Tabs` 新增支持`Badge` ([#1604](https://github.com/ant-design/ant-design-mobile/pull/1604))
  - `Modal` 支持placeholder ([#1603](https://github.com/ant-design/ant-design-mobile/pull/1603))

- **Bug Fix**
  - 修复`SearchBar` `onClear`时存在的样式渲染问题 ([#1621](https://github.com/ant-design/ant-design-mobile/pull/1621))
  - 修复`SearchBar` 支持data-* 属性. ([bbb358](https://github.com/ant-design/ant-design-mobile/commit/bbb35826872841f50ae31d795f67a97fd3231ca4))

- **Improve && Enhancement**
  - 网站优化 ([#1622](https://github.com/ant-design/ant-design-mobile/pull/1622))


## 1.5.0

`2017-07-22`

- **Feature**
  - `ListItem` 支持 `onLongPress`. ([#1533](https://github.com/ant-design/ant-design-mobile/pull/1533))

- **Bug Fix**
  - 修复 `Tabs` 滑动浮层覆盖 `Popup` 蒙版的问题。([#1512](https://github.com/ant-design/ant-design-mobile/pull/1512))
  - 修复 `Switch` 在 android 上 0.5px 导致显示不正常的问题。([86dabf](https://github.com/ant-design/ant-design-mobile/commit/86dabfea9841695fbca5319b422f11a0ddb17184))
  - 修复 React Native `Modal.prompt` 键盘遮挡的问题。([#1489](https://github.com/ant-design/ant-design-mobile/issues/1489))

- **Improve && Enhancement**
  - 增加对 `Icon` svg-sprite-loader 可能未正确配置的检测和 warning。([#1574](https://github.com/ant-design/ant-design-mobile/issues/1574))


## 1.4.2

`2017-07-12`

- **Bug Fix**
  - 修复 Toast 未以自身中心点纵向居中。 ([#1389](https://github.com/ant-design/ant-design-mobile/issues/1389))
  - 修复目前未实现的 NavBar、Menu、Range、Table 引入 react-native 版本组件报错的问题。([#1526](https://github.com/ant-design/ant-design-mobile/issues/1526))


- **Improve && Enhancement**
  - 升级 Slider 依赖的 rc-slider 版本。
  - 部分组件文档国际化完善，增加部分组件测试用例。


## 1.4.1

`2017-07-01`

- **Bug Fix**
  - 修复 `Grid` 样式问题。（[635a9d3](https://github.com/ant-design/ant-design-mobile/commit/635a9d3d4b93e5a7304d5620ad6550827c303b1d) [#1455](https://github.com/ant-design/ant-design-mobile/issues/1455)）
  - 修复 create-react-app 文档错误。（[#1501](https://github.com/ant-design/ant-design-mobile/issues/1501)）
  - 修复 `Modal` android 平台下样式错误。（[#1499](https://github.com/ant-design/ant-design-mobile/issues/1499)）
  - 修复 `SearchBar` iOS键盘类型不是搜索问题。 ([#1510](https://github.com/ant-design/ant-design-mobile/issues/1510))
  - 暂时回滚 typescript interface 写法，解决 dist 文件错误问题。 ([#1517](https://github.com/ant-design/ant-design-mobile/pull/1517))

- **Improve && Enhancement**
  - `SegmentedControl` 兼容 preact ([#1374](https://github.com/ant-design/ant-design-mobile/pull/1374))
  - `ActionSheet`/`SearchBar`/`ImagePicker`/`Picker` 细节样式优化
  - `Modal.prompt` 扩大点击区域 ([#1489](https://github.com/ant-design/ant-design-mobile/issues/1489))
  - `InputItem` 的 money 类型添加 demo 演示只能输入自然数([#1493](https://github.com/ant-design/ant-design-mobile/pull/1493))
  - 更新主要的介绍文档 ([#1503](https://github.com/ant-design/ant-design-mobile/pull/1503))
  - 去除 object-assign 依赖，改为使用 es6 展开操作符 ([67e0ee6](https://github.com/ant-design/ant-design-mobile/commit/67e0ee6a985d1e143f3dbbf63988d01a05d67b59))
  - 网站信息结构优化，并增加拷贝代码按钮 ([#1481](https://github.com/ant-design/ant-design-mobile/issues/1481))

## 1.4.0

`2017-06-24`

- **Feature**
  - `Button` 新增 `activeClassName` 以自定义点击时类名。([3331f00](https://github.com/ant-design/ant-design-mobile/commit/3331f00b1a89d7fb76dcffa554f1cf9b165819d9))
  - `Card.Header` 的 thumb 支持 React.Element。([#1484](https://github.com/ant-design/ant-design-mobile/issues/1484))
  - `InputItem` 支持通过 locale 来自定义内置文案。([#1475](https://github.com/ant-design/ant-design-mobile/issues/1475))

- **Bug Fix**
  - 修复 ListView sticky header 被遮挡的问题。([#1456](https://github.com/ant-design/ant-design-mobile/issues/1456))
  - `InputItem` 修复当`type=money` 虚拟键盘无法隐藏的问题。([#1468](https://github.com/ant-design/ant-design-mobile/issues/1468))


- **Improve && Enhancement**
  - `InputItem` 背景图片替换为 svg。([#1470](https://github.com/ant-design/ant-design-mobile/issues/1470))
  - `Button` 高度增大为 `94px`。
  - `ListItem` 高度减小为 `88px`。
  - `Result` 间距，字体，颜色调整。

## 1.3.1

`2017-06-19`

- **Feature**
  - `PickerView` 支持`indicatorStyle`。([3184179d2](https://github.com/ant-design/ant-design-mobile/commit/3184179d2ba4b5bccde83d8590d3e538fab0ad22))

- **Bug Fix**
  - `InputItem` 修复当`type=money`时`disabled`和`editable`不生效的问题。([#1437](https://github.com/ant-design/ant-design-mobile/issues/1437))
  - `Menu` 修复当数据源二级数据不唯一时导致的问题。([#1427](https://github.com/ant-design/ant-design-mobile/issues/1427))
  - `Slider` [#1439](https://github.com/ant-design/ant-design-mobile/pull/1439)，更新TS definition
  - `ListView` 修复scrollTo的问题 ([97ed6795](https://github.com/ant-design/ant-design-mobile/commit/97ed67955243643fcc1de3debd0d507b87d6380b))
  - React-Native `Flex` `Flex.Item`支持`children`数组。([#1442](https://github.com/ant-design/ant-design-mobile/pull/1442))

## 1.3.0

`2017-06-09`

- **Feature**
  - `InputItem` 支持虚拟的金额输入键盘 (`type="money"`)。([#1419](https://github.com/ant-design/ant-design-mobile/pull/1419))
  - `Slider` & `Range` 新增 `handleStyle`, `trackStyle`, `railStyle` 以支持自定义样式。([a83d0fe](https://github.com/ant-design/ant-design-mobile/commit/a83d0fefffbdd05ce9f89a78508a544cd95e4fb5))
  - React-Native `Progress` 新增 `wrapStyle` 已自定义容器样式。([3ad012a](https://github.com/ant-design/ant-design-mobile/blob/3ad012ae265182cebc677efb309c92238eb8377a/components/progress/index.web.tsx))
  - React-Native `Carousel` 新增 `dotStyle`, `dotActiveStyle` 以自定义指示器样式。([#1425](https://github.com/ant-design/ant-design-mobile/pull/1425))
  - React-Native `Button` 新增 `delayPressin`, `delayPressout` 以自定义点击延时。([b6ec8e2](https://github.com/ant-design/ant-design-mobile/commit/b6ec8e217bc3ed56702c819885948839c14bf8e3))

- **Bug Fix**
  - 修复 React-Native `Accordion` 不能设置 style。([#1407](https://github.com/ant-design/ant-design-mobile/issues/1407))
  - 修复 `Popup` 自定义蒙层样式的问题。([#1420](https://github.com/ant-design/ant-design-mobile/issues/1420))
  - 修复 `Pagination` 自定义翻页文案与图标样式的问题。([#1429](https://github.com/ant-design/ant-design-mobile/issues/1429))
  - 修复 `Modal` 在 android 上关闭之前样式变换的问题。([#1433](https://github.com/ant-design/ant-design-mobile/issues/1433))

## 1.2.0

`2017-06-03`

- **Notice**
  - antd-mobile `Icon` 所依赖的开源 webpack loader `svg-sprite-loader` 最近从 `0.3` 直接升级到了 `2.0`, 其配置方案发生了 break change，但由于此 loader 的版本由用户代码控制，而功能被 antd-mobile 和用户代码所共同依赖， antd-mobile 团队只能选择在 `2.0` 对其进行升级，请各位用户在 `antd-mobile@1.x` 期间暂时不要升级 `svg-sprite-loader`，在项目里仍然使用 `svg-sprite-loader@0.3.x` 即可。[#1283](https://github.com/ant-design/ant-design-mobile/issues/1283)
  - 新增 warning，提醒用户 antd-mobile `2.0` 将会废弃 `Table`。[e1009015e](https://github.com/ant-design/ant-design-mobile/commit/e1009015e0c0740045995555831d1598a99c629f)

- **Feature**
  - 底层 Touch 事件库更新，所有 `onPress` 和 `onLongPress` 支持 `stopPropagation`。[e7400b699](https://github.com/ant-design/ant-design-mobile/commit/e7400b6994d3a9127bd1bd6fa418996ad8206f96)
  - 重构 `carousel`, 新增 [swipeSpeed](https://github.com/react-component/nuka-carousel#modify-from-upstream-nuka-carousel204)  api 以自定义拖动速度。
  - Theme 新增 `@toast-fill` 用于自定义 toast 背景色。[acaeff017171](https://github.com/ant-design/ant-design-mobile/commit/acaeff017171fd06bf8700b849a7fff917c6d260)
  - 新增与 crate-react-app 和 create-react-native-app 脚手架配合使用的文档。[#1362](https://github.com/ant-design/ant-design-mobile/issues/1362)

- **Bug Fix**
  - 修复 `ListView` 中集成横滑组件, 如 `SwipeAction`, `Carousel`, 与上下滑动冲突的问题。[#1254](https://github.com/ant-design/ant-design-mobile/issues/1254)
  - 修复 `Popover` 自定义样式的问题。[#1364](https://github.com/ant-design/ant-design-mobile/issues/1364)
  - 修复 Theme `@radius-circle` 变量不生效 [#1301](https://github.com/ant-design/ant-design-mobile/issues/1301)
  - 修复 Theme 无法自定义 `SearchBar` placeholder font-size [#1324](https://github.com/ant-design/ant-design-mobile/pull/1324)
  - 修复 React-Native `picker` 无法自定义字体样式。 [#1323](https://github.com/ant-design/ant-design-mobile/issues/1323)
  - 修复 SearchBar 在 android 的点击后无法 focus 问题。[#1342](https://github.com/ant-design/ant-design-mobile/issues/1341)
  - 修复 React-Native `tabs` swipeable 属性无效的问题。[#1346](https://github.com/ant-design/ant-design-mobile/issues/1346)
  - 修复 `InputItem` 等输入类组件文字被截断的问题。[#1358](https://github.com/ant-design/ant-design-mobile/issues/1358)
  - 修复 SwipeAction 类名和样式。[e42430f9a68f2](https://github.com/ant-design/ant-design-mobile/commit/e42430f9a68f25a4b22cd2e65c05009fbb678fdd)
  - 修复错误的 API 文档， `ActivityIndicator` color API 只有 React-Native 组件支持。[#1370](https://github.com/ant-design/ant-design-mobile/issues/1370)
  - 修复 `Tabs` 当 liner-gradient 不支持时显示不正常的问题。[824da3466](https://github.com/ant-design/ant-design-mobile/commit/824da34667f9e974747d9f344b0bef3dc0bdae36)
  - 修复 `Grid` 在 isCarousel 模式下不会自动填充空白格子的问题。[#1398](https://github.com/ant-design/ant-design-mobile/pull/1398)
  - 修复 `Toast` 没有以自身中心点垂直居中的问题。[#1389](https://github.com/ant-design/ant-design-mobile/issues/1389)

- **Improve && Enhancement**
  - `Tabs` 头部滑动性能，体验优化。
  - 增大 `SearchBar` 点击区域。[#1344](https://github.com/ant-design/ant-design-mobile/pull/1344)
  - 重构 `Switch`, `Modal` 以支持服务端渲染 [#1307](https://github.com/ant-design/ant-design-mobile/pull/1307/)
  - 优化 Flex, Button, List 的 typescript 定义。[#1339](https://github.com/ant-design/ant-design-mobile/issues/1339)
  - `Button`, `Tag` 由外边框改为内边框，更符合设计规范。[4c8051032](https://github.com/ant-design/ant-design-mobile/commit/4c8051032005fe042df38d4b3bddf5f8405fb8fd)
  - 新增 `pkg.module`, 指向 ES2015 modules，更好地支持 rollup 和 webpack2。[#12](https://github.com/react-component/react-component.github.io/issues/12)
  - 重构 React-Native `Toast`, `ActivityIndicator` 样式，更改地支持通过 Theme 自定义。[b7094e2a2dc](https://github.com/ant-design/ant-design-mobile/commit/b7094e2a2dc0aa9433f2f2f7388a3e8313681888)
  - `Tabs` 新增对 `TabPane.props.key` 的校验，必须存在且唯一。[#1365](https://github.com/ant-design/ant-design-mobile/issues/1365)
  - 重构并从 React-Native `InputItem` 拆分出 `TextInput`，便于自定义样式。[#1174](https://github.com/ant-design/ant-design-mobile/issues/1174)
  - 重构 `Grid`, 避免当格子数量变化，在 carousel 和非 carousel 模式切换后高度变化的情况。[63c28b31f](https://github.com/ant-design/ant-design-mobile/commit/63c28b31fba19cb7f68a36a71259a5b57ffe0bc8)
  - 新增 demo 关于如何扩展 `InputItem` label 为可点击区域。[db8582781](https://github.com/ant-design/ant-design-mobile/commit/db8582781f0aa7663fb02db315de49cf9d00822b)

## 1.1.3

`2017-05-14`

- **Bug Fix**
  - 修复 `ListItem` unknown props warning。（[#1278](https://github.com/ant-design/ant-design-mobile/issues/1278)）
  - 修复 React Native `Pagination` disable 时的 active 样式问题。（[1b01652797](https://github.com/ant-design/ant-design-mobile/commit/1b01652797daebd1af0547f19b005199fa6413e5)）
  - 修复 React Native `List` renderFooter 错误。（[#1294](https://github.com/ant-design/ant-design-mobile/pull/1294/files)）
  - 修复 `tabs` createClass warning

- **Improve && Enhancement**
  - `Switch` 支持 onClick ([#1290](https://github.com/ant-design/ant-design-mobile/issues/1290))

## 1.1.2

`2017-05-07`

- **Bug Fix**
  - 修复 单独使用 `Stepper` 缺少依赖的 Icon 样式问题。([d86c3dda](https://github.com/ant-design/ant-design-mobile/commit/d86c3dda267864721273f258dad3193c69d8e838)
  - 修复 `Modal` 关闭按钮显示不齐的问题。([bf64803d](https://github.com/ant-design/ant-design-mobile/commit/bf64803d01082f0dd924c41ca778dfadb177bc92))
  - 修复 `Switch` android 样式。（[56bf4a93](https://github.com/ant-design/ant-design-mobile/commit/56bf4a93f55f021206aa99551039e68c9518c85c)）
  - 修复 `Slider` active 样式。（[5a012ead](https://github.com/ant-design/ant-design-mobile/commit/5a012ead269e212dda6fb751a29a1e43f28e9848)）
  - 修复 `Stepper` 选中样式未自动消失的问题。([006a5e2](https://github.com/ant-design/ant-design-mobile/commit/006a5e2184f3402fa9351186d65f8ab24a7c4b23))
  - 修复 RN `InputItem` 自定义字体大小。（[#1174](https://github.com/ant-design/ant-design-mobile/issues/1174)）([@kimjuny](https://github.com/kimjuny))
  - 修复 RN `Popup` 自定义蒙版背景样式。（[#1234](https://github.com/ant-design/ant-design-mobile/issues/1234)）
  - 修复 RN `Modal` 点击系统返回无法自动关闭的问题。 ([#1218](https://github.com/ant-design/ant-design-mobile/issues/1218))
  - 修复 RN `Modal.prompt`, `InputItem` 样式。([#1199](https://github.com/ant-design/ant-design-mobile/issues/1199))
  - 修复 Normalize.css 缺少对 body margin 重置的问题。（[#1264](https://github.com/ant-design/ant-design-mobile/issues/1264)）
  - 修复 RN 所有组件统一接受 `style`, `styles` 参数的问题。（[#1262](https://github.com/ant-design/ant-design-mobile/pull/1262)）

- **Improve && Enhancement**
  - 所有组件支持无障碍访问。（[#1179](https://github.com/ant-design/ant-design-mobile/pull/1179)）
  - 增大 `SearchBar` 取消按钮点击区域。([#1250](https://github.com/ant-design/ant-design-mobile/issues/1250))
  - 重构 RN `Carousel` 以支持自定义 Pagination。（[#1146](https://github.com/ant-design/ant-design-mobile/issues/1146)）
  - 重构 `ListItem` 以支持服务端渲染。（[#1219](https://github.com/ant-design/ant-design-mobile/pull/1219)）

## 1.1.1

`2017-04-28`

- **Feature**
  - `InputItem`添加唤起自定义数字键盘特性（仅支付宝等客户端）。([#1231](https://github.com/ant-design/ant-design-mobile/pull/1231))

- **Bug Fix**
  - 修复 `Grid`的`renderItem`方法。([链接](https://github.com/ant-design/ant-design-mobile/commit/1316154cce6324c04a2cd7f36c8d229573dcde6b))
  - 修复`SearchBar`clear icon可能不出现的问题。([#1204](https://github.com/ant-design/ant-design-mobile/issues/1204))
  - 修复`InputItem`的`placeholder`声明，改为可选。([#1216](https://github.com/ant-design/ant-design-mobile/pull/1216))
  - 修复`TabBar`声明文件，`TabBarItemProps`部分的新增`dot`。([#1209](https://github.com/ant-design/ant-design-mobile/pull/1209))
  - 修复网站的语言切换逻辑。([链接](https://github.com/ant-design/ant-design-mobile/commit/ec839dc4fdc7bfd54a9bd389cd3699bcbf8ac1ee))
  - `RefreshControl`支持SSR渲染。([#1201](https://github.com/ant-design/ant-design-mobile/pull/1201))

- **Improve && Enhancement**
  - 优化`Icon`组件内置的svg文件，做最小化处理。([#1220](https://github.com/ant-design/ant-design-mobile/pull/1220))
  - 完成`NoticeBar`、`Grid`、`Radio`组件英文文档的翻译工作。([#1230](https://github.com/ant-design/ant-design-mobile/pull/1230))、([#1228](https://github.com/ant-design/ant-design-mobile/pull/1228))、([#1227](https://github.com/ant-design/ant-design-mobile/pull/1227))
  - `InputItem`为支付宝小程序拆分出单独的内部组件`Input`。([#1225](https://github.com/ant-design/ant-design-mobile/pull/1225))
  - `Card`组件整合声明文件。([#1222](https://github.com/ant-design/ant-design-mobile/pull/1222))

## 1.1.0

`2017-04-21`

- **Bug Fix**
  - 修复 `Steps` 溢出。（[#5623](https://github.com/ant-design/ant-design/issues/5623]))
  - 搜索框支持在主题变量自定义高度，背景色等。（[PR 1113](https://github.com/ant-design/ant-design-mobile/pull/1113)）[@yezongyang](https://github.com/yezongyang)
  - 修复 React-Native `Steps` 不支持自定义 Icon ([#1088](https://github.com/ant-design/ant-design-mobile/issues/1088))
  - 修复 `Progress` 不支持自定义 `className`。（[PR 1126](https://github.com/ant-design/ant-design-mobile/pull/1126)）
  - 修复 React-Native `InputItem` 不支持自定义内容。([#1113](https://github.com/ant-design/ant-design-mobile/issues/1133))
  - 修复 `InputItem` 数字键盘在 Android 的兼容问题。([1073](https://github.com/ant-design/ant-design-mobile/issues/#1073))。
  - 修复 `InputItem` autoFocus 在 safari 无法聚焦的 bug。([PR 1134](https://github.com/ant-design/ant-design-mobile/pull/1134))
  - 修复小尺寸 `Button` 的 loading icon 尺寸。([587963](https://github.com/ant-design/ant-design-mobile/commit/587936abc43015ed2fa9be1b3493b3a8c4f98334))
  - 修复部分 React15.5 关于 PropType 和 CreateClass 的 warning。([#1118](https://github.com/ant-design/ant-design-mobile/issues/1118))
  - 修复部分内置 svg 背景的尺寸。([#1140](https://github.com/ant-design/ant-design-mobile/issues/1140))

- **Improve && Enhancement**
  - 重构 `Grid`, `ImagePicker`, `Modal` 以支持服务端渲染。
  - `Flex`, `FlexItem` 支持传递 `data-` 等任意自定义属性。([#1150](https://github.com/ant-design/ant-design-mobile/issues/1150))
  - `Grid` 在 carousel 模式下支持 `Carousel` 的相应 API。（[#1164](https://github.com/ant-design/ant-design-mobile/issues/1164)）


## 1.0.8

`2017-04-07`

- **Feature**
  - RN modal 增加 Modal.prompt （[#1089](https://github.com/ant-design/ant-design-mobile/pull/1089)）

- **Bug Fix**
  - 修复 InputItem、TextareaItem、Search autofocus 的 bug （[#1103](https://github.com/ant-design/ant-design-mobile/pull/1103)）
  - 修复 SearchBar 点击 `x` 取消时，placeholder 显示不正确的 bug （[#1047](https://github.com/ant-design/ant-design-mobile/pull/1047)）
  - 修复 TextareaItem 输入 emoji 表情，字符统计错误问题 （[#1085](https://github.com/ant-design/ant-design-mobile/pull/1085)）
  - 修复 SearchBar 提交后不自动隐藏键盘的问题；
  - 修复 Tabs onTabClick 无效问题 （[#1099](https://github.com/ant-design/ant-design-mobile/pull/1099)）
  - 修复 RN Steps 空格引起的问题 （[#1008](https://github.com/ant-design/ant-design-mobile/pull/1008)）

- **Improve && Enhancement**
  - 更新 rc-slider 版本，增加 `minimumTrackStyle`、`maximumTrackStyle`、`handleStyle` 属性；


## 1.0.7

`2017-03-24`

- **Feature**
  - Slider 支持自定义颜色。（[#1024](https://github.com/ant-design/ant-design-mobile/pull/1024)）
  - ListItem 在 Android 上点击新增水波纹动效。（[链接](https://github.com/ant-design/ant-design-mobile/commit/d8fd66992fdfe53745fb43d9e27bffd025b8fdb0)）

- **Bug Fix**
  - DatePicker 接收 `minuteStep`。 ([#1020](https://github.com/ant-design/ant-design-mobile/issues/1020))
  - 修复 Stepper 的 icon 多重边框问题。（[#1038](https://github.com/ant-design/ant-design-mobile/issues/1038)）
  - 修复 SearchBar placeholder 在聚焦时显示不全的问题。（[#1047](https://github.com/ant-design/ant-design-mobile/issues/1047)）

- **Improve && Enhancement**
  - Modal, Switch, ListItem 新增 `platform` 参数，可自定义组件样式是否区分 Android/iOS 平台。([#1030](https://github.com/ant-design/ant-design-mobile/issues/1030))
  - SearchBar 自定义主题时的布局优化。 ([#1014](https://github.com/ant-design/ant-design-mobile/issues/1014))
  - InputItem, TextareaItem, SearchBar 组件样式优化，增大可点击区域。 ([#1017](https://github.com/ant-design/ant-design-mobile/issues/1017))
  - React-Native Steps 支持 React.Node 类型的 `title`, `description`。 [#1008](https://github.com/ant-design/ant-design-mobile/issues/1008)
  - DatePicker 确保默认日期在 `minDate`, `maxDate` 范围内 （[#1033](https://github.com/ant-design/ant-design-mobile/issues/1033)）


## 1.0.6


`2017-03-17`

- **Feature**
  - Modal 添加 close api，方便手工销毁，#995

- **Bug Fix**
  - 修复 ImagePicker clear icon 旋转问题，#944

- **Improve && Enhancement**
  - 优化 Modal button 长按的默认行为；
  - Stepper、Toast、Modal 依赖的 rc-util 升级，去除控制台中 warning，#959
  - 部分文档优化；#997 #993 #984 #1009；部分 demo 优化；

## 1.0.5

`2017-03-10`

- **Feature**
  - 补全 `accordion` React-Native 版本 ([#931](https://github.com/ant-design/ant-design-mobile/pull/931))
  - `stepper` 图标支持用户自定义 ([链接](https://github.com/ant-design/ant-design-mobile/commit/78ab295f69cd1441b600aa6c2d921c7d658096ca))
  - 补全 React-Native `Button` 的 loading 样式 （[#946](https://github.com/ant-design/ant-design-mobile/issues/946)）
  - React-Native `InputItem` 支持输入小数 （[950](https://github.com/ant-design/ant-design-mobile/issues/950)）
  - `Icon` 支持直接添加事件 ([#955](https://github.com/ant-design/ant-design-mobile/issues/955))
  - React-Native `InputItem`, `TextItem` 支持自定义 style ([#949](https://github.com/ant-design/ant-design-mobile/issues/949))

- **Bug Fix**
  - React Native `SearchBar` 自动显示取消按钮 ([#957](https://github.com/ant-design/ant-design-mobile/issues/957))
  - 修复 `Tabs` 在低版本 Android 浏览器兼容性问题 ([#940](https://github.com/ant-design/ant-design-mobile/issues/940))
  - React Native 修复 `Card` extra 覆盖的bug ([#969](https://github.com/ant-design/ant-design-mobile/issues/969))
  - 修复 `ImagePicker` 图片旋转方向问题 ([#944](https://github.com/ant-design/ant-design-mobile/issues/944))
  - 修复 `Step` 水平溢出的问题 ([#952](https://github.com/ant-design/ant-design-mobile/issues/952))

- **Improve && Enhancement**
  - 新增 Web && React Native 组件的 snapshot 测试，覆盖率 59% ([#921](https://github.com/ant-design/ant-design-mobile/pull/921))
  - 文档翻译进度 ([#329](https://github.com/ant-design/ant-design-mobile/issues/329))
  - [官方 Demo 集合](https://github.com/ant-design/antd-mobile-samples) 新增 roadhog 示例

## 1.0.4

`2017-03-07`

- **Bug Fix**
  - 修复 `Button`, `ListItem` 在 Android 上点击穿透的问题。（[#937](https://github.com/ant-design/ant-design-mobile/issues/937)）


## 1.0.3

`2017-03-04`

- **Bug Fix**
  - 修复 `Tabs` 在设置 pageSize 情况下宽度计算的问题。（[#935](https://github.com/ant-design/ant-design-mobile/issues/935)）


## 1.0.2

`2017-03-04`

- **Feature**
  - Tabs 新增 `pageSize` API，新增支持 swipeableTabBar 滑动头部。 （[#882](https://github.com/ant-design/ant-design-mobile/pull/882)）
  - Modal 增加 Modal.operation ([#925](https://github.com/ant-design/ant-design-mobile/pull/925)) 感谢 @lixiaoyang1992
  - 新增 Russian Locale ([#901](https://github.com/ant-design/ant-design-mobile/pull/901)) 感谢 @NeonXP

- **Bug Fix**
  - Stepper `onChange` 重复触发 （[#891](https://github.com/ant-design/ant-design-mobile/issues/891)）
  - 修复 CheckboxItem 与 BrowserSync 不兼容的问题 ([#350](https://github.com/ant-design/ant-design-mobile/issues/350))
  - 修复 Tabs `className` 校验的 bug ([#904](https://github.com/ant-design/ant-design-mobile/issues/904))
  - RN stepper `readOnly` 默认改为 `false` ([#890](https://github.com/ant-design/ant-design-mobile/issues/890))
  - 修复Grid在较老旧Android版本上宽度计算的问题
  - 修复 RN android Tabbar 和 Toast、Popup、ActionSheet 混合使用时 zIndex 混乱的 bug；（[#910](https://github.com/ant-design/ant-design-mobile/issues/910)）
  - 修复 RN Carousel android 闪烁、componentWillUnmount 不执行的 bug；([#899](https://github.com/ant-design/ant-design-mobile/issues/899),[#906](https://github.com/ant-design/ant-design-mobile/issues/906))
  - 修复 ActionSheet(web & RN) maskClosable 不支持 callback index 的问题；([#908](https://github.com/ant-design/ant-design-mobile/issues/908))
  - 修复 RN Button 回调参数错误，restProps 覆盖问题;


- **Improve & Enhancement**
  - Icon 增加 try catch，避免控制台报错 ([#895](https://github.com/ant-design/ant-design-mobile/issues/895))
  - 官网重构支持国际化，自动检测浏览器语言并支持中/英文切换
  - 文档翻译进行中，欢迎参与贡献~ ([#329](https://github.com/ant-design/ant-design-mobile/issues/329))
  - 官方 demo 更新 [antd-mobile-samples](https://github.com/ant-design/antd-mobile-samples)


## 1.0.1

`2017-02-24`

- **Feature**
  - roadhog 支持配置 svg-sprite-loader [icon文档](https://mobile.ant.design/components/icon) ([#144](https://github.com/sorrycc/roadhog/pull/144))
  - React Native 增加 `LocalProvider` 国际化方案 ([#886](https://github.com/ant-design/ant-design-mobile/pull/886))
  - React Native `Button` , `Progress`, `TextareaItem` 支持自定义样式 ([#560](https://github.com/ant-design/ant-design-mobile/issues/560))
  - 提供 0.9.x iconfont 图标对应的 svg icon ([#866](https://github.com/ant-design/ant-design-mobile/issues/866))

- **Improve & Enhancement**
  - 所有 demo 代码迁移到 ES6 class 和 Pure function，去除 React.createClass ([#824](https://github.com/ant-design/ant-design-mobile/issues/824))
  - NavBar 返回间隔从 margin 改为 padding，增大点击区域 ([#844](https://github.com/ant-design/ant-design-mobile/issues/844))
  - carouse 去除 mixin ([#859](https://github.com/ant-design/ant-design-mobile/pull/859))
  - Tabs 新增 `className` ([#861](https://github.com/ant-design/ant-design-mobile/issues/861))
  - stepper 改为使用 svg icon, 升级 rc-input-number
  - 主题变量分类调整 ([ref](https://github.com/ant-design/ant-design-mobile/commit/daea9a38133e0670926af6c0bd9233057eb9c3aa))


- **Bug Fix**
  - 修复 List extra 为空的判断逻辑 ([#831](https://github.com/ant-design/ant-design-mobile/issues/831))
  - 修复 Toast 不居中的问题 ([#827](https://github.com/ant-design/ant-design-mobile/issues/827))
  - 修复 InputItem PC 上无法 clear 的 bug ([#832](https://github.com/ant-design/ant-design-mobile/pull/832))
  - 修复 React-Native SearchBar onChange 重复触发的 bug ([#739](https://github.com/ant-design/ant-design-mobile/issues/739))
  - 修复 TabBar icon 居中的问题 ([#836](https://github.com/ant-design/ant-design-mobile/issues/836))
  - 修复带跑马灯效果的 Grid 组件初始化时跑马灯初始宽度为0的问题。([ref](https://github.com/ant-design/ant-design-mobile/commit/1a897c46999e2325acd3754e52dba9144d04695e))
  - 修复 Button warning 的样式 ([#863](https://github.com/ant-design/ant-design-mobile/issues/863))



## 1.0.0

`2017-02-17`

- **Feature**
  - Icon 从 iconfont 转为使用 svg 图片 [#156](https://github.com/ant-design/ant-design-mobile/issues/156)。
  - Icon 增加 React Native 版本，[接入指南](https://github.com/ant-design/ant-design-mobile/blob/master/components/icon/index.en-US.md#如何使用-rn)。
  - Button 新增 `across` API，支持通栏按钮。
  - Progress 组件新增 `appearTransition` API，支持初始显示的动画效果。
  - Checkbox / Radio 组件支持 children [#499](https://github.com/ant-design/ant-design-mobile/issues/499)。
  - NoticeBar 支持 `marqueeProps`。
  - Steps 支持横向图标。
  - TabBar web icon 属性新增 `React.Node` 支持（可以使用 Icon 或者 background）。
  - Toast 新增 `duration = 0` 效果（不会自动消失）。
  - 各组件 RN 版本加入 `styles` 属性，支持完全自定义组件细节样式 [#560](https://github.com/ant-design/ant-design-mobile/issues/560)。
  - 新增 [LocaleProvider](https://mobile.ant.design/components/locale-provider)，内置中英语言包（默认中文)；且所有组件可以用 `props.locale` 覆盖全局 `LocaleProvider` 配置。
  - `Tabs` 超过5个自动分页，新增 `hammerOptions` API 可配置手势变量, 参考 [API文档](https://mobile.ant.design/components/tabs)。
  - `TabBar` 支持 `dot`  dot 类型的 Badge。
  - Modal alert 和 prompt 的 `onPress` AI 支持 promise, 参考 [demo](https://github.com/ant-design/ant-design-mobile/blob/master/components/modal/demo/alert.md)。
  - RN Flex 支持更多 `touchableWithOutFeedback` 属性。

- **Break Change**
  - NoticeBar type 变为 icon ，支持完全的自定义内容。
  - Popover `iconName` 变为 `icon` ；分割线的 css 设置从底边线修改为顶边线。
  - 修改部分 css 变量名和变量值、如：zindex 等。
  - RN List 去除 last 属性。
  - `DatePicker` 和 `Pagination` 不再接受 `okText`, `dismissText` 属性；`DatePicker`的`locale`属性结构变化，参见 [升级文档](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.en-US.md#其他常用组件更新注意事项)。
  - 原 Web 版 `Slider` 拆分成 `Slider`, `Range`, `createTooltip`, 使用方式参见 [Slider文档](https://mobile.ant.design/components/slider), [Range文档](https://mobile.ant.design/components/range)。
  - Toast 更改为 single instance，新显示的 toast 会覆盖老的；同时增加 mask 特性；。
  - Modal 和 Switch 增加 android 平台独立 UI。

- **Bug Fix**
  - 各输入类组件受控与非受控状态问题修复。
  - 修复部分组件(多为依赖 List)的多余边线等细节问题。
  - 修复 RN `CheckBox` 受控模式下的bug。 ([#784](https://github.com/ant-design/ant-design-mobile/issues/784))

- **Improve & Enhancement**
  - 各组件核心实现、样式、演示等全面优化。
  - RN Carousel 支持根据子视图高度自适应，去除 height，width 设置。
  - 网站重新设计、更加轻盈简洁；优化了网站资源大小、加载速度更快。
  - RN android tabbar 添加 iconStyle 支持。
  - Modal，Toast，ActionSheet 从 api中 拆分出 component 形式。

## 0.9.15

`2017-02-15`

- 修复并优化 TextareaItem, Accordion, Popover, ListView, InputItem 等组件细节问题 #724 #725 #788 #426
- 修复 RN Grid 的 onClick点击失效问题 #755
- Toast 组件修改成单例模式，避免多个 toast 同时或无序出现的问题 #745
- Modal 组件在 alert / prompt 的 action 里增加 Promise 支持
- TabBar 组件 Android 代码新增 iconStyle 属性支持 #776
- SwipeAction 组件增加遮罩背景样式，并优化 demo

## 0.9.14

`2017-01-13`

- 修复 Carousel afterChange 不触发问题 #711
- 修复 RadioItem、CheckboxItem 组件 onChange 事件触发两次问题 #689 #721
- 修复相关 RN 组件，使之能与最新版 RN 兼容
- 修复各组件的 TypeScript 类型定义缺失或错误的问题 #667
- 给 package.json 添加 main 字段，加入错误提示，解决常见上手使用问题 #602
- 更新 rc-swipeout 依赖，添加更多特性
- 优化 DatePicker 组件、可以自定义关闭日期选择的弹出框 #639
- 对 Table、ListView、Radio、Modal、Toast、Carousel 等组件或 demo 做细节优化(含RN)
- rn-tabs 增加 `barStyle`  属性，更加方便配置样式 #676

## 0.9.13

`2016-12-23`

- 修复 TextareaItem 设置 autoHeight 初始高度不对的问题 #671
- 修复 SreachBar placeholder 的 z-index 设置过高问题 #650
- 修改 List 左右内容平均占据空间的样式设置，凸显内容的主次之分 #655
- 全面替换 touchableFeedback 为 `rc-touchable`，同时修复 TS type 缺失问题 #636 #667
- 修复 Modal 文档错误，优化 Modal、SegmentedControl、TabBar (#646) 的实现和示例
- 修复 ListItem 没有 onClick 事件时也会触发点击反馈问题 #220#issuecomment-267587198
- 优化 ListView、InputItem、TextareaItem 等组件文档

## 0.9.12

`2016-12-15`

- 修复 SearchBar、Button、SegmentedControl  等 TypeScript 类型引用错误的问题
- 修复 Checkbox、Radio 在某些设备上点击 label 不会选中的兼容性问题
- 修复 InputItem 最后一项多余边线问题；重构 Carousel、Menu 核心实现
- 修正 NoticeBar 文字大小变量；修复 RN Radio 受控状态实现错误的问题
- 修复 RefreshControl 的`distanceToRefresh`设置，使其能自适应不同分辨率的屏幕
- 恢复 Picker、DatePicker 的 extra 设置并更新其文档，并增加自定义 children 的 demo
- 修复 Steps status error 状态展示问题；对 Popup 点击遮罩层的回调函数`onMaskClose`进行功能补充
- 优化 InputItem、TextareaItem、Picker、DatePicker 等组件 demo ，优化各组件文档细节

## 0.9.11

`2016-12-03`

- 修复 List 底部边线重叠显示问题、重构 List 点击反馈的实现方法；同步修复 ListView.IndexedList 边线重叠问题
- 修复 Checkbox 勾选箭头偏移问题 #581
- 修复 Steps 组件内部逻辑、改进部分样式设置
- 修复 SearchBar 动画表现不准确问题
- 改进[上手和使用文档](https://mobile.ant.design/docs/react/introduce#使用)写法
- 优化 Pagination、RefreshControl、Radio、Drawer、Popover、Result、NoticeBar 等组件实现和相应 demo
- 修复 RN InputItem Android 不能输入的问题 #603

## 0.9.10

`2016-11-25`

- 重构 SearchBar ，改为模拟的 placeholder 实现，并将其默认居中对齐
- 修复 Popup 组件点击遮罩层不会自动关闭 #555 #558
- 更正 RefreshControl 文档；修复部分组件 demo 在 pc 和 mobile 上展示不一致问题
- 修复 Toast 在 Modal 中使用被覆盖问题 #547
- 优化 Button、List 代码的 rn 实现；修正部分 demo 细节问题

## 0.9.9

`2016-11-18`

- 改进 Popup 样式 #525 , 默认禁止掉 popup 遮罩层的 onTouchStart 事件、优化在拖动时的体验
- 修复 Radio 同 Accordion 一起使用样式冲突问题 #542 ；优化 List.Body 样式； ImagePicker 添加按钮支持点击反馈
- 修复 Checkbox、Radio、Tag、InputItem 等组件样式细节问题；优化 Flex 组件 demo
- 增加 React基础、相关工具、应用架构文档指南；并优化“安装&使用”文档、使之更紧凑清晰

## 0.9.7

`2016-11-11`

- 修复 ListView 遗漏 ref 设置问题 https://github.com/ant-design/ant-design-mobile/commit/2e32956d405880f2fdca3cc88cd7c3b1b7784b7f
- 补充或删除 ActionSheet、Badge、ListView、Pagination、RefreshControl、Steps 依赖组件的样式
- 整理 ts PropsType 文件 #495
- 修复 Radio 组件默认选中问题，改进 demo 展示
- 改进 SearchBar、ImagePicker 等组件 demo 展示，统一文档格式
- TextareaItem 在非受控模式下支持自动高度功能 #459
- 修复 Checkbox、Radio 非受控状态失效问题，并改进 demo 和文档展示

## 0.9.6

`2016-11-05`

- 修复 Stepper 组件弹出键盘和点击反馈问题 https://github.com/ant-design/ant-design-mobile/commit/94f4e54ab6bb9800fc987cc57d806b5921b11c9d
- 修复 Tabs选项卡高度不一致问题 https://github.com/ant-design/ant-design-mobile/commit/f4bb4bc86e2a8400fb74a69e9f0a2359ce512b0b
- 修复 InputItem, TextareaItem value 不接受 undefined 问题 https://github.com/ant-design/ant-design-mobile/commit/114fb1ed871acd94433129fda95a30649420aa2a ；支持添加所有HTML input/textarea 支持的属性(如自定义 pattern 等)
- 修复 android textInput underlineColorAndroid https://github.com/ant-design/ant-design-mobile/commit/8095c924fda68f1b38acae1af09822daae95c3d2
- 优化  Accordion, Checkbox, Popup, Badge, InputItem, TextareaItem, ListView 等组件演示文档和部分核心实现。
- Accordion 文档增加遗漏的 openAnimation API 说明 https://github.com/ant-design/ant-design-mobile/commit/951811484d192c2383b6f5c6815148ee1e44fab6
- 修复 Grid rn 实现不完全问题，并优化代码 https://github.com/ant-design/ant-design-mobile/commit/839fe3518497406dc2bf9c3db82ee89d0e0e5c8f

## 0.9.5

`2016-10-28`

- 修复部分组件点击反馈属性 warning, #416
- 更正 DatePicker 组件 API 文档，优化 Progress 演示、增加自定义 style 支持
- 修复 Modal.prompt 有时无法 focus 问题 #415 #409
- 移除 SegmentedControl default props tintColor #432
- 修复部分组件 ts props 验证
- 重构 NoticeBar 组件，使 click 事件能在整个区域触发（除了关闭模式）
- 完善并修复 Result、Toast、rn Popup Modal 等组件 demo ；修复部分 css 变量

## 0.9.4

`2016-10-21`

- Button 组件修复 #396
- 修复 rn-checkbox, rn-radio 支持受控组件 https://github.com/ant-design/ant-design-mobile/commit/6f47c36b8e3729674dc63eaaa39cfac05b125f3c  https://github.com/ant-design/ant-design-mobile/commit/5960cd11a94570cfc0b874fa2f05ab0f2bce466a

## 0.9.3

`2016-10-17`

- 部分组件支持`data-api` https://github.com/ant-design/ant-design-mobile/commit/8972f980d0dddee30fd61ebaa0f75fc07a7a36b3
- 修复 iOS 下 Modal 里内容滑动时引起背静内容滚动问题  #163 #307
- `ImagePicker`新增三个属性`onAddImageClick`, `selectable`, `onImageClick`, https://github.com/ant-design/ant-design-mobile/commit/bb7e461eea71bb8ffdd2477b1b17a714beb21eb1 #252 #297 #357
- 更新部分组件 demo 及文档细节 bug 修复

## 0.9.2

`2016-10-10`

- Tag 增加 closable 支持 #348
- package 中 dist 目录 css 样式以 rem 为主要单位，方便直接引用样式而不会放大

## 0.9.1

`2016-10-09`

- 修复 tabbar `icon`、`selectedIcon` 直接 require 图片不显示问题 #343
- 修复`InputItem` pattern bug https://github.com/ant-design/ant-design-mobile/commit/e2b1d4336f6a19ee80667c3383c12861448937e0
- 修复`Button` css 变量未引用问题 #339
- 修复`Picker`样式 https://github.com/ant-design/ant-design-mobile/commit/e7cf959fb6978b5b6fa37294007b8f214477f625 , 新增`onPickerChange`api https://github.com/ant-design/ant-design-mobile/commit/69e142cddc99b0d99ae23f3435e801ddd6ab014d
- 更新 rn list-view demo https://github.com/ant-design/ant-design-mobile/commit/c0b4ae4797a9fac3a00c8272becc2709c2846039

## 0.9.0

`2016-09-30`

- List 组件 API 调整为与 ListView 保持一致，移除List.Body， List.Footer，List.Header，title 和 footer 属性变更为 renderHeader 和 renderFooter 方法 [#257](https://github.com/ant-design/ant-design-mobile/issues/257)
- 使用 [zscroller](https://github.com/yiminghe/zscroller) 重构 ListView。新增 `renderSectionBodyWrapper` 来支持渲染自定义的区块包裹组件，新增[scrollerOptions](https://github.com/yiminghe/zscroller#options)
- 使用 zscroller 来支持 RefreshControl (`useBodyScroll` and sticky 失效)，刷新回调函数由 loadingFunction 调整为 onRefresh，增加 refreshing 设置是否显示刷新状态 [#](https://github.com/ant-design/ant-design-mobile/issues/288)。RefreshControl 只能和 ListView 结合使用，不能单独使用。
- 修复 Modal & SegmentedControl touch feedback效果 [#195](https://github.com/ant-design/ant-design-mobile/issues/195)
- 更新 Tabbar，支持 `hidden` prop
- Steps 组件 icon 支持 React.Element
- 修复 Badge、NavBar、ActivityIndicator、Stepper 组件的一些样式细节问题。
- 修复 Carousel dots 隐藏失效的问题
- 修复 android uc modal 样式问题 [#](https://github.com/ant-design/ant-design-mobile/issues/283)
- 修复 SegmentedControl 在模拟器下的样式问题

## 0.8.6

`2016-09-23`

- 修复 Carousel dot 样式问题 #302
- 修复 Tabbar 文字居中问题 #310
- 修复 多个 Modal closable icon 不显示的问题
- 修复 NavBar 返回 Icon 不显示的问题； #302
- 修复 List 箭头指向 和 单行展示问题 #273 #274
- 修复 DatePicker demo
- 更新 Modal，API `dialog` 改为 `transparent`
- 新增 List 结合 rc-form demo
- 增加 less 文件的入口，方便配置工具统一加载样式。 https://github.com/ant-design/ant-design-mobile/pull/267
- 优化 Badge 样式
- 优化 ActivityIndicator demo, 网站组件分类优化

## 0.8.5

`2016-09-14`

- 修复 Picker 和 DatePicker `extra`设置在 ListItem 上不生效问题 #241
- 去除 Button  `size=small` 只在 `inline` 设置后生效的限制
- 修复 Button 组件在 pc 版本的 demo 里的按下效果 #244
- 优化 Picker / DatePicker 点击反馈效果 https://github.com/ant-design/ant-design-mobile/commit/adb5a45ae35e13f64d4f295dd328cf9da45aec57  #195
- 去除 Stepper 组件的 input 不能输入限制，并更改`readOnly`默认值 https://github.com/ant-design/ant-design-mobile/commit/8325f6444970559e465d71df625e81cbe57c0b85#commitcomment-19012543
- 优化 Drawer / Popup 等组件 demo，网站展示细节优化

## 0.8.3

`2016-09-09`

- `Checkbox` 修复同意协议这种场景下，label中有协议无法触发`onClick`的bug。
- `SearchBar` 优化动画效果。
- `Carousel` 修改为基于`nuka-carousel`。原有`card`模式不再提供，需自行定制。

ps: 目前`listview` 和 `refresh-control` 不兼容，正在修复中

## 0.8.2

`2016-09-07`

- 给`body`标签设置默认背景色，以及默认的`font-size`,`html`设置默认的`font-size`。
- `Grid`属性扩展，每行列数可配置，提供`renderItem`方法。
- 修复`Checkbox`、`Radio`样式细节以及兼容性问题。
- `SearchBar`输入框`Blur`状态时`placeholder`固定靠左对齐。
- `Menu`高度计算bugfix。

## 0.8.1

`2016-09-02`

- 修复并整理各弹出层类组件 z-index 顺序 https://github.com/ant-design/ant-design-mobile/commit/bb875c2a924f61cc03b8d013fd1a8f5ee8e22972
- Tab 增加禁止 swipeable 的功能 #209
- TabBar 更改为和 iOS 原生方式一致，保持 web 和 rn 统一，去掉 swipeable
- List组件 list-body 边框支持配置 https://github.com/ant-design/ant-design-mobile/commit/76760060cb5dfa5c9474b2174ee03db3c30b5197

## 0.8.0

`2016-08-31`

> UI 风格更换为 alipay 官方风格

- **Bug Fix**
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

- **新增 rn 组件**
  - Checkbox
  - Carousel
  - Radio
  - Steps
  - SearchBar
  - SegmentedControl
  - TabBar
  - Tabs

- **组件变更**
  - Timeline 移除
  - Tooltip 移除
  - Tabs 拆分为 SegmentedControl、TabBar、Tabs
  - Tabs tabPosition => tabBarPosition, animation => animated

- **组件更名**
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
