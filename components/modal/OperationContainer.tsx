import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Modal from './Modal';
import modalStyle from './style/index';

export type OperationButtonType = {
  text: string;
  onPress?: () => void;
  style?: any;
};

export interface OperationContainerProps {
  actions: Array<OperationButtonType>;
  onAnimationEnd?: (visible: boolean) => void;
};

export default class OperationContainer extends React.Component<OperationContainerProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onClose= () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { actions, onAnimationEnd } = this.props;
    const btnGroupStyle = modalStyle.buttonGroupV;
    const buttonWrapStyle = modalStyle.buttonWrapOperation;

    const operations = actions.map((button, i) => {
      const orginPress = button.onPress || function () {
      };
      button.onPress = () => {
        const res = orginPress();
        if (res && (res as any).then) {
          (res as any).then(() => {
            this.onClose();
          });
        } else {
          this.onClose();
        }
      };
      let buttonStyle = modalStyle.buttonTextOperation;
      if (button.style) {
        buttonStyle = button.style;
      }
      return (
        <TouchableHighlight key={i} underlayColor="#ddd" onPress={button.onPress}>
          <View style={[buttonWrapStyle]}>
            <Text style={[buttonStyle]}>{button.text || `按钮${i}`}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <Modal
        transparent
        maskClosable
        visible={this.state.visible}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
        style={modalStyle.operationContainer}
        bodyStyle={modalStyle.operationBody}
      >
        <View style={[btnGroupStyle]}>
          {operations}
        </View>
      </Modal>
    );
  }
}
