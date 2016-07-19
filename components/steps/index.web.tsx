import React from 'react';
import RcSteps from 'rc-steps';

export default class Steps extends React.Component {
  static Step = RcSteps.Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    current: 0,
  };

  render() {
    return (
      <RcSteps {...this.props} />
    );
  }
}
