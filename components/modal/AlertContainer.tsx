import React from 'react';
import { Text, ScrollView } from 'react-native';
import Modal from './Modal';
import modalStyle, { IModalStyle } from './style/index';

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
  styles?: IModalStyle;
}

export default class AlertContainer extends React.Component<AlertContainerProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  static defaultProps = {
    styles: modalStyle,
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { title, actions, content, onAnimationEnd, styles } = this.props;
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

    console.log('container', styles.content, content)
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
          <Text style={styles.content}>{content}</Text>
        </ScrollView>
      </Modal>
    );
  }
}
