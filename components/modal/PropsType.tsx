import React from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface ModalPropsType {
  title?: JSX.Element;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Action[];
  onClose?: () => void;
  transparent?: boolean;
  popup?: boolean;
  animated?: boolean;
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  operation?: boolean;
}

export interface Action {
  text: string;
  onPress?: () => void | Promise<any>;
  style?: React.CSSProperties | StyleProp<TextStyle> | string;
}

export type Callback = (valueOrLogin: string, password?: string) => void;
export type CallbackOrActions = Callback | Action[];
export abstract class ModalComponent<P, S> extends React.Component<P, S> {
  static alert: (
    title: JSX.Element,
    message: JSX.Element,
    actions?: Action[],
    platform?: string,
  ) => { close: () => void };

  static prompt: (
    title: JSX.Element,
    message: JSX.Element,
    callbackOrActions: CallbackOrActions,
    type?: 'default' | 'secure-text' | 'login-password',
    defaultValue?: string,
    placeholders?: string[],
    platform?: string,
  ) => { close: () => void };

  static operation: (
    actions?: Action[],
    platform?: string,
  ) => { close: () => void };
}
