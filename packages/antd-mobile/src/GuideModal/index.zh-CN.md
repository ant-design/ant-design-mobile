---
title: 引导蒙层
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" compact />

### 参数

#### GuideModal
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| outStepEleIds | 需要镂空展示的页面元素id列表 | string[] | '' |
| fatigue | 疲劳度次数。localstorage实现的疲劳度 | number | 1 |
| storageKey | localstrorage存储的key | string | 'GUIDE_MODAL' |
| customNext | 是否需要自定义的下一步按钮引导区 | boolean | false |
| showSkip | 是否显示跳过功能 | boolean | false |
| onChange | 每一步变化时的回调 | (step: number, finished: boolean) => void | - |
| onMaskPress | 点击蒙层回调，可执行跳过或下一步 | (opts: { next(): void; skip(): void }) => void | - |

注意：
- outStepEleIds: 需要镂空展示的页面元素id列表，要按步骤展示的镂空元素按顺序传入数组，复制的元素会加上一个 class .amd-guide-modal-clone
- fatigue: 疲劳度次数。localstorage实现的疲劳度
- storageKey: localstrorage存储的key，适用于页面含有多个不连贯需要一定条件唤起的遮罩引导区, 注意：**如果页面含有多个独立的引导区，一定要设置该值**，以免localStorage的缓存判断混乱
- 注意镂空的元素是采用 clone 的方式 fixed 定位的，因此会自带 BFC ，这表明被镂空的元素最好也是 BFC 的，不然可能会出现视觉上错位的


#### Step

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| nextBtnText | 下一步按钮的文案 | string | '' |

支持在内置next下一步按钮模式下设置按钮文案

#### Next

可以引入`Next`组件作为控制器后，对下一步模式进行自定义样式开发

### 注意

不要在镂空元素的父级加 transform 样式，会影响到 fixed 定位
