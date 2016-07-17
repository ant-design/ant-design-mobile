import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';
import ModalProps from './modalPropsType';

export default class Modal extends React.Component<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {},
    onClose() {},
    onShow() {},
  };

  componentWillMount() {
    const { visible, onShow } = this.props;
    if (visible) {
      onShow();
    }
  }

  componentDidMount() {
    this.componentDidUpdate(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible) {
      this.props.onShow();
    }
  }

  componentDidUpdate(prevProps) {
    const { prefixCls, closable } = this.props;
    // visible always true
    if (prevProps.visible === true && !closable) {
      const closeDom = document.getElementsByClassName(`${prefixCls}-close`)[0];
      closeDom.style.display = 'none';
    }
  }

  render() {
    let [
      {prefixCls, className, transparent, animated, animation, maskAnimation, closable, maskClosable, style},
      restProps,
    ] = splitObject(
      this.props,
      ['prefixCls', 'className', 'transparent', 'animated', 'animation', 
      'maskAnimation', 'closable', 'maskClosable', 'style']
    );

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-transparent`]: transparent,
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
        closable={closable || maskClosable}
        maskClosable={maskClosable}
        {...restProps} />
    );
  }
}
