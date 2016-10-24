import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import touchableFeedback from '../_util/touchableFeedback';

class SegmentItem extends React.Component<any, any> {
  static defaultProps = {
    onClick() {},
    selected: false,
  };

  render() {
    const { label, prefixCls, selected, tintColor, enabled, touchFeedback } = this.props;
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-selected`]: selected,
    });

    const restProps = assign({}, this.props);
    ['prefixCls', 'label', 'selected', 'tintColor', 'enabled', 'touchFeedback', 'activeStyle'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });

    return (
      <div
        className={itemCls}
        style={{
          color: selected ? '#fff' : tintColor,
          backgroundColor: selected ? tintColor : '#fff',
          borderColor: tintColor,
        }}
        {...restProps}
      >
        <div className={`${prefixCls}-item-feedback`} style={{
          backgroundColor: enabled && touchFeedback && !selected ? tintColor : 'transparent',
        }}></div>
        {label}
      </div>
    );
  }
};

export default touchableFeedback<{
  prefixCls?: string;
  label?: string;
  enabled?: boolean;
  tintColor?: string;
  selected?: boolean;
  onClick?: (e: any) => void;
}>(SegmentItem);
