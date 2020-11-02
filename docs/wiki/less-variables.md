# 内置 less 变量

> 以下内容可能会更新不及时，以代码中实际生效的为准

## 全局

```less
// 375 基础下的 1x 基础值，比如 10*@hd 转换成 10/50rem 用于在移动端做到等比缩放
@hd: 1px;
// 修正后的 line-height
@default-line-height: 1.4;
// active 的不透明度
@opacity-active: 0.7;
// 数字字体
@DINPro: DINPro, @font-family-alipay-number, PingFang SC, sans-serif;

//业务色
@color-brand-1: #1677ff; //品牌色
@color-brand-2: #e7f1ff;
@color-red-1: #f93a4a; //正红
@color-red-2: #ffeeef;
@color-pink-1: #ff6565; //粉红
@color-pink-2: #ffeeee;
@color-tangerine-1: #ff6010; //橘红
@color-tangerine-2: #ffece3;
@color-orange-1: #ff8f1f; //橘黄
@color-orange-2: #ffefdf;
@color-golden-1: #c19030; //金黄
@color-golden-2: #fff3d9;
@color-golden-3: #fff9ed;
@color-pomonagreen-1: #00B578; //嫩绿
@color-pomonagreen-2: #d4fff1;
@color-darkgreen-1: #00bfd0; //青绿
@color-darkgreen-2: #ddfcff;
@color-skybule-1: #00b7f4; //天蓝
@color-skybule-2: #e0f7ff;
@color-royallight-1: #4876ff; //篮紫
@color-royallight-2: #ebefff;
@color-purple-1: #5260ff; //紫色
@color-purple-2: #edeeff;
@color-ironblack-1: #454955; //铁黑
@color-ironblack-2: #f1f1f1;

//背景色
@color-fill-primary: @color-brand-1; //主色
@color-fill-primary-light: @color-brand-2; //主色-浅
@color-fill-warning: #ff3b30; //警告色
@color-fill-grey-base: #ccc; //灰阶基础
@color-fill-grey-dark: #333; //灰阶-深
@color-fill-grey-light: #e5e5e5; //灰阶-浅
@color-fill-grey-inverse: #fff; //灰阶-反色
@color-divider-line: #eeeeee; //分割线
@color-divider-background: #f5f5f5; //分隔背景
@color-product-mask: rgba(0, 0, 0, 0.55); //产品蒙层
@color-marketing-mask: rgba(0, 0, 0, 0.75); //营销蒙层

//文字色
@color-text-primary: @color-brand-1; //主色
@color-text-primary-light: @color-brand-2; //主色-浅
@color-text-warning: #ff3b30; //警告色
@color-text-title: #333; //主标题
@color-text-subtitle: #999; //副标题
@color-text-weak: #ccc; //弱文案
@color-text-base: #fff; //基础色

//不透明度
@opacity-disabled: 0.4; //不透明度

//字体字号
@font-size-stress: 54 * @pixelSize; //页面核心强调
@font-size-title: 36 * @pixelSize; //大标题
@font-size-list: 34 * @pixelSize; //列表
@font-size-subtitle: 30 * @pixelSize; //小标题
@font-size-content: 26 * @pixelSize; //常规内容
@font-size-subcontent: 24 * @pixelSize; //次常规内容
@font-size-weak: 22 * @pixelSize; //弱化内容和弱辅助文案

//数字(数字常规字号跟文字一样，以下为特殊场景使用)
@font-family-alipay-number: DIN PRO;
@font-size-amount-core: 110 * @pixelSize; //核心大金额
@font-size-amount-largenumber: 90 * @pixelSize; //大数字金额
@font-size-amount-large: 60 * @pixelSize; //大金额
@font-size-number-keyboard: 50 * @pixelSize; //数字键盘

//行高
@line-height-base: 1; // 单行行高
@line-height-paragraph: 1.5; // 多行行高

//圆角
@corner-radius-sm: 4 * @pixelSize; //小
@corner-radius-md: 8 * @pixelSize; //中
@corner-radius-md-plus: 12 * @pixelSize; //中加
@corner-radius-lg: 16 * @pixelSize; //大
@corner-radius-circle: 50vh; //圆

//尺寸
@size-base: 8 * @pixelSize; //基础
@size-0: 0;
@size-1: @size-base * 1;
@size-2: @size-base * 2;
@size-3: @size-base * 3;
@size-4: @size-base * 4;
@size-5: @size-base * 5;
@size-6: @size-base * 6;
@size-7: @size-base * 7;
@size-8: @size-base * 8;
@size-9: @size-base * 9;
@size-10: @size-base * 10;
@size-11: @size-base * 11;
@size-12: @size-base * 12;
@size-13: @size-base * 13;
@size-14: @size-base * 14;
@size-15: @size-base * 15;
@size-16: @size-base * 16;
@size-17: @size-base * 17;
@size-18: @size-base * 18;
@size-19: @size-base * 19;
@size-20: @size-base * 20;

//间距
//水平间距
@h-spacing-standard: 16 * @pixelSize; //标准
@h-spacing-large: 24 * @pixelSize; //大间距

//垂直间距
@v-spacing-standard: 16 * @pixelSize; //标准
@v-spacing-large: 24 * @pixelSize; //大间距

//边框尺寸
@border-width-standard: 2 * @pixelSize; //标准
@border-width-thick: 4 * @pixelSize; //粗

//图标尺寸
@icon-size-xs: 36 * @pixelSize; //特小
@icon-size-sm: 44 * @pixelSize; //小
@icon-size-md: 56 * @pixelSize; //中
@icon-size-lg: 64 * @pixelSize; //大
```

