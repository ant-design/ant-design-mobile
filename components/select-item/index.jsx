import React, {PropTypes} from 'react';
import classNames from 'classnames';
function noop() {}

const SelectItem = React.createClass({
  propTypes: {
    label: PropTypes.string,
    name: PropTypes.string,
    align: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      label: '',
      name: '',
      align: 'left',
      value: '',
      options: [],
      onChange: noop,
      error: false,
    };
  },
  _onChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
  },
  render(){
    let { options, label, name, value, align, error, className } = this.props;
    const wrapCls = classNames({
      'am-list-item': true,
      'am-list-item-select': true,
      'am-list-item-error': error,
      [className] : className
    });

    let labelDom = label ? (<div className="am-list-label">{label}</div>) : null;

    let Options = [];
    for (let i = 0, len = options.length; i < len; i++) {
      Options.push((<option value={options[i].val} key={options[i].val}>{options[i].txt}</option>));
    }

    // 2016.2 在align==right的时候，点击icon无法触发select，所以这里用style标签来修正
    let selectStyle = {};
    let arrowStyle = {};
    if(align === 'right'){
      selectStyle = {
        direction: 'rtl',
        paddingRight: '15px',
        boxSizing: 'border-box'
      };
      arrowStyle = {
        position: ' absolute',
        right: '15px',
        top: '16px'
      };
    }

    return (
      <div className={wrapCls}>
        {labelDom}
        <div className="am-list-control">
          <select name={name} value={value} onChange={this._onChange} style={selectStyle}>
            {Options}
          </select>
        </div>
        <div className="am-list-arrow" style={arrowStyle}><span className="am-icon am-icon-arrow-vertical"/></div>
      </div>
    );
  }
});
module.exports = SelectItem;
