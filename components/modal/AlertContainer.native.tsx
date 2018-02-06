import React from 'react';
import { ScrollView, StyleProp, Text, TextStyle } from 'react-native';
import Modal from './Modal.native';

export interface AlertButtonType {
  text: string;
  onPress?: () => void | Promise<any>;
  style?: StyleProp<TextStyle>;
}

export interface AlertContainerProps {
  title: React.ReactType;
  content: React.ReactType;
  actions: AlertButtonType[];
  onAnimationEnd?: (visible: boolean) => void;
}

export default class AlertContainer extends React.Component<
  AlertContainerProps,
  any
> {
  constructor(props: AlertContainerProps) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { title, actions, content, onAnimationEnd } = this.props;
    const footer = actions.map(button => {
      // tslint:disable-next-line:only-arrow-functions
      const orginPress = button.onPress || function() {};
      button.onPress = () => {
        const res = orginPress();
        if (res && res.then) {
          res.then(() => {
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
