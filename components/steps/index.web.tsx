import React from 'react';
import RcSteps from 'rc-steps';

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
  current?: number;
}

const Icon = ({ type }) => <span className={`anticon anticon-${type}`} />;

export default class Steps extends React.Component<StepsProps, any> {
  static Step = (RcSteps as any).Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    current: 0,
    direction: 'vertical',
  };

  render() {
    const { current, direction } = this.props;
    return (
      <RcSteps {...this.props} direction={direction}>
        {
          this.props.children.map((item, index) => {
            let errorTail = -1;
            if (index < this.props.children.length - 1) {
              const status = this.props.children[index + 1].props.status;
              if (status === 'error') {
                errorTail = index;
              }
            }
            const errorTailCls = errorTail > -1 ? 'error-tail' : '';

            let iconName;
            let className;
            if (!!item.props.icon) {
              iconName = item.props.icon;
              className = '';
              if ( index > 0 && index <= current) {
                iconName = 'check-circle';
              } else if (item.props.status === 'error') {
                iconName = 'cross-circle';
              } else if(item.props.status === 'process') {
                iconName = 'check-circle';
              }
            } else {
              className = index <= current ? null : 'ellipsis-item';
              if (index <= current) {
                iconName = 'check-circle-o';
              } else if (item.props.status === 'error') {
                iconName = 'cross-circle-o';
              } else {
                iconName = 'ellipsis';
              }
            }

            className = `${errorTailCls} ${className}`;
            return React.cloneElement(
              item, {key: index, icon: <Icon type={iconName} />, className: className}
            );
          })
        }
      </RcSteps>
    );
  }
}
