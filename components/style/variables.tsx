import colorPalette from './color-palette';

export default Object.assign({}, colorPalette, {
  /* 中性色版(neutral) */
  neutral_1: '#fff',
  neutral_2: '#f7f7f7',
  neutral_3: '#efefef',
  neutral_4: '#e9e9e9',
  neutral_5: '#d9d9d9',
  neutral_6: '#ccc',
  neutral_7: '#999',
  neutral_8: '#666',
  neutral_9: '#404040',
  neutral_10: '#222',
  neutral_11: '#000',
  // neutral_3_f_20: '#efefef14',
  // neutral_3_f_60: '#efefef3C',
  neutral_3_f_20: '#efefef20',
  neutral_3_f_60: '#efefef60',
  neutral_6_f_60: '#ccc6',

  /* 品牌色（brand） */
  brand_1: '#E4F6FE',
  brand_2: '#C2EBFD',
  brand_3: '#9EDFFC',
  brand_4: '#79D2FA',
  brand_5: '#53C4F8',
  brand_6: '#2DB7F5',
  brand_7: '#0EA6EB',
  brand_8: '#0F8BC2',
  brand_9: '#10709B',
  brand_10: '#115777',
  // brand_3_f_20: '#9EDFFC14',
  // brand_3_f_60: '#9EDFFC3C',
  brand_3_f_20: '#9EDFFC20',
  brand_3_f_60: '#9EDFFC60',
  /* 功能色（function）*/
  function_error_1: '#FEEFE8',
  function_error_2: '#FE7A38',

  function_success_1: '#EDFBE7',
  function_success_2: '#6ABF47',

  function_warning_1: '#fef5e1',
  function_warning_2: '#FAAE14',

  function_link_1: '#2DB7F5',

  /* 间距（margin）*/
  margin_1: 4,
  margin_2: 8,
  margin_3: 12,
  margin_4: 16,
  margin_5: 24,
  margin_6: 28,
  margin_7: 32,
  margin_8: 40,
  margin_9: 44,

  /* 字体家族，可拓展 */
  // font_family_1: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB',
  //   'Microsoft YaHei','微软雅黑',Arial,sans_serif,
  // font_family_2: Consolas,Menlo,Courier,monospace,
  //
  /* 字号，可拓展 */
  font_size_1: 10,
  font_size_2: 12,
  font_size_3: 13,
  font_size_4: 14,
  font_size_5: 16,
  font_size_6: 18,
  font_size_7: 20,

  /* 最小单位 */
  grid: 4,

  /* 行高，可拓展，行高值的单位可以是em也可以是dp */
  line_height_1: 1,
  line_height_2: 1.5,

  /* 字重，可拓展 */
  font_weight_1: 'normal',
  font_weight_2: 'bold',

  /* 圆角边框 (radius) */
  radius_1: 4,
  radius_2: 6,

  /* 阴影 (shadow) */
  /* 常用尺寸size，可拓展 */
  // shadow_alpha: 20%,
  // shadow_color: gray_1,
  // shadow_blur_1: 0,
  // shadow_blur_2: 4px,
  // shadow_blur_3: 8px,

  /* 常用阴影 */
  /*
  shadow_1_down : shadow_color shadow_alpha (x: 0 y: _1 blur: shadow_blur_1),
  shadow_1_up: shadow_color shadow_alpha (x: 0 y: 1 blur: shadow_blur_1),
  shadow_1_left:shadow_color shadow_alpha (x: 1 y: 0 blur: shadow_blur_1),
  shadow_1_right:shadow_color shadow_alpha (x: _1 y: 0 blur: shadow_blur_1),
  shadow_2_down : shadow_color shadow_alpha (x: 0 y: _1 blur: shadow_blur_2),
  shadow_2_up:shadow_color shadow_alpha (x: 0 y: 1 blur: shadow_blur_2),
  shadow_2_left:shadow_color shadow_alpha (x: 1 y: 0 blur: shadow_blur_2),
  shadow_2_right:shadow_color shadow_alpha (x: _1 y:0 blur: shadow_blur_2),
  shadow_3_down : shadow_color shadow_alpha (x: 0 y: _2 blur : shadow_blur_3),
  shadow_3_up:shadow_color 20% (x: 0 y: 1 blur: shadow_blur_3),
  shadow_3_left:shadow_color 20% (x: 1 y: 0 blur: shadow_blur_3),
  shadow_3_right:shadow_color 20% (x: _1 y: 0 blur: shadow_blur_3),
  */

  /* 动效 Animation */
  // ease_out : cubic_bezier(0.215, 0.61, 0.355, 1),
  // ease_in : cubic_bezier(0.55, 0.055, 0.675, 0.19),
  // ease_in_out : cubic_bezier(0.645, 0.045, 0.355, 1),
  // ease_out_back : cubic_bezier(0.18, 0.89, 0.32, 1.28),
  // ease_in_back : cubic_bezier(0.6, _0.3, 0.74, 0.05),
  // ease_in_out_back : cubic_bezier(0.68, _0.55, 0.27, 1.55),
  // ease_out_circ : cubic_bezier(0.08, 0.82, 0.17, 1),
  // ease_in_circ : cubic_bezier(0.6, 0.04, 0.98, 0.34),
  // ease_in_out_circ : cubic_bezier(0.78, 0.14, 0.15, 0.86),
  // ease_out_quint : cubic_bezier(0.23, 1, 0.32, 1),
  // ease_in_quint : cubic_bezier(0.755, 0.05, 0.855, 0.06),
  // ease_in_out_quint : cubic_bezier(0.86, 0, 0.07, 1),
});
