# Mask 遮罩层

<code src="./demos/demo1.tsx" />

# API

| 属性              | 说明                                       | 类型                                                             | 默认值    |
| ----------------- | ------------------------------------------ | ---------------------------------------------------------------- | --------- |
| visible           | 是否可见                                   | boolean                                                          | false     |
| onMaskClick       | 点击蒙层自身触发                           | (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | -         |
| destroyOnClose    | 不可见时卸载内容                           | boolean                                                          | false     |
| forceRender       | 强制渲染内容                               | boolean                                                          | false     |
| opacity           | 透明度                                     | 'default' \| 'dark' \| number                                    | 'default' |
| getContainer      | 指定 Mask 挂载的 HTML 节点，默认为当前节点 | HTMLElement \| () => HTMLElement \| undefined                    | undefined |
| afterClose        | 完全关闭后触发                             | () => void                                                       | -         |
| disableBodyScroll | 是否禁用 body 滚动                         | boolean                                                          | true      |
