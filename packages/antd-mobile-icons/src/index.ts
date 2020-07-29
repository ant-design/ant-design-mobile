export * from './icons'

// 为了避免刚好有个图标叫 base-icon，在导出的 name 前加 _
export { default as _BaseIcon } from './BaseIcon'
export { default as _getIconByMeta } from './getIconByMeta'
