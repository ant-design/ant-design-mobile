const brandPrimary = '#108ee9';

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
  color_text_paragraph: '#888',             // 段落
  color_link: '#108ee9',                    // 链接

  // 阴影色
  color_shadow: 'rgba(100, 100, 100, .2)',  // 阴影色

  // 输入框图标
  input_color_icon: '#ccc',
  input_color_icon_top: brandPrimary,
  input_color_icon_inverse: 'rgba(255, 255, 255, .6)',
  input_color_icon_tap_inverse: 'rgba(255, 255, 255, .4)',

  // 背景色
  fill_base: '#fff',                           // 组件默认背景
  fill_body: '#f5f5f9',                        // 页面背景
  fill_tap: '#ddd',                            // 组件默认背景 _ 按下
  fill_disabled: '#ddd',                       // 通用失效背景
  fill_mask: 'rgba(0, 0, 0, .5)',              // 遮罩背景
  fill_overlay_inverse: 'rgba(0, 0, 0, .8)',   // 浮层背景 _ 反色，用于 toast

  // 组件
  notice_bar_fill: '#fffada',
  tabs_current_border_color: brandPrimary,
  default_button_fill: 'fill_base',
  switch_fill: '#4dd865',
  segmented_control_fill_tap: `${brandPrimary}10`,

  // 透明度
  opacity_disabled: '0.3',   // switch checkbox radio 等组件禁用的透明度

  // 全局/品牌色
  brand_primary: brandPrimary,
  brand_primary_tap: '#1284d6',
  brand_success: '#6abf47',
  brand_warning: '#f86e21',
  brand_error: '#f4333c',
  brand_important: '#f96268',

  // 边框色
  border_color_base: '#ddd',

  // 字体尺寸
  // ---
  font_size_icontext: 20,
  font_size_caption_sm: 24,
  font_size_base: 26,
  font_size_subhead: 28,
  font_size_caption: 30,
  font_size_heading: 34,
  font_size_display_sm: 36,
  font_size_display_md: 42,
  font_size_display_lg: 48,
  font_size_display_xl: 60,

  small_button_font_size: 24,
  link_button_font_size: 32,
  button_font_size: 36,
  input_font_size: 28,
  tabs_font_size_heading: 30,

  // 字体家族
  // ---
  // tslint:disable-next-line
  font_family_base: '_apple_system,"SF UI Text",Roboto,Noto,"Helvetica Neue",`elvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans_serif',
  font_family_code: 'Consolas,Menlo,Courier,monospace',

  // 圆角
  // ---
  radius_xs: 4,
  radius_sm: 6,
  radius_md: 10,
  radius_lg: 14,

  // 边框尺寸
  // ---
  border_width_sm: 1,
  border_width_md: 2,
  border_width_lg: 4,

  // 间距
  // ---
  // 水平间距
  h_spacing_sm: 12,
  h_spacing_md: 18,
  h_spacing_lg: 30,

  // 垂直间距
  v_spacing_xs: 6,
  v_spacing_sm: 12,
  v_spacing_md: 18,
  v_spacing_lg: 30,
  v_spacing_xl: 42,

  // 高度
  // ---
  small_button_height: 46,
  button_height: 72,
  list_title_height: 60,
  list_item_height: 90,        // 列表项高度
  segmented_control_height: 54,
  notice_bar_height: 72,
  tabs_height: 72,
  option_height: 72,           // action_sheet、picker 的选项高度
  tab_bar_height: 100,

  // 图标尺寸
  // ---
  icon_size_xxs: 30,
  icon_size_xs: 36,
  icon_size_sm: 42,
  icon_size_md: 44,       // 导航条上的图标
  icon_size_lg: 72,

  // 动画缓动
  // ---
  ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',
};
