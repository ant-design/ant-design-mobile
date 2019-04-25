import * as React from 'react';
import RcSteps from 'rmc-steps';
import Icon from '../icon';
import { StepsPropsType } from './PropsType';
export interface StepsProps extends StepsPropsType {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  status?: string;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step = (RcSteps as any).Step;

  static defaultProps = {
    prefixCls: 'am-steps',
    iconPrefix: 'ant',
    labelPlacement: 'vertical',
    direction: 'vertical',
    current: 0,
  };
  stepRefs: any[];
  stepsRef: any;

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    if (this.props.direction !== 'horizontal') {
      return;
    }
    // set tail's left position based on main's width for each step dynamically.
    this.stepRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  render() {
    this.stepRefs = [];
    const { children, status, size } = this.props;
    const current = this.props.current as number;

    // flattern the array at first https://github.com/ant-design/ant-design-mobile/issues/934
    const filterChildren: any[] = [];
    if (children && children.length) {
      children.forEach((item: any) => {
        if (React.isValidElement(item)) {
          filterChildren.push(item);
        }
      });
    }
    const newChildren = React.Children.map(filterChildren, (item: any, index) => {
      let className = item.props.className;
      if (
        index < filterChildren.length - 1 &&
        filterChildren[index + 1].props.status === 'error'
      ) {
        className = className ? `${className} error-tail` : 'error-tail';
      }

      let icon = item.props.icon;
      if (!icon) {
        if (index < current) {
          // 对应 state: finish
          icon = 'check-circle-o';
        } else if (index > current) {
          // 对应 state: wait
          icon = 'ellipsis';
          className = className
            ? `${className} ellipsis-item`
            : 'ellipsis-item';
        }
        if (
          (status === 'error' && index === current) ||
          item.props.status === 'error'
        ) {
          icon = 'cross-circle-o';
        }
      }
      icon =
        typeof icon === 'string' ? (
          <Icon
            type={icon}
            size={size === 'small' ? (status === 'wait' ? 'xxs' : 'xs') : 'md'}
          />
        ) : (
          icon
        );
      return React.cloneElement(item, {
        icon,
        className,
        ref: (c: any) => (this.stepRefs[index] = c),
      });
    });
    return (
      <RcSteps ref={(el: any) => (this.stepsRef = el)} {...this.props}>
        {newChildren}
      </RcSteps>
    );
  }
}
