import React from 'react';
import topView from 'rn-topview';
import { Text, ScrollView } from 'react-native';
import Modal from './Modal';

class Alert extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onAnimationEnd = (visible) => {
    if (!visible) {
      topView.remove();
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { title, actions, content } = this.props;
    const footer = actions.map((button) => {
      const orginPress = button.onPress || function () {
        };
      button.onPress = () => {
        orginPress();
        this.onClose();
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
        onAnimationEnd={this.onAnimationEnd}
      >
        <ScrollView>
          <Text>{content}</Text>
        </ScrollView>
      </Modal>
    );
  }
}

export default function (...args) {
  const title = args[0];
  const content = args[1];
  const actions = args[2] || [{ text: '确定' }];

  topView.set(
    <Alert title={title} content={content} actions={actions}/>
  );
}
