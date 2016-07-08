import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';
export default class Modal extends React.Component {
  static defaultProps = {
    prefixCls: 'am-modal',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {}
  };

  render() {
    let [{prefixCls, className, transparent, animated, animation, maskAnimation, style}, restProps] = splitObject(this.props,
      ['prefixCls', 'className', 'transparent', 'animated',
        'animation', 'maskAnimation', 'style']);

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-transparent`]: transparent
    });

    let anim = animation || (animated ? 'slide' : null);
    let maskAnim = maskAnimation || (animated ? 'slide' : null);

    // transparent 模式下, 内容默认居中
    const rootStyle = transparent ? assign({
      width: '286px',
      height: 'auto',
    }, style) : assign({
      width: '100%',
      height: '100%',
    }, style);

    return (
      <Dialog
        animation={anim}
        maskAnimation={maskAnim}
        style={rootStyle}
        className={wrapCls}
        prefixCls={prefixCls}
        {...restProps} />
    );
  }
}
