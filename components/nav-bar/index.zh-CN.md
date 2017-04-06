---
category: Components
type: Navigation
title: NavBar
subtitle: 导航栏
---

位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。

### 规则

-  可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。
-  可在导航栏中使用 SegmentedControl 对内容进行层级划分。
-  避免用过多的元素填满导航栏。一般情况下，一个『返回按钮』、一个『标题』、一个『当前视图的控件』就足够了；如果已经有了 SegmentedControl ，一般只搭配一个『返回按钮』或者『当前视图的控件』。
-  为图标和文字控件，提供更大的点击热区，至少在 44dp * 44dp 以上。

## API

适用平台：WEB

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| children   | 导航内容      | any |    无  |
| mode   | 导航模式   | string |  'dark' enum{'dark', 'light'} |
| iconName   | 左边 icon name (设置为 false/null 不渲染此图标)  | string/false/null |  'left' |
| leftContent   | 导航左边内容      | any |    无  |
| rightContent   | 导航右边内容      | any |    无  |
| onLeftClick   | 导航左边点击回调      | (e: Object): void |    无  |
