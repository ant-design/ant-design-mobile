import React from 'react';
import topView from 'rn-topview';
import PromptContainer from './PromptContainer.native';
import { CallbackOrActions } from './PropsType';

export default function prompt(
  title: JSX.Element,
  message: JSX.Element,
  callbackOrActions: CallbackOrActions,
  type = 'default',
  defaultValue = '',
  placeholders = ['', ''],
) {
  if (!callbackOrActions) {
    // tslint:disable-next-line:no-console
    console.error('Must specify callbackOrActions');
    return;
  }

  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <PromptContainer
      title={title}
      message={message}
      actions={callbackOrActions}
      type={type as any}
      defaultValue={defaultValue}
      onAnimationEnd={onAnimationEnd}
      placeholders={placeholders}
    />,
  );
}
