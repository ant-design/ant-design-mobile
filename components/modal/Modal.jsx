import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';

export default class Modal extends React.Component {
  static defaultProps = {
    prefixCls: 'am-modal',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {}
  }

  render() {
    const {
      prefixCls, className, transparent, animated, animation, maskAnimation, style, ...others
    } = this.props;

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-transparent`]: transparent
    });

    let anim = animation || (animated ? 'slide' : null);
    let maskAnim = maskAnimation || (animated ? 'slide' : null);

    // transparent 模式下, 内容默认居中
    const rootStyle = assign({}, transparent ? {
      width: '286px',
      height: 'auto'
    } : {
      width: '100%',
      height: '100%'
    }, style);

    return (
      <Dialog
        animation={anim}
        maskAnimation={maskAnim}
        style={rootStyle}
        className={wrapCls}
        prefixCls={prefixCls}
        {...others} />
    );
  }
}
