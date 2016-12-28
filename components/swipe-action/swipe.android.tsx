import { PropTypes } from 'react';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Modal from '../modal';
import SwipeActionProps from './PropsType';

export interface ButtonProps {
  text?: string;
  onPress?: () => void;
  style?: {};
}

class SwipeAction extends React.Component<SwipeActionProps, any> {
  static propTypes = {
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
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() {
    },
    onClose() {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  hide = () => {
    this.setState({
      showModal: false,
    });
  };

  onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({
      showModal: false,
    });
  }

  onLongPress = () => {
    const { disabled, onOpen } = this.props;
    if (disabled) {
      return;
    }
    if (onOpen) {
      onOpen();
    }
    this.setState({
      showModal: true,
    });
  }

  _renderAndroidModal() {
    const { left = [], right = [], autoClose } = this.props;
    const actions = [...left, ...right].map((button: ButtonProps) => {
      const orginPress = button.onPress || function () {
        };
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
      <Modal
        visible={this.state.showModal}
        transparent
        title={this.props.title}
        onClose={this.hide}
        footer={actions}
      />
    );
  }

  render() {
    const { style, children } = this.props;
    return (
      <View style={style}>
        <TouchableOpacity onLongPress={this.onLongPress}>
          <View>{children}</View>
        </TouchableOpacity>
        { this.state.showModal ? this._renderAndroidModal() : null}
      </View>
    );
  }
}

export default SwipeAction;
