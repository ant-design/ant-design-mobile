import * as React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import ModalProps from './ModalPropsType';

export default class Modal extends React.Component<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    wrapClassName: '',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {},
    bodyStyle: {},
    onClose() {},
    onShow() {},
    footer: null,
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
      if (closeDom) {
        (closeDom as any).style.display = 'none';
      }
    }
  }

  render() {
    const {
      prefixCls,
      className,
      wrapClassName,
      transparent,
      animated,
      transitionName,
      maskTransitionName,
      closable,
      maskClosable,
      style,
      title,
      bodyStyle,
      visible,
      children,
      onClose,
      footer,
    } = this.props;

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-transparent`]: transparent,
    });

    let anim = transitionName || (animated ? 'am-slide-up' : null);
    let maskAnim = maskTransitionName || (animated ? 'am-slide-up' : null);

    // transparent 模式下, 内容默认居中
    const rootStyle = transparent ? assign({
      width: '5.4rem',
      height: 'auto',
    }, style) : assign({
      width: '100%',
      height: '100%',
    }, style);

    return (
      <Dialog
        prefixCls={prefixCls}
        className={wrapCls}
        title={title}
        wrapClassName={wrapClassName}
        transitionName={anim}
        maskTransitionName={maskAnim}
        style={rootStyle}
        bodyStyle={bodyStyle}
        visible={visible}
        closable={closable || maskClosable}
        maskClosable={maskClosable}
        onClose={onClose}
        footer={footer}
      >
        {children}
      </Dialog>
    );
  }
}
