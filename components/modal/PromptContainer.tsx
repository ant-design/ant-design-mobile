/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Modal from './Modal';
import promptStyles from './style/prompt';

export type ButtonType = {
  text: string;
  onPress?: () => void;
  style?: any;
};

export interface PropmptContainerProps {
  title: string;
  type?: 'default' | 'login-password' | 'secure-text';
  message?: string | null;
  defaultValue?: string;
  actions: Array<ButtonType>;
  onAnimationEnd?: (visible: boolean) => void;
  styles?: any;
}

export default class PropmptContainer extends React.Component<PropmptContainerProps, any> {
  static defaultProps = {
    type: 'default',
    defaultValue: '',
    styles: promptStyles,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      text: props.defaultValue,
      password: props.type === 'secure-text' ? props.defaultValue : '',
    };
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onChangeText(type, value) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    const { title, onAnimationEnd, message, type, actions, styles } = this.props;
    const { text, password } = this.state;
    const getArgs = function(func) {
      if (type === 'login-password') {
        return func.apply(this, [text, password]);
      } else if (type === 'secure-text') {
        return func.apply(this, [password]);
      }
      return func.apply(this, [text]);
    };
    let callbacks;
    if (typeof actions === 'function') {
      callbacks = [
        { text: '取消', style: 'cancel' },
        { text: '确定', onPress: () => getArgs(actions as Function) },
      ];
    } else {
      callbacks = actions.map(item => {
        return {
          text: item.text,
          onPress: () => {
            if (item.onPress) {
              return getArgs(item.onPress);
            }
          },
          style: item.style || {},
        };
      });
    }

    const footer = callbacks.map((button) => {
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

    const firstStyle = [styles.inputWrapper];
    const lastStyle = [styles.inputWrapper];

    if (type === 'login-password') {
      firstStyle.push(styles.inputFirst);
      lastStyle.push(styles.inputLast);
    } else if ( type === 'secure-text') {
      lastStyle.push(styles.inputFirst);
      lastStyle.push(styles.inputLast);
    } else {
      firstStyle.push(styles.inputFirst);
      firstStyle.push(styles.inputLast);
    }

    return (
      <Modal
        transparent
        title={title}
        visible={this.state.visible}
        onClose={this.onClose}
        footer={footer}
        onAnimationEnd={onAnimationEnd}
      >
        <View>
          {message && message.length && <Text style={styles.message}>{message}</Text>}
          <View style={styles.inputGroup}>
            { type !== 'secure-text' && (
                <View style={firstStyle}>
                  <TextInput
                    autoFocus
                    onChangeText={(value) => { this.onChangeText('text', value); }}
                    value={this.state.text}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                  />
                </View>
              )
            }
            {
              (type === 'secure-text' || type === 'login-password') && (
                <View style={lastStyle}>
                  <TextInput
                    autoFocus
                    secureTextEntry
                    onChangeText={(value) => { this.onChangeText('password', value); }}
                    value={this.state.password}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                  />
                </View>
              )
            }
          </View>
        </View>
      </Modal>
    );
  }
}
