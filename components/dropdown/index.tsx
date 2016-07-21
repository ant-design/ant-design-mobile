import React, { PropTypes } from 'react';
import { View, Modal, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import tsPropsType from './PropsType';
// import splitObject from '../_util/splitObject';
import styles from './style/index';

export default class Dropdown extends React.Component<tsPropsType, any> {
  static propTypes = {
    children: PropTypes.any,
  };
  static defaultProps = {
    visible: false,
    maskClosable: true,
    onShow: () => { },
    onClose: () => { },
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      translateY: new Animated.Value(0),
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.visible,
      });
    }
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
        visible={this.state.visible}
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
