import React from 'react';
import {
  DeviceEventEmitter,
} from 'react-native';
import styles from './style/index';
import topView from 'rn-topview';
import Modal, { Entry } from 'rc-dialog/lib/Modal';

export interface PopupProps {
  animationType?: string;
  maskClosable?: boolean;
  visible: boolean;
}

class Popup extends React.Component<PopupProps, any> {
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
        entry={(this.props.animationType === 'slide-up' ? 'bottom' :'top') as Entry}
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
