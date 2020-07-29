/*
 *
 * 不同的 tab items 种类，根据 tabs 组件的 type 字段决定
 * basis：默认样式，默认态为纯文字，选中态底部有一根蓝线
 * capsule：胶囊样式，默认态为灰底黑字，选中态为蓝底白字
 * mixin：混合样式，分为主文案和描述文案。主文案为默认样式，描述文案为胶囊样式
 *
 */

import * as React from 'react'
import { TabTitlePropsType } from './PropsType'

export interface TabItemPropsType {
  item: TabTitlePropsType
}

export const BasisTabItem: React.FC<TabItemPropsType> = ({ item }) => {
  return (
    <span className="amd-tabs-basis">
      {item.title}
      <i className="amd-tabs-basis-decorator" />
    </span>
  )
}

export const CapsuleTabItem: React.FC<TabItemPropsType> = ({ item }) => {
  return (
    <div className="amd-tabs-capsule">
      {item.title}
      {!!item.badge && <span className="amd-tabs-badge">({item.badge})</span>}
    </div>
  )
}

export const MixinTabItem: React.FC<TabItemPropsType> = ({ item }) => {
  return (
    <div className="amd-tabs-mixin">
      <div className="amd-tabs-mixin-title">{item.title}</div>
      <div className="amd-tabs-mixin-desc">{item.desc}</div>
    </div>
  )
}
