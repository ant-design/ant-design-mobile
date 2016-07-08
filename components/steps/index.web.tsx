import React from 'react';
import RcSteps from 'rc-steps';

export default class Steps extends React.Component {
  static Step = RcSteps.Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    maxDescriptionWidth: 100,
    labelPlacement: 'vertical',
    current: 0,
  };

  render() {
    let maxDescriptionWidth = this.props.maxDescriptionWidth;
    if (this.props.direction === 'vertical') {
      maxDescriptionWidth = 'auto';
    }
    return (
      <RcSteps {...this.props} maxDescriptionWidth={maxDescriptionWidth} />
    );
  }
}
