import React from 'react';
import Swipeout from 'rc-swipeout';
import Hammer from 'react-hammerjs';
import classNames from 'classnames';
import Modal from '../modal';
import SwipeActionProps from './SwipeActionPropsType';

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  style?: {};
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
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
  }

  onLongTap = () => {
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

  renderAndroid() {
    const { children, title, autoClose, left, right } = this.props;
    const pressOption = {
      recognizers: {
        press: {
          time: 500,
          threshold: 50,
        },
      },
    };
    const actions = [...left, ...right].map((button: ButtonProps) => {
      const orginPress = button.onPress || function() {};
      return {
        text: button.text,
        style: button.style,
        onPress: () => {
          orginPress();
          if (autoClose) {
            this.onClose();
          }
        },
      };
    });

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
              footer={actions}
              visible
            />
          ) : null
        }
      </div>
    );
  }

  render() {
    const {
      className, prefixCls, left, right, autoClose, disabled, onOpen, onClose, children,
    } = this.props;
    const isAndroid = !!navigator.userAgent.match(/Android/i);
    const wrapClass = classNames({
      [`${prefixCls}`]: 1,
      [className]: !!className,
    });

    return (left.length || right.length) ? (
      <div className={wrapClass}>
        {isAndroid ? this.renderAndroid() : (<Swipeout
          prefixCls={prefixCls}
          left={left}
          right={right}
          autoClose={autoClose}
          disabled={disabled}
          onOpen={onOpen}
          onClose={onClose}
        >
          {children}
        </Swipeout>)}
      </div>
    ) : (
      <div className={wrapClass}>{children}</div>
    );
  }
}

export default SwipeAction;
