import React, {PropTypes} from 'react';
import classNames from 'classnames';
import './segmented-control.less';
function noop() {}

const SegmentedControl = React.createClass({
  propTypes: {
    selectedIndex: PropTypes.number,
    values: PropTypes.array,
    onChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      selectedIndex: 0,
      values: [],
      onChange: noop,
    };
  },
  _handleClick(index) {
    this.props.onChange(index);
  },
  render() {
    const { selectedIndex, values, className } = this.props;
    const wrapCls = classNames({
      'am-segment': true,
      [className] : className
    });
    const items = [];
    values.map((el, idx) => {
      const itemCls = classNames({
        'am-segment-item': true,
        'am-segment-item-selected': idx === selectedIndex,
      });
      items.push(<div className={itemCls} key={'item' + idx} onClick={this._handleClick.bind(this, idx)}>{el}</div>);
    });
    return (
      <div className={wrapCls}>
        {items}
      </div>
    );
  }
});

module.exports = SegmentedControl;
