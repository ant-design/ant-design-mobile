import React, {PropTypes} from 'react';
import Tappable from 'react-tappable';
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
    const { selectedIndex, values } = this.props;
    let items = [];
    values.map((el, idx) => {
      let itemCls = idx === selectedIndex ? 'am-segment-item am-segment-item-selected' : 'am-segment-item';
      items.push(<Tappable className={itemCls} key={'item' + idx} onTap={this._handleClick.bind(this, idx)}>{el}</Tappable>);
    });
    return (
      <div className="am-segment">
        {items}
      </div>
    );
  }
});

module.exports = SegmentedControl;
