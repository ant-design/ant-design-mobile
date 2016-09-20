import React from 'react';
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
    // transparent change to transparent by yiminghe
    transparent: false,
    animated: true,
    style: {},
    bodyStyle: {},
    onClose() {},
    onShow() {},
    footer: [],
  };

  componentDidMount() {
    this.componentDidUpdate(this.props);
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
      style,
      title,
      bodyStyle,
      visible,
      children,
      onClose,
      footer,
      maskClosable,
    } = this.props;

    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}-transparent`]: transparent,
    });

    let anim = transitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);
    let maskAnim = maskTransitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);

    const btnGroupClass = `${prefixCls}-button-group-${footer.length === 2 ? 'h' : 'v'}`;
    const footerDom = footer.length ? [<div key="footer" className={btnGroupClass}>
      {
        footer.map((button: any, i) => {
          return (
            <a key={i} className={`${prefixCls}-button`} href="#" onClick={(e) => {
              e.preventDefault();
              if (button.onPress) {
                button.onPress();
              }
            }}>{button.text || `按钮${i}`}</a>
          );
        })
      }
    </div>] : null;

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
        closable={closable}
        maskClosable={maskClosable}
        onClose={onClose}
        footer={footerDom}
      >
        {children}
      </Dialog>
    );
  }
}
