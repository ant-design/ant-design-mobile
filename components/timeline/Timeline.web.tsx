import * as React from 'react';
import classNames from 'classnames';
import TimelineItem from './TimelineItem';
import splitObject from '../_util/splitObject';
import TimelinePropsType from './TimelinePropsType';

export default class Timeline extends React.Component<TimelinePropsType, any> {
  static TimelineItem: any;
  static Item: any;

  static defaultProps = {
    prefixCls: 'am-timeline',
  };

  render() {
    let [{prefixCls, children, pending, className}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'pending', 'className']);
    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-pending`]: !!pending,
      [className]: className,
    });
    return (
      <ul {...restProps} className={classString}>
        {
          React.Children.map(children, (ele: any, idx) =>
            React.cloneElement(ele, {
              last: idx === children.length - 1,
            })
          )
        }
        {(!!pending)
          ? <TimelineItem pending={!!pending}>{pendingNode}</TimelineItem>
          : null}
      </ul>
    );
  }
}
