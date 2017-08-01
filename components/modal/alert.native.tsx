import React from 'react';
import topView from 'rn-topview';
import AlertContainer from './AlertContainer';

export default function a(title, content, actions = [{ text: '确定' }]) {
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
