import React from 'react';
import { DeviceEventEmitter } from 'react-native';
import styles from './style/index';
import Modal from 'rc-dialog/lib/Modal';

export interface Props {
  onAnimationEnd?: (visibile: boolean) => void;
  visible?: boolean;
}

export default class ActionSheetAndroid extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('antActionSheetHide', () => {
      this.close();
    });
  }

  componentWillUnmount() {
    (DeviceEventEmitter as any).removeAllListeners('antActionSheetHide');
  }

  close() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Modal
        animationDuration={200}
        animateAppear
        visible={this.state.visible}
        onAnimationEnd={this.props.onAnimationEnd}
        style={styles.content}
        animationType="slide-up"
        maskClosable
        onClose={this.close}
      >
        {this.props.children}
      </Modal>
    );
  }
}
