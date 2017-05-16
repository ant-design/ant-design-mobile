---
category: Components
type: Combination
title: ListView
---

It is suitable for displaying the long list data type of the same kind, and has certain optimization effect on the rendering performance.


## API

Support WEB, React-Native.

- React-Native version use [React Native ListView](https://facebook.github.io/react-native/docs/listview.html#content) directly.
- WEB version use [React Native ListView(v0.26)](http://facebook.github.io/react-native/releases/0.26/docs/listview.html)'s  API, but there are some differences that are listed below

#### The APIs of React-Native-ListView that are not supported on the web platform:
> In general, the "platform-specific" API is not supported, e.g. `android`endFillColor、`iOS`alwaysBounceHorizontal.

- onChangeVisibleRows
- stickyHeaderIndices
- the APIs of [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html#props) that are not supported:
    - keyboardDismissMode
    - keyboardShouldPersistTaps
    - onContentSizeChange (can use `onLayout` instead)
    - removeClippedSubviews
    - scrollEnabled
    - showsHorizontalScrollIndicator (can use `css style` instead)
    - showsVerticalScrollIndicator (can use `css style` instead)
- the APIs of [View](https://facebook.github.io/react-native/docs/view.html#props): only do not fully support `onLayout`


#### Added APIs on the WEB platform

- useBodyScroll (boolean, false) - use html `body` as a scroll container.
- stickyHeader (boolean, false) - sticky block header to the top of the page (Note: will automatically use html `body` as a scroll container).
    - After enabling it, you can also set `stickyProps / stickyContainerProps` (see [react-sticky](https://github.com/captivationsoftware/react-sticky) for details)
- renderBodyComponent (function, () => React.Element) - custom body package component.
- renderSectionBodyWrapper (function, (sectionID: any) => React.Element) - render a custom block wrapper component.
- useZscroller (boolean, false) - use [zscroller](https://github.com/yiminghe/zscroller) to simulate the implementation of rolling containers (can be used for some poor Android machine)
    - Note: After enabling, the `useBodyScroll` and` stickyHeader` settings are automatically ignored.
- scrollerOptions - see [zscroller options](https://github.com/yiminghe/zscroller#options) for details.


### New `ListView.IndexedList` component on the WEB platform

This component is often used in the "Contacts" / "city list" scenes, support for index navigation.

> Note: Only two-step rendering is supported, so that the first screen priority display can be achieved, but if the list data volume is too large, the overall performance will still be affected.

- quickSearchBarTop (object{value:string, label:string}, value/label default is '#') - top button of navigation bar.
- quickSearchBarStyle (object) - quickSearchBar's style.
- onQuickSearch (function, (sectionID: any, topId?:any) => void) - fire on clicking navigation bar.
- delayTime (number) - default 100ms, delay rendering time setting (for the first screen optimization, the initial rendering of the number of `initialListSize` data, after which time rendering the remaining data items, ie `totalRowCount - initialListSize`).
- delayActivityIndicator (react node) - the loading indicator for delayed rendering.
