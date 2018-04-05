/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TextStyle,
} from 'react-native';
import Modal from './Modal';
import { CallbackOrActions } from './PropsType';
import promptStyle, { IPromptStyle } from './style/prompt.native';

export interface PropmptContainerProps {
  title: React.ReactNode;
  message?: React.ReactNode;
  type?: 'default' | 'login-password' | 'secure-text';
  defaultValue?: string;
  actions: CallbackOrActions<TextStyle>;
  onAnimationEnd?: (visible: boolean) => void;
  styles?: IPromptStyle;
  placeholders?: string[];
}

const promptStyles = StyleSheet.create<any>(promptStyle);

export default class PropmptContainer extends React.Component<
  PropmptContainerProps,
  any
> {
  static defaultProps = {
    type: 'default',
    defaultValue: '',
    styles: promptStyles,
  };

  constructor(props: PropmptContainerProps) {
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

  onChangeText(type: string, value: string) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    const {
      title,
      onAnimationEnd,
      message,
      type,
      actions,
      placeholders,
    } = this.props;
    const styles = this.props.styles!;
    const { text, password } = this.state;
    const getArgs = function(func: (...args: any[]) => void) {
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
        { text: '取消', style: 'cancel', onPress: () => {} },
        { text: '确定', onPress: () => getArgs(actions) },
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

    const footer = (callbacks as any).map((button: any) => {
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

    const firstStyle = [styles.inputWrapper];
    const lastStyle = [styles.inputWrapper];

    if (type === 'login-password') {
      firstStyle.push(styles.inputFirst);
      lastStyle.push(styles.inputLast);
    } else if (type === 'secure-text') {
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
        footer={footer}
        onAnimationEnd={onAnimationEnd}
      >
        <KeyboardAvoidingView behavior="padding">
          {message && <Text style={styles.message}>{message}</Text>}
          <View style={styles.inputGroup}>
            {type !== 'secure-text' && (
              <View style={firstStyle}>
                <TextInput
                  autoFocus
                  onChangeText={value => {
                    this.onChangeText('text', value);
                  }}
                  value={this.state.text}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={placeholders![0]}
                />
              </View>
            )}
            {(type === 'secure-text' || type === 'login-password') && (
              <View style={lastStyle}>
                <TextInput
                  autoFocus
                  secureTextEntry
                  onChangeText={value => {
                    this.onChangeText('password', value);
                  }}
                  value={this.state.password}
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={placeholders![1]}
                />
              </View>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
