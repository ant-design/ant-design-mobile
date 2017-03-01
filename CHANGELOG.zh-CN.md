---
order: 4
english: 更新日志
---

`antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* patch 版本：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* minor 版本：每月发布一个带有新特性的向下兼容的版本。
* 大版本号：含有破坏性更新和新特性，不在发布周期内。

---


### 1.0.1

`2017-02-24`

## Feature
- roadhog 支持配置 svg-sprite-loader [icon文档](https://mobile.ant.design/components/icon) ([#144](https://github.com/sorrycc/roadhog/pull/144))
- React Native 增加 `LocalProvider` 国际化方案 ([#886](https://github.com/ant-design/ant-design-mobile/pull/886))
- React Native `Button` , `Progress`, `TextareaItem` 支持自定义样式 ([#560](https://github.com/ant-design/ant-design-mobile/issues/560)) 
- 提供 0.9.x iconfont 图标对应的 svg icon ([#866](https://github.com/ant-design/ant-design-mobile/issues/866))

## Improve 
- 所有 demo 代码迁移到 ES6 class 和 Pure function，去除 React.createClass ([#824](https://github.com/ant-design/ant-design-mobile/issues/824))
- NavBar 返回间隔从 margin 改为 padding，增大点击区域 ([#844](https://github.com/ant-design/ant-design-mobile/issues/844))
- carouse 去除 mixin ([#859](https://github.com/ant-design/ant-design-mobile/pull/859))
- Tabs 新增 `className` ([#861](https://github.com/ant-design/ant-design-mobile/issues/861))
- stepper 改为使用 svg icon, 升级 rc-input-number
- 主题变量分类调整 ([ref](https://github.com/ant-design/ant-design-mobile/commit/daea9a38133e0670926af6c0bd9233057eb9c3aa))


## Bugfix
- 修复 List extra 为空的判断逻辑 ([#831](https://github.com/ant-design/ant-design-mobile/issues/831))
- 修复 Toast 不居中的问题 ([#827](https://github.com/ant-design/ant-design-mobile/issues/827))
- 修复 InputItem PC 上无法 clear 的 bug ([#832](https://github.com/ant-design/ant-design-mobile/pull/832))
- 修复 React-Native SearchBar onChange 重复触发的 bug ([#739](https://github.com/ant-design/ant-design-mobile/issues/739))
- 修复 TabBar icon 居中的问题 ([#836](https://github.com/ant-design/ant-design-mobile/issues/836))
- 修复带跑马灯效果的 Grid 组件初始化时跑马灯初始宽度为0的问题。([ref](https://github.com/ant-design/ant-design-mobile/commit/1a897c46999e2325acd3754e52dba9144d04695e))
- 修复 Button warning 的样式 ([#863](https://github.com/ant-design/ant-design-mobile/issues/863))



### 1.0.0

`2017-02-17`

## New Feature

- Icon 从 iconfont 转为使用 svg 图片 [#156](https://github.com/ant-design/ant-design-mobile/issues/156)。
- Icon 增加 React Native 版本，[接入指南](https://github.com/ant-design/ant-design-mobile/blob/master/components/icon/index.md#如何使用-rn)。
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

## Break Change

- NoticeBar type 变为 icon ，支持完全的自定义内容。
- Popover `iconName` 变为 `icon` ；分割线的 css 设置从底边线修改为顶边线。
- 修改部分 css 变量名和变量值、如：zindex 等。
- RN List 去除 last 属性。
- `DatePicker` 和 `Pagination` 不再接受 `okText`, `dismissText` 属性；`DatePicker`的`locale`属性结构变化，参见 [升级文档](https://github.com/ant-design/ant-design-mobile/blob/master/docs/react/upgrade-notes.md#其他常用组件更新注意事项)。
- 原 Web 版 `Slider` 拆分成 `Slider`, `Range`, `createTooltip`, 使用方式参见 [Slider文档](https://mobile.ant.design/components/slider), [Range文档](https://mobile.ant.design/components/range)。
- Toast 更改为 single instance，新显示的 toast 会覆盖老的；同时增加 mask 特性；。
- Modal 和 Switch 增加 android 平台独立 UI。

## Improve & Bugfix

- 各组件核心实现、样式、演示等全面优化。
- 各输入类组件受控与非受控状态问题修复。
- RN Carousel 支持根据子视图高度自适应，去除 height，width 设置。
- 修复部分组件(多为依赖 List)的多余边线等细节问题。
- 网站重新设计、更加轻盈简洁；优化了网站资源大小、加载速度更快。
- 修复 RN `CheckBox` 受控模式下的bug [#784](https://github.com/ant-design/ant-design-mobile/issues/784)。
- RN android tabbar 添加 iconStyle 支持。
- Modal，Toast，ActionSheet 从 api中 拆分出 component 形式。

### 0.9.15

`2017-02-15`

- 修复并优化 TextareaItem, Accordion, Popover, ListView, InputItem 等组件细节问题 #724 #725 #788 #426
- 修复 RN Grid 的 onClick点击失效问题 #755
- Toast 组件修改成单例模式，避免多个 toast 同时或无序出现的问题 #745
- Modal 组件在 alert / prompt 的 action 里增加 Promise 支持
- TabBar 组件 Android 代码新增 iconStyle 属性支持 #776
- SwipeAction 组件增加遮罩背景样式，并优化 demo

### 0.9.14

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

### 0.9.13

`2016-12-23`

- 修复 TextareaItem 设置 autoHeight 初始高度不对的问题 #671
- 修复 SreachBar placeholder 的 z-index 设置过高问题 #650
- 修改 List 左右内容平均占据空间的样式设置，凸显内容的主次之分 #655
- 全面替换 touchableFeedback 为 `rc-touchable`，同时修复 TS type 缺失问题 #636 #667
- 修复 Modal 文档错误，优化 Modal、SegmentedControl、TabBar (#646) 的实现和示例
- 修复 ListItem 没有 onClick 事件时也会触发点击反馈问题 #220#issuecomment-267587198
- 优化 ListView、InputItem、TextareaItem 等组件文档

### 0.9.12

`2016-12-15`

- 修复 SearchBar、Button、SegmentedControl  等 TypeScript 类型引用错误的问题
- 修复 Checkbox、Radio 在某些设备上点击 label 不会选中的兼容性问题
- 修复 InputItem 最后一项多余边线问题；重构 Carousel、Menu 核心实现
- 修正 NoticeBar 文字大小变量；修复 RN Radio 受控状态实现错误的问题
- 修复 RefreshControl 的`distanceToRefresh`设置，使其能自适应不同分辨率的屏幕
- 恢复 Picker、DatePicker 的 extra 设置并更新其文档，并增加自定义 children 的 demo
- 修复 Steps status error 状态展示问题；对 Popup 点击遮罩层的回调函数`onMaskClose`进行功能补充
- 优化 InputItem、TextareaItem、Picker、DatePicker 等组件 demo ，优化各组件文档细节

### 0.9.11

`2016-12-03`

- 修复 List 底部边线重叠显示问题、重构 List 点击反馈的实现方法；同步修复 ListView.IndexedList 边线重叠问题
- 修复 Checkbox 勾选箭头偏移问题 #581
- 修复 Steps 组件内部逻辑、改进部分样式设置
- 修复 SearchBar 动画表现不准确问题
- 改进[上手和使用文档](https://mobile.ant.design/docs/react/introduce#使用)写法
- 优化 Pagination、RefreshControl、Radio、Drawer、Popover、Result、NoticeBar 等组件实现和相应 demo
- 修复 RN InputItem Android 不能输入的问题 #603

### 0.9.10

`2016-11-25`

- 重构 SearchBar ，改为模拟的 placeholder 实现，并将其默认居中对齐
- 修复 Popup 组件点击遮罩层不会自动关闭 #555 #558
- 更正 RefreshControl 文档；修复部分组件 demo 在 pc 和 mobile 上展示不一致问题
- 修复 Toast 在 Modal 中使用被覆盖问题 #547
- 优化 Button、List 代码的 rn 实现；修正部分 demo 细节问题

### 0.9.9

`2016-11-18`

- 改进 Popup 样式 #525 , 默认禁止掉 popup 遮罩层的 onTouchStart 事件、优化在拖动时的体验
- 修复 Radio 同 Accordion 一起使用样式冲突问题 #542 ；优化 List.Body 样式； ImagePicker 添加按钮支持点击反馈
- 修复 Checkbox、Radio、Tag、InputItem 等组件样式细节问题；优化 Flex 组件 demo
- 增加 React基础、相关工具、应用架构文档指南；并优化“安装&使用”文档、使之更紧凑清晰

### 0.9.7

`2016-11-11`

- 修复 ListView 遗漏 ref 设置问题 https://github.com/ant-design/ant-design-mobile/commit/2e32956d405880f2fdca3cc88cd7c3b1b7784b7f
- 补充或删除 ActionSheet、Badge、ListView、Pagination、RefreshControl、Steps 依赖组件的样式
- 整理 ts PropsType 文件 #495
- 修复 Radio 组件默认选中问题，改进 demo 展示
- 改进 SearchBar、ImagePicker 等组件 demo 展示，统一文档格式
- TextareaItem 在非受控模式下支持自动高度功能 #459
- 修复 Checkbox、Radio 非受控状态失效问题，并改进 demo 和文档展示

### 0.9.6

`2016-11-05`

- 修复 Stepper 组件弹出键盘和点击反馈问题 https://github.com/ant-design/ant-design-mobile/commit/94f4e54ab6bb9800fc987cc57d806b5921b11c9d
- 修复 Tabs选项卡高度不一致问题 https://github.com/ant-design/ant-design-mobile/commit/f4bb4bc86e2a8400fb74a69e9f0a2359ce512b0b
- 修复 InputItem, TextareaItem value 不接受 undefined 问题 https://github.com/ant-design/ant-design-mobile/commit/114fb1ed871acd94433129fda95a30649420aa2a ；支持添加所有HTML input/textarea 支持的属性(如自定义 pattern 等)
- 修复 android textInput underlineColorAndroid https://github.com/ant-design/ant-design-mobile/commit/8095c924fda68f1b38acae1af09822daae95c3d2
- 优化  Accordion, Checkbox, Popup, Badge, InputItem, TextareaItem, ListView 等组件演示文档和部分核心实现。
- Accordion 文档增加遗漏的 openAnimation API 说明 https://github.com/ant-design/ant-design-mobile/commit/951811484d192c2383b6f5c6815148ee1e44fab6
- 修复 Grid rn 实现不完全问题，并优化代码 https://github.com/ant-design/ant-design-mobile/commit/839fe3518497406dc2bf9c3db82ee89d0e0e5c8f

### 0.9.5

`2016-10-28`

- 修复部分组件点击反馈属性 warning, #416
- 更正 DatePicker 组件 API 文档，优化 Progress 演示、增加自定义 style 支持
- 修复 Modal.prompt 有时无法 focus 问题 #415 #409
- 移除 SegmentedControl default props tintColor #432
- 修复部分组件 ts props 验证
- 重构 NoticeBar 组件，使 click 事件能在整个区域触发（除了关闭模式）
- 完善并修复 Result、Toast、rn Popup Modal 等组件 demo ；修复部分 css 变量

### 0.9.4

`2016-10-21`

- Button 组件修复 #396
- 修复 rn-checkbox, rn-radio 支持受控组件 https://github.com/ant-design/ant-design-mobile/commit/6f47c36b8e3729674dc63eaaa39cfac05b125f3c  https://github.com/ant-design/ant-design-mobile/commit/5960cd11a94570cfc0b874fa2f05ab0f2bce466a

### 0.9.3

`2016-10-17`

- 部分组件支持`data-api` https://github.com/ant-design/ant-design-mobile/commit/8972f980d0dddee30fd61ebaa0f75fc07a7a36b3
- 修复 iOS 下 Modal 里内容滑动时引起背静内容滚动问题  #163 #307
- `ImagePicker`新增三个属性`onAddImageClick`, `selectable`, `onImageClick`, https://github.com/ant-design/ant-design-mobile/commit/bb7e461eea71bb8ffdd2477b1b17a714beb21eb1 #252 #297 #357
- 更新部分组件 demo 及文档细节 bug 修复

### 0.9.2

`2016-10-10`

- Tag 增加 closable 支持 #348
- package 中 dist 目录 css 样式以 rem 为主要单位，方便直接引用样式而不会放大

### 0.9.1

`2016-10-09`

- 修复 tabbar `icon`、`selectedIcon` 直接 require 图片不显示问题 #343
- 修复`InputItem` pattern bug https://github.com/ant-design/ant-design-mobile/commit/e2b1d4336f6a19ee80667c3383c12861448937e0
- 修复`Button` css 变量未引用问题 #339
- 修复`Picker`样式 https://github.com/ant-design/ant-design-mobile/commit/e7cf959fb6978b5b6fa37294007b8f214477f625 , 新增`onPickerChange`api https://github.com/ant-design/ant-design-mobile/commit/69e142cddc99b0d99ae23f3435e801ddd6ab014d
- 更新 rn list-view demo https://github.com/ant-design/ant-design-mobile/commit/c0b4ae4797a9fac3a00c8272becc2709c2846039

### 0.9.0

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

### 0.8.6

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
