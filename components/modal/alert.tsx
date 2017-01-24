import React from 'react';
import topView from 'rn-topview';
import AlertContainer from './AlertContainer';

export default function (...args) {
  const title = args[0];
  const content = args[1];
  const actions = args[2] || [{ text: '确定' }];

  const onAnimationEnd = (visible) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <AlertContainer
      title={title}
      content={content}
      actions={actions}
      onAnimationEnd={onAnimationEnd}
    />,
  );
}
