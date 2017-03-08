import React from 'react';
import topView from 'rn-topview';
import OperationContainer from './OperationContainer';

export default function (...args) {
  const actions = args[0] || [{ text: '确定' }];

  const onAnimationEnd = (visible) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <OperationContainer
      actions={actions}
      onAnimationEnd={onAnimationEnd}
    />,
  );
}
