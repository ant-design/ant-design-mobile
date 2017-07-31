import React from 'react';
import { Text, ScrollView } from 'react-native';
import Modal from './Modal';

export type AlertButtonType = {
  text: string;
  onPress?: () => void;
  style?: any;
};

export interface AlertContainerProps {
  title: string;
  content: any;
  actions: Array<AlertButtonType>;
  onAnimationEnd?: (visible: boolean) => void;
}

export default class AlertContainer extends React.Component<AlertContainerProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { title, actions, content, onAnimationEnd } = this.props;
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
        transparent
        title={title}
        visible={this.state.visible}
        onClose={this.onClose}
        footer={footer}
        onAnimationEnd={onAnimationEnd}
      >
        <ScrollView>
          <Text>{content}</Text>
        </ScrollView>
      </Modal>
    );
  }
}
