const brandPrimary = '#108ee9';
const brandPrimaryTap = '#1284d6';

export default {
  // 支付宝钱包默认主题
  // https://github.com/ant_design/ant_design_mobile/wiki/设计变量表及命名规范

  // 色彩
  // ---
  // 文字色
  color_text_base: '#000',                  // 基本
  color_text_base_inverse: '#fff',          // 基本 _ 反色
  color_text_placeholder: '#ccc',           // 文本框提示
  color_text_disabled: '#bbb',              // 失效
  color_text_caption: '#888',               // 辅助描述
  color_text_paragraph: '#333',             // 段落
  color_link: brandPrimary,                 // 链接

  // 阴影色
  color_shadow: 'rgba(100, 100, 100, .2)',  // 阴影色

  // 背景色
  fill_base: '#fff',                           // 组件默认背景
  fill_body: '#f5f5f9',                        // 页面背景
  fill_tap: '#ddd',                            // 组件默认背景 _ 按下
  fill_disabled: '#ddd',                       // 通用失效背景
  fill_mask: 'rgba(0, 0, 0, .5)',              // 遮罩背景
  fill_overlay_inverse: 'rgba(0, 0, 0, .8)',   // 浮层背景 _ 反色，用于 toast

  // 透明度
  opacity_disabled: '0.3',   // switch checkbox radio 等组件禁用的透明度

  // 全局/品牌色
  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#6abf47',
  brand_warning: '#f86e21',
  brand_error: '#f4333c',
  brand_hot: '#f96268',        // 用于推荐/促销/折扣
  brand_important: '#ff3b30',  // 用于小红点

  // 边框色
  border_color_base: '#ddd',

  // 字体尺寸
  // ---
  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 13,
  font_size_subhead: 14,
  font_size_caption: 15,
  font_size_heading: 17,
  font_size_display_sm: 18,
  font_size_display_md: 21,
  font_size_display_lg: 24,
  font_size_display_xl: 30,

  // 字体家族
  // ---
  // tslint:disable-next-line
  font_family_base: '_apple_system,"SF UI Text",Roboto,Noto,"Helvetica Neue",`elvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans_serif',
  font_family_code: 'Consolas,Menlo,Courier,monospace',

  // 圆角
  // ---
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  // 边框尺寸
  // ---
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  // 间距
  // ---
  // 水平间距
  h_spacing_sm: 6,
  h_spacing_md: 9,
  h_spacing_lg: 15,

  // 垂直间距
  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  // 高度
  // ---
  option_height: 42,           // action_sheet、picker 的选项高度

  // 图标尺寸
  // ---
  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22,       // 导航条上的图标
  icon_size_lg: 36,

  // 动画缓动
  // ---
  ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',

  // 组件
  // ---

  // button
  button_height: 42,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  across_button_height: 50,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,

  ghost_button_color: brandPrimary,    // 同时应用于背景、文字颜色、边框色
  ghost_button_fill_tap: brandPrimaryTap,

  link_button_fill_tap: '#ddd',
  link_button_font_size: 16,

  // list
  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 45,

  // input
  input_label_width: 17,       // InputItem、TextareaItem 文字长度基础值
  input_font_size: 14,
  input_color_icon: '#ccc',
  input_color_icon_tap: brandPrimary,
  input_color_icon_inverse: 'rgba(255, 255, 255, .6)',
  input_color_icon_tap_inverse: 'rgba(255, 255, 255, .4)',

  // tabs
  tabs_color: brandPrimary,
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // segmented_control
  segmented_control_color: brandPrimary,  // 同时应用于背景、文字颜色、边框色
  segmented_control_height: 27,
  segmented_control_fill_tap: `${brandPrimary}10`,

  // tab_bar
  tab_bar_height: 50,

  // search_bar
  search_bar_input_height: 28,

  // notice_bar
  notice_bar_fill: '#fffada',
  notice_bar_height: 36,

  // switch
  switch_fill: '#4dd865',

  // tag
  tag_height: 24,
  tag_small_height: 14,

  // table
  table_title_height: 30,
};
