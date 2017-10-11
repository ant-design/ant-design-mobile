import React from 'react';

export interface ModalProps {
  title?: string;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Array<{}>;
  onClose?: () => void;
  transparent?: boolean;
  popup?: boolean;
  style?: {};
  animated?: boolean;
  bodyStyle?: {};
  animationType?: any;
  onAnimationEnd?: (visible: boolean) => void;
  animateAppear?: boolean;
  touchFeedback?: boolean;
  wrapProps?: {};
  operation?: boolean;
  platform?: string;
}

export type Action = {
  text: string,
  onPress?: Function,
  style?: {},
};
export type Callback = (valueOrLogin: string, password?: string) => void;
export abstract class ModalComponent<P, S> extends React.Component<P, S> {
  static alert: (
    title: string | JSX.Element,
    message: string | JSX.Element,
    actions?: Action[],
  ) => { close: () => void };

  static prompt: (
    title: string | JSX.Element,
    message: string | JSX.Element,
    callbackOrActions: Callback | Action[],
    type?: 'default' | 'secure-text' | 'login-password',
    defaultValue?: string,
  ) => { close: () => void };

  static operation: (
    actions?: Action[],
  ) => { close: () => void };
}
