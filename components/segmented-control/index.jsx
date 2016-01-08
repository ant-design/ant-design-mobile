import React, {PropTypes} from 'react';
function noop() {}

const SegmentedControl = React.createClass({
  propTypes: {
    selectedIndex: PropTypes.number,
    value: PropTypes.array,
    onChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      selectedIndex: 0,
      value: [],
      onChange: noop,
    };
  },
  _handleClick(index) {
    this.props.onChange(index);
  },
  render() {
    const { selectedIndex, value } = this.props;
    let items = [];
    value.map((el, idx) => {
      let itemCls = idx === selectedIndex ? 'am-segment-item am-segment-item-selected' : 'am-segment-item';
      items.push(<div className={itemCls} key={'item' + idx} onClick={this._handleClick.bind(this, idx)}>{el}</div>);
    });
    return (
      <div className="am-segment">
        {items}
      </div>
    );
  }
});

module.exports = SegmentedControl;
