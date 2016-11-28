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


## API
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
