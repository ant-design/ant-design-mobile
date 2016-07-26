import * as React from 'react';
import { View, Modal, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import tsPropsType from './PropsType';
import styles from './style/index';

export default class Dropdown extends React.Component<tsPropsType, any> {
  static defaultProps = {
    visible: false,
    maskClosable: true,
    onShow: () => { },
    onClose: () => { },
  };
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(0),
    };
  }
  componentDidUpdate() {
    this.state.translateY.setValue(-Dimensions.get('window').height);
    Animated.timing(this.state.translateY, {
      duration: 200,
      toValue: 0,
      delay: 5,
    }).start();
  }
  render() {
    const { children, onShow, onClose, maskClosable } = this.props;
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.props.visible}
        onShow={onShow}
        onRequestClose={onClose}
      >
        <Animated.View style={[styles.container, {
          transform: [
            { translateY: this.state.translateY },
          ],
        }]}>
          {maskClosable ? <TouchableWithoutFeedback onPress={onClose}>
                <View style={[styles.maskClosable]}></View>
              </TouchableWithoutFeedback> : null}
          {children}
        </Animated.View>
      </Modal>
    );
  }
}
