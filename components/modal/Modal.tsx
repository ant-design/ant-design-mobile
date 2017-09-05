import React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import { ModalProps, ModalComponent } from './PropsType';
import TouchFeedback from '../_util/touchFeedback';

export default class Modal extends ModalComponent<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    transparent: false,
    popup: false,
    animationType: 'slide-down',
    animated: true,
    style: {},
    onShow() {},
    footer: [],
    closable: false,
    operation: false,
    platform: 'ios',
  };

  isInModal(e) {
    if (!/\biPhone\b|\biPod\b/i.test(navigator.userAgent)) {
      return;
    }
    // fix touch to scroll background page on iOS
    const prefixCls = this.props.prefixCls;
    const pNode = (node => {
      while ( node.parentNode && node.parentNode !== document.body ) {
        if ( node.classList.contains(prefixCls)) {
          return node;
        }
        node = node.parentNode;
      }
    })(e.target);
    if (!pNode) {
      e.preventDefault();
    }
    return true;
  }

  renderFooterButton(button, prefixCls, i) {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === 'string') {
        const styleMap = {
          cancel: {},
          default: {},
          destructive: { color: 'red' },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    const onClickFn = function(e) {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };

    return (
      <TouchFeedback activeClassName={`${prefixCls}-button-active`} key={i}>
        <a className={`${prefixCls}-button`} role="button" style={buttonStyle} onClick={onClickFn}>
          {button.text || `Button`}
        </a>
      </TouchFeedback>
    );
  }

  render() {
    let {
      prefixCls, className, wrapClassName, transitionName, maskTransitionName, style, platform,
      footer = [], operation, animated, transparent, popup, animationType, ...restProps,
    } = this.props;

    const btnGroupClass = classNames({
      [`${prefixCls}-button-group-${footer.length === 2 && !operation ? 'h' : 'v'}`]: true,
      [`${prefixCls}-button-group-${operation ? 'operation' : 'normal'}`]: true,
    });
    const footerDom = footer.length ? <div className={btnGroupClass} role="group">
      {footer.map((button: any, i) => this.renderFooterButton(button, prefixCls, i))}
    </div> : null;

    // popup 模式自动禁止 transparent
    if (popup) {
      transparent = false;
    }

    let transName;
    let maskTransName;
    if (animated) {
      if (transparent) {
        transName = maskTransName = 'am-fade';
      } else {
        transName = maskTransName = 'am-slide-up';
      }
      if (popup) {
        transName = animationType === 'slide-up' ? 'am-slide-up' : 'am-slide-down';
        maskTransName = 'am-fade';
      }
    }

    if (transparent) {
      // transparent 模式下, 内容默认居中
      style = { width: 270, height: 'auto', ...style };
    } else {
      if (!popup) {
        style = { width: '100%', height: '100%', ...style };
      }
    }

    const wrapCls = classNames({
      [wrapClassName as string]: !!wrapClassName,
      [`${prefixCls}-wrap-popup`]: popup,
    });
    const cls = classNames({
      [className as string]: !!className,
      [`${prefixCls}-transparent`]: transparent,
      [`${prefixCls}-popup`]: popup,
      [`${prefixCls}-popup-${animationType}`]: popup && animationType,
      [`${prefixCls}-android`]: platform === 'android',
    });

    return (
      <Dialog
        {...restProps}
        prefixCls={prefixCls}
        className={cls}
        wrapClassName={wrapCls}
        transitionName={transitionName || transName}
        maskTransitionName={maskTransitionName || maskTransName}
        style={style}
        footer={footerDom}
        wrapProps={{ onTouchStart: e => this.isInModal(e) }}
      />
    );
  }
}
