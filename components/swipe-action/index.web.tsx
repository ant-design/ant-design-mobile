import { PropTypes } from 'react';
import * as React from 'react';
import Swipeout from 'rc-swipeout';
import Hammer from 'react-hammerjs';
import Modal from '../modal';
import SwipeActionProps from './SwipeActionPropsType';
import splitObject from '../_util/splitObject';

class SwipeAction extends React.Component <SwipeActionProps, any>{
  static propTypes = {
    prefixCls: PropTypes.string,
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: 'am-swipe',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {},
    onClose() {},
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onLongTap = this.onLongTap.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onLongTap() {
    const { disabled, onOpen } = this.props;
    if (disabled) {
      return;
    }
    onOpen();

    this.setState({
      showModal: true,
    });
  }

  onClose() {
    this.props.onClose();
    this.setState({
      showModal: false,
    });
  }

  onAndroidBtnClick(btn) {
    const onPress = btn.onPress;
    if (onPress) {
      onPress();
    }
    if (this.props.autoClose) {
      this.onClose();
    }
  }

  renderAndroid() {
    const { children, title } = this.props;
    const pressOption = {
      recognizers: {
        press: {
          time: 500,
          threshold: 50
        }
      }
    };
    return (
      <div>
        <Hammer onPress={this.onLongTap} options={pressOption}>
          {children}
        </Hammer>
        {
          this.state.showModal ? (
            <Modal
              animated={false}
              title={title}
              transparent
              closable={false}
              maskClosable
              onClose={this.onClose}
              footer={this.renderAndroidBtn()}
              visible
            />
          ) : null
        }
      </div>
    );
  }

  renderAndroidBtn() {
    const { prefixCls, left, right } = this.props;
    const actions = [...left, ...right];

    return (
      <ul className={`${prefixCls}-android-actions`}>
        {
          actions.map((btn, i) => {
            return (
              <li key={i}
                className={`${prefixCls}-android-btn`}
                onClick={() => this.onAndroidBtnClick(btn)}
              >
                {btn.text}
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    let [{prefixCls, left, right, autoClose, disabled, onOpen, onClose, children}, restProps] = splitObject(
      this.props,
      ['prefixCls', 'left', 'right', 'autoClose', 'disabled', 'onOpen', 'onClose', 'children']
    );
    const isAndroid = !!navigator.userAgent.match(/Android/i);
    return (left.length || right.length) ? (
      <div className={`${prefixCls}`} {...restProps}>
        {
          isAndroid ? this.renderAndroid() : (
            <Swipeout
              prefixCls={prefixCls}
              left={left}
              right={right}
              autoClose={autoClose}
              disabled={disabled}
              onOpen={onOpen}
              onClose={onClose}
            >
              {children}
            </Swipeout>
          )
        }
      </div>
    ) : (
      <div {...restProps}>{children}</div>
    );
  }
}

export default SwipeAction;
