import * as React from 'react';
import RcSteps from 'rc-steps';

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
}

export default class Steps extends React.Component<StepsProps, any> {
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
