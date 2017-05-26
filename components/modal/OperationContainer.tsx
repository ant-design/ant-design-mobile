import React from 'react';
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
}

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
    const footer = actions.map((button) => {
      const orginPress = button.onPress || function () {};
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
      return button;
    });
    return (
      <Modal
        operation
        transparent
        maskClosable
        visible={this.state.visible}
        onClose={this.onClose}
        onAnimationEnd={onAnimationEnd}
        style={modalStyle.operationContainer}
        bodyStyle={modalStyle.operationBody}
        footer={footer}
      />
    );
  }
}
