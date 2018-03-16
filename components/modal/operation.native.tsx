import React from 'react';
import topView from 'rn-topview';
import OperationContainer from './OperationContainer.native';

export default function a(...args: any[]) {
  const actions = args[0] || [{ text: '确定' }];

  const onAnimationEnd = (visible: boolean) => {
    if (!visible) {
      topView.remove();
    }
  };

  topView.set(
    <OperationContainer actions={actions} onAnimationEnd={onAnimationEnd} />,
  );
}
