import * as React from 'react';
import classNames from 'classnames';

interface SegmentedControlProps {
  prefixCls?: string;
  className?: string;
  selectedIndex?: number;
  values?: Array<number>;
  onChange?: (index: number) => void;
}

export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
  static defaultProps = {
    prefixCls: 'am-segment',
    selectedIndex: 0,
    values: [],
    onChange() {},
  };

  _handleClick(index) {
    this.props.onChange(index);
  }

  render() {
    const { prefixCls, selectedIndex, values, className } = this.props;
    const wrapCls = classNames({
      [className]: !!className,
      [`${prefixCls}`]: true,
      [className] : className,
    });
    const items = [];
    values.map((el, idx) => {
      const itemCls = classNames({
        [`${prefixCls}-item`]: true,
        [`${prefixCls}-item-selected`]: idx === selectedIndex,
      });
      items.push(<div className={itemCls} key={'item' + idx} onClick={this._handleClick.bind(this, idx)}>{el}</div>);
    });
    return (
      <div className={wrapCls}>
        {items}
      </div>
    );
  }
}
