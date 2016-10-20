import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import ModalProps from './ModalPropsType';
import FooterButton from './FooterButton.web';

export default class Modal extends React.Component<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    // transparent change to transparent by yiminghe
    transparent: false,
    animated: true,
    style: {},
    onShow() {},
    footer: [],
  };

  render() {
    const {
      prefixCls,
      className,
      transparent,
      animated,
      transitionName,
      maskTransitionName,
      style,
      footer = [],
    } = this.props;

    const wrapCls = classNames({
      [className as string]: !!className,
      [`${prefixCls}-transparent`]: transparent,
    });

    let anim = transitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);
    let maskAnim = maskTransitionName || (animated ? (transparent ? 'am-fade' : 'am-slide-up') : null);

    const btnGroupClass = `${prefixCls}-button-group-${footer.length === 2 ? 'h' : 'v'}`;
    const footerDom = footer.length ? [<div key="footer" className={btnGroupClass}>
      {
        footer.map((button: any, i) => <FooterButton prefixCls={prefixCls} button={button} key={i} />)
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

    const restProps = assign({}, this.props);
    ['prefixCls', 'className', 'transparent', 'animated', 'transitionName', 'maskTransitionName',
      'style', 'footer', 'touchFeedback',
    ].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <Dialog
        prefixCls={prefixCls}
        className={wrapCls}
        transitionName={anim}
        maskTransitionName={maskAnim}
        style={rootStyle}
        footer={footerDom}
        {...restProps}
      />
    );
  }
}
