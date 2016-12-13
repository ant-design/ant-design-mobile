---
category: Components
type: Combination
chinese: 长列表
english: ListView
---


单个连续模块垂直排列，显示多行文本内容。eg：城市选择。

### 规则
- 最适用于显示同类的数据类型或者数据类型组。
- 只支持垂直滚动。
- 可以通过日期、字母顺序或者其它参数来过滤数据或改变每行列表的顺序。


## API ( 适用平台：WEB、React-Native )

same as [React Native ListView](https://facebook.github.io/react-native/docs/listview.html#content)
(v0.26).

#### 不支持的特性
> 一般情况下，不支持“平台特有”的API，例如`android`endFillColor、`iOS`alwaysBounceHorizontal。
另外，使用 css 代替 react-native 的 style 设置方式。

- onChangeVisibleRows
- stickyHeaderIndices
- [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html#props) props:
    - keyboardDismissMode
    - keyboardShouldPersistTaps
    - onContentSizeChange (使用`onLayout`替代)
    - removeClippedSubviews
    - scrollEnabled
    - showsHorizontalScrollIndicator (使用 css style 替代)
    - showsVerticalScrollIndicator (使用 css style 替代)
- [View](https://facebook.github.io/react-native/docs/view.html#props) props: **只支持`onLayout`**

#### 新增API (web)
- useBodyScroll (boolean, false) - 使用 html 的 `body` 作为滚动容器
- stickyHeader 固定区块标题到页面顶部 (注意: 设置后，ScrollComponent 将被渲染到 body 的第一个元素里，使用 html 的 `body` 作为滚动容器)
    - stickyProps / stickyContainerProps (see [react-sticky](https://github.com/captivationsoftware/react-sticky))
- renderBodyComponent 渲染自定义的 body 组件
- renderSectionBodyWrapper - 渲染自定义的区块包裹组件
- useZscroller (boolean, false) - 使用 zscroller 来支持 RefreshControl (`useBodyScroll` and sticky 失效)
- scrollerOptions - [zscroller options](https://github.com/yiminghe/zscroller#options)

### ListView.IndexedList
> 注意：由于需要直接scroll到任意位置、只支持分两步渲染，所以列表数据量过大时、性能会有影响

支持右侧导航功能

- quickSearchBarTop (object{value:string, label:string}, 默认为'#') - 快捷导航栏置顶按钮
- quickSearchBarStyle (object) - quickSearchBar 的 style
- onQuickSearch (function()) 快捷导航切换时触发
- delayTime (number) - 默认 100ms, 延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`）
- delayActivityIndicator (react node) - 延迟渲染的 loading 指示器

## 常见问题与实现原理

- onEndReached不停调用 https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596
- 如何设置滚动到固定的位置？(例如，点击列表某一项进入另一个页面，再返回) #541
- 其他问题：#633 #573

ListView 有三种类型的滚动容器：

1. html 的 body 容器
2. 局部 div 容器 (通过 ref 获取到)
3. 使用 zscroller 的模拟滚动容器

前两种获取到相应元素后，调用 scrollTo 方法、滚动到指定位置；
第三种通过 ref 获取到组件对象、再获取到 domScroller 、调用 scrollTo 方法。
但滚动到具体什么位置，业务上其实也比较难确定。

对 dataSource 对象变化时的处理方式：
ListView 在 componentWillReceiveProps 里会监听 dataSource 对象的变化，并做一次
[`this._renderMoreRowsIfNeeded()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156) ，
由于此时[`this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348)
即已经渲染的数据与 dataSource 里已有的数据项个数相同，所以 ListView 认为应该再调用 onEndReached 方法。
