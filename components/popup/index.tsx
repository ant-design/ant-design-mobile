import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import styles from './style/index';
import topView from 'rn-topview';
import Modal from 'rc-dialog/lib/Modal';
import PopupProps from './PropsType';

type animationType = 'none' | 'slide-up' | 'slide-down' | 'fade';

class Popup extends React.Component<PopupProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('PopupHide', () => {
      this.hide();
    });
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('PopupHide');
  }

  hide() {
    this.setState({
      visible: false,
    });
  }

  onAnimationEnd(visible) {
    if (!visible) {
      topView.remove();
    }
  }

  onMaskClose = () => {
    const onMaskClose = this.props.onMaskClose;
    if (onMaskClose) {
      const res = onMaskClose();
      if (res && (res as any).then) {
        (res as any).then(() => {
          this.hide();
        });
      } else {
        this.hide();
      }
    }
  }

  render() {
    return (
      <Modal
        animateAppear
        onAnimationEnd={this.onAnimationEnd}
        animationType={this.props.animationType as animationType}
        wrapStyle={this.props.animationType === 'slide-up' ? styles.wrap : styles.wrapTop}
        visible={this.state.visible}
        maskClosable={this.props.maskClosable}
        onClose={this.onMaskClose}
      >
        {this.props.children}
      </Modal>
    );
  }
}

export default {
  show(content, options = {
    animationType: 'slide-down',
    maskClosable: true,
    onMaskClose() {},
  }) {
    topView.set(
      <Popup
        animationType={options.animationType}
        maskClosable={options.maskClosable}
        onMaskClose={options.onMaskClose}
      >
        {content}
      </Popup>
    );
  },
  hide() {
    (DeviceEventEmitter as any).emit('PopupHide');
  },
};