## 组件级

### ActionSheet
```less
// 面板背景
@action-sheet-background: @color-divider-background;
// 面板圆角
@action-sheet-border-radius: @corner-radius-lg;
// title 和 item 的背景
@action-sheet-item-background: @color-fill-grey-inverse;
// title 字体颜色
@action-sheet-title-color: @color-text-subtitle;
// title 字体大小
@action-sheet-title-size: @font-size-subtitle;
// item 字体颜色
@action-sheet-item-color: @color-text-title;
// item 字体大小
@action-sheet-item-size: @font-size-title;
// cancel 上边距
@action-sheet-cancel-margin-top: @v-spacing-standard;
// 层级
@action-sheet-zindex: 999;
// mask 背景
@action-sheet-mask-background: @color-product-mask;
// standard 背景
@action-sheet-standard-background: @color-fill-grey-inverse;
// standard icon size
@action-sheet-standard-icon-size: 44 * @rpx;
// standard icon color
@action-sheet-standard-icon-color: @color-text-title;
```
### Avatar
```less
// 单头像
@avatar-img-only-size: 104 * @rpx;
// 有名字头像
@avatar-img-with-name-size: 72 * @rpx;
// 有名字和描述头像
@avatar-img-with-name-and-desc-size: 120 * @rpx;
// 名字颜色
@avatar-name-color: @color-text-title;
// 名字尺寸， 有名字有描述
@avatar-name-size: @font-size-title;
// 名字尺寸， 有名字无描述
@avatar-name-only-size: @font-size-list;
// 描述颜色
@avatar-desc-color: @color-text-subtitle;
// 描述尺寸
@avatar-desc-size: @font-size-subtitle;
```
### Badge
```less
// 行高，由于这里的字体都比较小，这里的行高用特殊的 1
@badge-line-height: 1;
// 背景色
@badge-bg-color: @color-red-1;
// 字体颜色
@badge-font-color: @color-text-base;
// 圆角
@badge-border-radius: @corner-radius-lg;
```
### Button
```less
/* size | 按钮内间距 */
@button-padding: @size-3;

/* corner-radius| 按钮圆角 */
@button-corner-radius: @corner-radius-md;

/* font-size | 副标题字号 */
@button-subtitle-size: @font-size-subcontent;

/* color | 按钮边框宽度 */
@button-border-size: @border-width-standard;

/* opacity | disable状态不透明度 */
@button-disabled-opacity: @opacity-disabled;

/* color | 默认按钮文字色 */
@button-color: @color-fill-grey-dark;

/* color | 默认按钮背景色 */
@button-background: @color-fill-grey-inverse;

/* color | 默认按钮边框色 */
@button-border-color: @color-fill-grey-light;

/* color |primary按钮背景色 */
@button-primary-background: @color-fill-primary;

/* color |primary按钮边框色 */
@button-primary-border-color: @color-fill-primary;

/* color |primary按钮文字色 */
@button-primary-color: @color-text-base;

/* color |ghost按钮边框色 */
@button-ghost-border-color: @color-fill-primary;

/* color |ghost按钮文字色 */
@button-ghost-color: @color-text-primary;

/* color |warn按钮背景色 */
@button-warn-background: @color-fill-warning;

/* color |warn按钮边框色 */
@button-warn-border-color: @color-fill-warning;

/* color |warn按钮文字色 */
@button-warn-color: @color-text-base;

/* color |warn-ghost按钮边框色 */
@button-warn-ghost-border-color: @color-fill-warning;

/* color |warn-ghost按钮文字色 */
@button-warn-ghost-color: @color-text-warning;

/* color |light按钮背景色 */
@button-light-background: @color-fill-primary-light;

/* color |light按钮边框色 */
@button-light-border-color: @color-fill-primary-light;

/* color |light按钮文字色 */
@button-light-color: @color-text-primary;

/* color |text按钮文字色 */
@button-text-color: @color-fill-primary;

/* size | 胶囊按钮圆角 */
@button-capsule-corner: @corner-radius-circle;

/* size | 胶囊按钮水平内间距 */
@button-capsule-padding-h: @size-3;

/* size | 胶囊按钮垂直内间距 */
@button-capsule-padding-v: @size-1;

/* font-size | 胶囊按钮大字号 */
@button-capsule-size-l: @font-size-subtitle;

/* font-size | 胶囊按钮中字号 */
@button-capsule-size-m: @font-size-content;

/* font-size | 胶囊按钮小字号 */
@button-capsule-size-s: @font-size-subcontent;
```
### Checkbox
```less
/* size | 大小 */
@checkbox-size: @icon-size-sm;

/* corner-radius| 圆角 */
@checkbox-corner-radius: @corner-radius-circle;

/* border-width | 边框宽度 */
@checkbox-border-width: @border-width-standard;

/* color | 边框颜色 */
@checkbox-border-color: @color-fill-grey-base;

/* color | check状态背景色 */
@checkbox-background: @color-fill-primary;

/* color | disabled状态背景色 */
@checkbox-disabled-background: @color-fill-grey-light;
```
### Collapse
```less
// 每一项的高度
@collapse-header-height: 96 * @rpx;
// 左右边距
@collapse-header-padding: @h-spacing-large;
// 背景色
@collapse-header-background: @color-fill-grey-inverse;
// 字体颜色
@collapse-header-color: @color-text-title;
// 字体大小
@collapse-header-size: @font-size-list;
// 箭头大小
@collapse-header-icon-size: 36 * @rpx;

// 背景色
@collapse-content-background: @color-fill-grey-inverse;
// 字体颜色
@collapse-content-color: @color-text-title;
// 字体大小
@collapse-content-size: @font-size-subtitle;
```
### Container
```less
// header 的边距
@container-header-spacing: @h-spacing-large;
// 字体颜色
@container-header-color: @color-fill-grey-dark;
// 图标颜色
@container-header-icon-color: @color-text-weak;
// 字体大小
@container-header-size: @font-size-subtitle;
// 边距
@container-spacing: @h-spacing-large;
// 圆角
@container-radius: @corner-radius-lg;
// 背景
@container-background: @color-fill-grey-inverse;
```
### Coupon
```less
// title 颜色
@coupon-title-color: @color-text-title;
// title 字体大小
@coupon-title-size: @font-size-subtitle;
// 描述 颜色
@coupon-desc-color: @color-text-subtitle;
// 描述 字体大小
@coupon-desc-size: @font-size-content;
// 边距
@coupon-spacing: @h-spacing-large;
// 圆角
@coupon-radius: @corner-radius-lg;
// 背景
@coupon-background: @color-fill-grey-inverse;
```
### ErrorBlock
```less
// 左右边距
@error-block-spacing: @h-spacing-large;
// 文字颜色
@error-block-text-color: @color-text-subtitle;
@error-block-text-size: @font-size-subtitle;
// 图片尺寸
@error-block-poster-size: 200 * @rpx;
// 按钮间的间距
@error-block-spacing-button: @h-spacing-large;
// 有 title 的时候距离上边距
@error-block-title-margin-top: 40 * @rpx;
// 文字上边距
@error-block-text-margin-top: @v-spacing-large;
// 内容区（按钮）上边距
@error-block-content-margin-top: 40 * @rpx;
```
### ErrorPage
```less
// 背景
@error-page-background: @color-fill-grey-inverse;
// 字体大小
@error-page-font-size: @font-size-subtitle;
// 图片大小
@error-page-poster-size: 400 * @rpx;
// 图片上边距
@error-page-poster-margin-top: 320 * @rpx;
// 文字上边距
@error-page-text-margin-top: 40 * @rpx;
// 副文字上边距
@error-page-subtext-margin-top: 24 * @rpx;
// 内容（按钮）上边距
@error-page-content-margin-top: 40 * @rpx;
// 按钮间间距
@error-page-button-spacing: @h-spacing-large;
```
### Footer
```less
// 背景
@footer-background: @color-fill-grey-inverse;
// 文字颜色
@footer-text-color: @color-text-weak;
// 文字大小
@footer-text-size: @font-size-content;
// tag 上边距
@footer-tag-margin-top: @v-spacing-large;
// tag padding
@footer-tag-padding-TB: 8 * @rpx;
@footer-tag-padding-LR: 24 * @rpx;
// tag 颜色
@footer-tag-color: @color-text-subtitle;
// tag 背景
@footer-tag-background: #f5f5f5;
// tag 字体大小
@footer-tag-size: @font-size-subcontent;
// tag 圆角
@footer-tag-radius: 24 * @rpx;
// tag 间距
@footer-tag-spacing: 40 * @rpx;

// link 下边距
@footer-link-margin-bottom: @v-spacing-standard;
// link 字体颜色
@footer-link-color: @color-brand-1;
// link 字体大小
@footer-link-size: @font-size-subcontent;
// link 间距
@footer-link-spacing: @v-spacing-large;

// logo 高度
@footer-logo-height: 36 * @rpx;
```
### GuideModal
```less
// guide 蒙层
@guide-modal-background: @color-marketing-mask;
// guide 指示器定位
@guide-modal-indicator-area-bottom: 225 * @rpx;
// guide 指示器背景
@guide-modal-indicator-background: @color-fill-grey-base;
// guide 按钮定位
@guide-modal-button-bottom: 120 * @rpx;
// guide 按钮间距
@guide-modal-button-spacing: @h-spacing-large / 2;
```
### HorizontalScrollbar
```less
@scrollbar-indicator-thumb-width: 26 * @rpx;
@scrollbar-indicator-thumb-color: @color-brand-1;
@scrollbar-indicator-track-color: #ddd;
@scrollbar-indicator-track-width: 52 * @rpx;
@scrollbar-indicator-indicator-height: 6 * @rpx;
@scrollbar-indicator-indicator-margin-top: 14 * @rpx;
```
### InputItem
```less
@input-item-height: 48 * @rpx;
// input 字体颜色
@input-item-color: @color-text-title;
// input 字体大小
@input-item-size: @font-size-content;
// input disabled color
@input-item-color-disabled: #bbb;
// input placeholder 颜色
@input-item-placeholder-color: @color-text-weak;
// input 清除 颜色
@input-item-clear-color: @color-text-subtitle;
```
### List
```less
// header 颜色
@list-header-color: @color-text-subtitle;
// header 字体大小
@list-header-size: @font-size-subtitle;
// footer 颜色
@list-footer-color: @color-text-subtitle;
// footer 字体大小
@list-footer-size: @font-size-content;
// 圆角
@list-radius: @corner-radius-lg;
// 背景
@list-background: @color-fill-grey-inverse;

// 主要文字大小
@list-content-size: @font-size-list;
// 辅助文字大小
@list-extra-brief-size: @font-size-subtitle;
// 主要文字颜色
@list-content-color: @color-text-title;
// 辅助文字颜色
@list-extra-brief-color: @color-text-subtitle;
// 图片尺寸
@list-icon-size: 56 * @rpx;
// 多行，图片尺寸
@list-multi-icon-size: 80 * @rpx;
```
### Loading
```less
// loading 尺寸
@loading-icon-size: 110 * @rpx;
// 辅助文字尺寸
@loading-text-size: @font-size-weak;
// 辅助文字颜色
@loading-text-color: @color-ironblack-1;
```
### Modal
```less
// modal 背景色
@modal-background: @color-fill-grey-inverse;
// 营销蒙层
@modal-mask-promo: @color-marketing-mask;
// 产品蒙层
@modal-mask-product: @color-product-mask;
// modal 圆角
@modal-radius: @corner-radius-lg;
// 标题大小
@modal-title-size: @font-size-title;
// 标题颜色
@modal-title-color: @color-text-title;
// 内容大小
@modal-content-size: @font-size-subtitle;
// 内容颜色
@modal-content-color: @color-text-title;
// 关闭图标尺寸
@modal-close-icon-size: 36 * @rpx;
```
### NoticeBar
```less
// 标准背景
@notice-background: @color-golden-3;
// 标准边框颜色
@notice-border-color: @color-golden-2;
// 标准字体颜色
@notice-color: @color-tangerine-1;
// 标准字体大小
@notice-font-size: @font-size-subtitle;
// 胶囊类背景
@notice-capsule-background: @color-fill-grey-inverse;
// 胶囊类图标大小
@notice-capsule-icon-size: @icon-size-sm;

// error 边框颜色
@notice-error-border-color: @color-golden-2;
// error 字体颜色
@notice-error-color: @color-text-base;
// error 背景
@notice-error-background: @color-fill-warning;

// active 边框颜色
@notice-active-border-color: tint(@color-fill-primary, 72%);
// active 字体颜色
@notice-active-color: @color-text-primary;
// active 背景
@notice-active-background: tint(@color-fill-primary, 80%);
```
### NumericInput
```less
// 键盘背景色
@numeric-input-background: @color-divider-line;
// 键盘边框
@numeric-input-border-color: #ccc;
// 按键间隔 大屏
@numeric-input-space-md: 16 * @rpx;
// 按键间隔 小屏
@numeric-input-space-sm: 4 * @rpx;
// header 颜色
@numeric-input-header-color: @color-text-subtitle;
// header 字体大小
@numeric-input-header-size: @font-size-content;
// 按键字体大小
@numeric-input-item-size: 50 * @rpx;
// 按键高度
@numeric-input-item-height: 96 * @rpx;
// 按键字体颜色
@numeric-input-item-color: @color-text-title;
// 按键字体
@numeric-input-item-family: @DINPro;
// 按键字体大小，小屏
@numeric-input-item-size-sm: 47 * @rpx;
// 按键高度，小屏
@numeric-input-item-height-sm: 82 * @rpx;

// 删除键大小
@numeric-input-delete-size: 56 * @rpx;

// 删除键大小
@numeric-input-confirm-size: 36 * @rpx;
@numeric-input-confirm-color: @color-text-base;
@numeric-input-confirm-background: @color-fill-primary;
```
### Picker
```less
// picker 蒙层
@picker-mask: @color-product-mask;
// picker 选项的高度
@picker-item-height: 68 * @rpx;
// picker 选项字体颜色
@picker-item-color: @color-text-title;
// picker 选项字体大小
@picker-item-size: 32 * @rpx;
// picker 选项选中字体大小
@picker-item-active-size: @font-size-list;

// 取消 和 确认按钮颜色
@picker-header-action-color: @color-brand-1;
// 取消 和 确认按钮大小
@picker-header-action-size: @font-size-title;
// header 的高度
@picker-header-height: 84 * @rpx;
// picker 层级
@picker-zindex: 1000;
```
### Popover
```less
// 蒙层
@popover-mask: @color-product-mask;
// 圆角
@popover-radius: @corner-radius-md;
// 背景
@popover-background: @color-fill-grey-inverse;
// 字体颜色
@popover-font-color: @color-text-title;
// 字体大小
@popover-font-size: @font-size-subtitle;
```
### Radio
```less
// active 是的图标颜色
@radio-color: @color-brand-1;
```
### Result
```less
// 图片尺寸
@result-img-size: 128 * @rpx;
// 主区域背景
@result-main-background: @color-fill-grey-inverse;
// 左右边距
@result-spacing-LR: @h-spacing-large;
// 主标题颜色
@result-title-color: @color-text-title;
// 主标题大小
@result-title-size: @font-size-title;
// 描述颜色
@result-desc-color: @color-text-subtitle;
// 描述大小
@result-desc-size: @font-size-content;
```
### SearchBar
```less
@search-bar-fill: @color-fill-grey-inverse;
@search-bar-height: 88 * @rpx;
@search-bar-input-height: 60 * @rpx;
@search-bar-input-padding: 68 * @rpx;
@search-bar-font-size: @font-size-content;
@search-bar-color-icon: @color-text-subtitle;
@search-bar-border-radius: 12 * @rpx;
```
### Selector
```less
// 间隔
@selector-collapse: @h-spacing-large;
// 背景
@selector-background: @color-fill-grey-inverse;
// 选项背景
@selector-item-background: @color-divider-background;
// 选项激活背景
@selector-item-active-background: @color-brand-2;
// 选项字体颜色
@selector-item-color: @color-text-title;
// 选项字体大小
@selector-item-size: @font-size-subtitle;
// 副文案颜色
@selector-item-sub-color: @color-text-subtitle;
// 副文案大小
@selector-item-sub-size: @font-size-content;
```
### Stepper
```less
// 字体大小
@stepper-font-size: 14 * @rpx;
// 加减边框
@stepper-handler-border-width: 2 * @rpx;
@stepper-handler-border-radius: 4.4 * @rpx;
@stepper-handler-border-color: @color-fill-grey-light;
// 文字颜色
@stepper-text-color: @color-text-title;
// 加减点击背景
@stepper-handler-tap-background: #ddd;
```
### Steps
```less
// 正常颜色
@steps-normal-color: @color-fill-grey-base;
// 激活颜色
@steps-active-color: @color-fill-primary;
// 出错颜色
@steps-error-color: @color-text-warning;
```
### Swiper
```less
@swiper-bullet-width: 6 * @rpx;
@swiper-bullet-height: 6 * @rpx;
@swiper-bullet-space: 6 * @rpx;
@swiper-bullet-border-radius: 2 * @rpx;
@swiper-bullet-active-width: 26 * @rpx;
@swiper-bullet-active-height: 6 * @rpx;
@swiper-bullet-primary-background: #ddd;
@swiper-bullet-primary-active-background: @color-fill-primary;
@swiper-bullet-light-background: rgba(255, 255, 255, 0.5);
@swiper-bullet-light-active-background: #fff;
@swiper-bullets-bottom: 10 * @rpx;
```
### SwipeAction
```less
// 默认颜色
@swipeout-default-color: @color-fill-grey-base;
// 主色
@swipeout-primary-color: @color-brand-1;
// 警告色
@swipeout-warn-color: @color-fill-warning;

// 圆角
@swipeout-radius: @corner-radius-lg;
// 圆角是左右间距
@swipeout-radius-spacing: @h-spacing-large;
```
### Switch
```less
// 激活时颜色
@switch-fill: @color-brand-1;
// 开关宽度
@switch-width: 102 * @rpx;
// 开关高度
@switch-height: 62 * @rpx;
// 开关边框
@switch-border: 4 * @rpx;
```
### TabBar
```less
@tabbar-default-color: @color-text-subtitle;
// 选项文字大小
@tabbar-font-size: 22 * @rpx;
// 图标大小
@tabbar-icon-size: 44 * @rpx;
// 选中时颜色
@tabbar-active-color: @color-brand-1;
```
### Tag
```less
// 四种不同个颜色的 tag
@tag-normal-color: @color-brand-1;
@tag-orange-color: @color-orange-1;
@tag-tangerine-color: @color-tangerine-1;
@tag-green-color: @color-pomonagreen-1;

// filling-light 和 icon 的 tag
@tag-filling-light-normal-background: @color-brand-2;
@tag-filling-light-orange-background: @color-orange-2;
@tag-filling-light-tangerine-background: @color-tangerine-2;
@tag-filling-light-green-background: @color-pomonagreen-2;
```
### Terms
```less
// 协议间距
@terms-spacing: @h-spacing-large;
// 普通协议
@terms-normal-size: 30 * @rpx;
@terms-normal-color: @color-text-title;
// 下至协议
@terms-desc-size: 22 * @rpx;
@terms-desc-color: @color-text-subtitle;

// 协议颜色
@terms-link-color: @color-brand-1;
```
### Tips
```less
@tips-background: rgba(0, 0, 0, 0.75);
@tips-text-color: @color-text-base;
@tips-text-size: @font-size-subtitle;
@tips-border-radius: @corner-radius-lg;
// 箭头相关设置
@tips-arrow-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAF2Pf9EAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAEAAAAABWuateAAABfklEQVQ4Eb1TMU5CQRD9KKUW9FoSWyNHABIrRS/ABYx0xCMQOowFLTdAKhPjDcTGeAJNPIBWJhre++z7mb/syoegk7w/b2Z2dnZn9peSJOkAJ0BOHmARSUmEhpXcCgbugS27wvG678syFYjW4AIGKelp5jT7dlWvlbnm5A1quu2cX9AV4MDZZ9TadgS+5wJFVUvJSgidTTHpCciAhp9MXw3ok3jyA7tpfaFkxYcgVWecQn8qIM3kIkfVeqsnTN4FxtZbgHMUbY6CY3gBcveBHRPe/ZxBzfEd3M6RsZg0FPAbNkLgt3nzJX0oWc9LdhuExwpJF84skQv8ZPpCd+fDmDJoJZTMuH3oz7DTF2UTyXlnNq0HHAH/IU8ocmWbvQ/HDbDzR9X5ui+AV+5vC9Om8Be4TNnmPtfY6tZuFyrM+Kban7YV+33bouSxwlq3bvtzbdVmVi8rrLWrtH+hrdrE6qKFmbOs/dG22oLiqxRWDg9wDBwCZeARuAMW5ghfVGaRSzkGP8pSUgAAAABJRU5ErkJggg==');
@tips-arrow-width: 30 * @rpx;
@tips-arrow-height: 18 * @rpx;
// 旋转90度后的偏移距离 30*30=18*18+24*24
@tips-arrow-90deg-transform: 24 * @rpx;
```
### Toast
```less
// 蒙层
@toast-mask: @color-product-mask;
// 背景
@toast-background: @color-text-weak;
// 圆角
@toast-radius: @corner-radius-lg;
// 文字
@toast-font-size: @font-size-subtitle;
@toast-font-color: @color-text-title;
// 图标
@toast-icon-size: 74 * @rpx;
// 宽度
@toast-width: 280 * @rpx;
```
