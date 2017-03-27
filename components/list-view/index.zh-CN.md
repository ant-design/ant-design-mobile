---
category: Components
type: Combination
title: ListView
subtitle: 长列表
---

最适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果


## API

适用平台：WEB、React-Native

- React-Native 平台直接使用 [React Native ListView](https://facebook.github.io/react-native/docs/listview.html#content)
- WEB 平台使用 [React Native ListView(v0.26) 的 API](http://facebook.github.io/react-native/releases/0.26/docs/listview.html)，但有一些差异，以下列出差异详情

#### React Native ListView 在 WEB 平台上不被支持的 API 列表：
> 一般情况下，不支持“平台特有”的API，例如`android`endFillColor、`iOS`alwaysBounceHorizontal。
另外，使用 css 代替 react-native 的 style 设置方式。

- onChangeVisibleRows
- stickyHeaderIndices
- [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html#props) 组件中不被支持的 API:
    - keyboardDismissMode
    - keyboardShouldPersistTaps
    - onContentSizeChange (可使用`onLayout`替代)
    - removeClippedSubviews
    - scrollEnabled
    - showsHorizontalScrollIndicator (可使用 css style 替代)
    - showsVerticalScrollIndicator (可使用 css style 替代)
- [View](https://facebook.github.io/react-native/docs/view.html#props) 组件 API: **只支持`onLayout`**


#### WEB 平台新增API

- useBodyScroll (boolean, false) - 使用 html 的 `body` 作为滚动容器
- stickyHeader (boolean, false) - 固定区块标题到页面顶部 (注意: 设置后会自动使用 html 的 `body` 作为滚动容器)
    - 开启 sticky 后还可以设置 stickyProps / stickyContainerProps (详见 [react-sticky](https://github.com/captivationsoftware/react-sticky))
- renderBodyComponent (function, () => React.Element) - 自定义 body 的包裹组件
- renderSectionBodyWrapper (function, (sectionID: any) => React.Element) - 渲染自定义的区块包裹组件
- useZscroller (boolean, false) - 使用 zscroller 来模拟实现滚动容器 (可用于一些低端 Android 机上)
    - 注意：开启后`useBodyScroll`和`stickyHeader`设置会自动被忽略
- scrollerOptions - 详见 [zscroller options](https://github.com/yiminghe/zscroller#options)


### WEB 平台新增 ListView.IndexedList 组件

此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。

> 注意：由于索引列表可以点击任一项索引来定位其内容、即内容需要直接滚动到任意位置，这样就难以做到像 ListView 一样能在滚动时自动懒渲染。
目前实现上只支持分两步渲染，能借此达到首屏优先显示目的，但如果列表数据量过大时、整体性能仍会有影响。

- quickSearchBarTop (object{value:string, label:string}, value/label 默认为'#') - 快捷导航栏最顶部按钮、常用于回到顶部
- quickSearchBarStyle (object) - quickSearchBar 的 style
- onQuickSearch (function, (sectionID: any, topId?:any) => void) 快捷导航切换时调用
- delayTime (number) - 默认 100ms, 延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`）
- delayActivityIndicator (react node) - 延迟渲染的 loading 指示器


## 常见问题与实现原理

- onEndReached 为什么会不停调用？ https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596
- 如何设置滚动到列表的某一位置？(例如，点击列表某一项进入另一个页面，再返回到原位置) #541
- 其他问题：#633 #573

ListView 有三种类型的滚动容器：

1. html 的 body 容器
2. 局部 div 容器 (通过 ref 获取到)
3. 使用 zscroller 的模拟滚动容器

前两种获取到相应元素后，调用 scrollTo 方法、滚动到指定位置；
第三种通过 ref 获取到组件对象、再获取到 domScroller 、调用 scrollTo 方法。
但滚动到具体什么位置，业务上其实也比较难确定。

另一问题：对 dataSource 对象变化时的处理方式是什么？何时调用 onEndReached 方法？

ListView 在 componentWillReceiveProps 里会监听 dataSource 对象的变化，并做一次
[`this._renderMoreRowsIfNeeded()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156) ，
由于此时[`this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348)
即已经渲染的数据与 dataSource 里已有的数据项个数相同，所以 ListView 认为应该再调用 onEndReached 方法。
