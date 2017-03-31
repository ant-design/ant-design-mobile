import React from 'react';
import topView from 'rn-topview';
import PromptContainer from './PromptContainer';

export default function (...args) {
  if (!args || !args[2]) {
    console.error('Must specify callbackOrActions');
    return;
  }
  const title = args[0];
  const message = args[1] || '';
  const type = args[3] || 'default';
  const defaultValue = args[4] || '';

  const onAnimationEnd = (visible) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <PromptContainer
      title={title}
      message={message}
      actions={args[2]}
      type={type}
      defaultValue={defaultValue}
      onAnimationEnd={onAnimationEnd}
    />,
  );
}
