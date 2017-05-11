import React from 'react';
import { View } from 'react-native';
import styles from './style/index';
import Modal from 'rc-dialog/lib/Modal';
import PopupProps from './PropsType';

type animationType = 'none' | 'slide-up' | 'slide-down' | 'fade';

export default class PopupContainer extends React.Component<PopupProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };
  }

  hide() {
    this.setState({
      visible: false,
    });
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
      <View style={styles.container}>
        <Modal
          style={this.props.style}
          animateAppear
          onAnimationEnd={this.props.onAnimationEnd}
          animationType={this.props.animationType as animationType}
          wrapStyle={this.props.animationType === 'slide-up' ? styles.wrap : styles.wrapTop}
          visible={this.state.visible}
          maskClosable={this.props.maskClosable}
          onClose={this.onMaskClose}
        >
          {this.props.children}
        </Modal>
      </View>
    );
  }
}
