import React from 'react';
import {
  DeviceEventEmitter,
} from 'react-native';
import styles from './style/index';
import topView from 'rn-topview';
import Modal from 'rc-dialog/lib/Modal';
import PopupProps from './PropsType';

type animationType = 'none' | 'slide-up' | 'slide-down' | 'fade';

class Popup extends React.Component<PopupProps, any> {
  static defaultProps = {
    animationType: 'slide-down',
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible || false,
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

  render() {
    return (
      <Modal
        animateAppear
        onAnimationEnd={this.onAnimationEnd}
        animationType={this.props.animationType as animationType}
        wrapStyle={this.props.animationType === 'slide-up' ? styles.wrap : styles.wrapTop}
        visible={this.state.visible}
        onClose={this.props.maskClosable ? this.hide : undefined}
      >
        {this.props.children}
      </Modal>
    );
  }
}

export default {
  show(content, options) {
    topView.set(
      <Popup animationType={options.animationType} visible>
        {content}
      </Popup>
    );
  },
  hide() {
    (DeviceEventEmitter as any).emit('PopupHide');
  },
};
