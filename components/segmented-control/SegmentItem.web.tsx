import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import Touchable from 'rc-touchable';

class SegmentItem extends React.Component<any, any> {
  static defaultProps = {
    onClick() {
    },
    selected: false,
  };

  render() {
    const { label, prefixCls, selected, disabled, tintColor, activeStyle } = this.props;
    const restProps = assign({}, this.props);
    ['prefixCls', 'label', 'selected', 'tintColor', 'disabled', 'activeStyle'].forEach(prop => {
      if (restProps.hasOwnProperty(prop)) {
        delete restProps[prop];
      }
    });
    const itemCls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-selected`]: selected,
    });
    return (
      <Touchable
        disabled={disabled}
        activeClassName={`${prefixCls}-item-active`}
        activeStyle={activeStyle}
      >
        <div
          className={itemCls}
          style={{
          color: selected ? '#fff' : tintColor,
          backgroundColor: selected ? tintColor : '#fff',
          borderColor: tintColor,
        }}
          {...restProps}
        >
          <div className={`${prefixCls}-item-inner`} />
          {label}
        </div>
      </Touchable>
    );
  }
}

export default SegmentItem;
