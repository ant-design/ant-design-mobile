import React from 'react';
import topView from 'rn-topview';
import PromptContainer from './PromptContainer';

export default function prompt(
  title, message, callbackOrActions, type = 'default', defaultValue = '', placeholders = ['', ''],
) {
  if (!callbackOrActions) {
    console.error('Must specify callbackOrActions');
    return;
  }

  const onAnimationEnd = (visible) => {
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
