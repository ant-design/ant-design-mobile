import * as React from 'react';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import assign from 'object-assign';
import ModalProps from './ModalPropsType';
import FooterButton from './FooterButton.web';

export default class Modal extends React.Component<ModalProps, any> {
  static defaultProps = {
    prefixCls: 'am-modal',
    visible: false,
    closable: false,
    maskClosable: false,
    transparent: false,
    animated: true,
    style: {},
    onShow() {},
    footer: [],
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
      transparent,
      animated,
      transitionName,
      maskTransitionName,
      closable,
      style,
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
    ['prefixCls', 'className', 'transparent', 'animated', 'transition', 'maskTransitionName',
      'closable', 'style', 'footer', 'maskClosable', 'touchFeedback',
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
        closable={closable || maskClosable}
        maskClosable={maskClosable}
        footer={footerDom}
        {...restProps}
      />
    );
  }
}
