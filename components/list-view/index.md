---
category: Components
type: Components
chinese: 列表
english: ListView
---

react-native 核心组件，高性能列表，提供无尽列表功能

## API
same as [React Native ListView](https://facebook.github.io/react-native/docs/listview.html#content)
(v0.26).

#### current not support:
In general, do not support platform-specific feature,
like: `android` endFillColor, `ios` alwaysBounceHorizontal.
And, use css style instead of react-native's style.

- onChangeVisibleRows
- stickyHeaderIndices

- [ScrollView](https://facebook.github.io/react-native/docs/scrollview.html#props) props:
- keyboardDismissMode (not support control keyboard)
- keyboardShouldPersistTaps (not support control keyboard)
- onContentSizeChange (use onLayout instead)
- removeClippedSubviews
- showsHorizontalScrollIndicator (use css style instead)
- showsVerticalScrollIndicator (use css style instead)

- [View](https://facebook.github.io/react-native/docs/view.html#props) props: **note: just support `onLayout` prop**

#### new
- stickyHeader
    - stickyProps / stickyContainerProps
- renderBodyComponent
