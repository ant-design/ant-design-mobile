import React, { PropTypes } from 'react';
import { View, Modal, TouchableWithoutFeedback } from 'react-native';
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
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({
        visible: nextProps.visible,
      });
    }
  }
  render() {
    const { children, onShow, onClose, maskClosable } = this.props;
    return (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={this.state.visible}
        onShow={onShow}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          {maskClosable ? <TouchableWithoutFeedback onPress={onClose}>
                <View style={[styles.maskClosable]}></View>
              </TouchableWithoutFeedback> : null}
          {children}
        </View>
      </Modal>
    );
  }
}
