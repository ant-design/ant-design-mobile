# 更新日志

## [3.0.0-alpha.8](https://github.com/ant-design/ant-design-mobile/compare/v3.0.0-alpha.7...v3.0.0-alpha.8)(2020-11-19)
* Icon: 使用全新的 icon 命名体系，见 [Icon](../components/icon)

## [3.0.0-alpha.7](https://github.com/ant-design/ant-design-mobile/compare/v3.0.0-alpha.5...v3.0.0-alpha.7)(2020-11-04)
* NumericInput: 更新最新设计稿，同时新增 props.showEmptyHeader

## [3.0.0-alpha.5](https://github.com/ant-design/ant-design-mobile/compare/v3.0.0-alpha.4...v3.0.0-alpha.5)(2020-11-02)

### Feature & Breaking Changes
* Form: 新增 Form 组件，详见 [Form 表单设计](../wiki/form)

* Button: 新增 htmlType 属性，使其可以触发表单提交

* Checkbox: 重写 Checkbox
  * 内置 input
  * 不再依赖 rc-checkbox
  * 支持受控非受控
  * 新增 Checkbox.Group 用法

* InputItem: 重写 InputItem
  * 支持受控非受控
  * 移除 label 等附加样式属性
  * 现在可以使用 Form 来代替原先的
  * 修复清除按钮无法触发 onChange 的 bug

* NumericInput: 调整
  * 内置 input
  * 调整了键盘出现的逻辑，现在键盘的出现与内置的 input 的 focus 保持一致（除了 pc 上的特别逻辑）
  * 现在重复通过 调用 `ref.focus()` 不会出现 focus/blur 切换的效果

* Picker: 调整
  * 内置 input
  * 支持受控非受控
  * 移除 extra 等属性
  * 重写触发 Picker 的逻辑

* Radio: 调整
  * 不再依赖 rc-checkbox，更换成 Checkbox
  * 将 Radio 单独成组件（由于视觉原因没有暴露）

* SearchBar: 调整了受控与非受控的逻辑

* Selector: 重写 Selector
  * 支持受控非受控
  * 回调的参数仅有 Value[]
  * 传入参数 data 移除 active 属性

* Switch: 调整
  * 内置 input
  * 支持受控非受控

* Terms: 调整
  * 支持受控非受控

### Breaking Changes for style
除去以上大量重写的组件以外，以下的样式也有调整
* style: 移除 body 上的默认 font-size
* List: 样式层级减少，如果有复写样式的情况，请重新调整
* NumericInput: 样式名调整，如果有复写样式的情况，请重新调整
* Switch: 样式名调整，如果有复写样式的情况，请重新调整
* Terms: 样式名调整，如果有复写样式的情况，请重新调整
