import React, {PropTypes} from 'react';
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
    this.props.onChange.call(this, e.target.value);
  },
  render(){
    let { options, align, error } = this.props;
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className="am-list-label">{this.props.label}</div>);
    }
    let Options = [];
    for (let i = 0, len = options.length; i < len; i++) {
      Options.push((<option value={options[i].val} key={options[i].val}>{options[i].txt}</option>));
    }
    let dirctionStyle = {};
    if(align === 'right') {
      dirctionStyle = {'direction' : 'rtl'};
    }
    let itemClass = error ? 'am-list-item am-list-item-select am-list-item-error' : 'am-list-item am-list-item-select';
    return (
      <div className={itemClass}>
        {labelDom}
        <div className="am-list-control">
          <select name={this.props.name} value={this.props.value} onChange={this._onChange} style={dirctionStyle}>
            {Options}
          </select>
        </div>
        <div className="am-list-arrow"><span className="am-icon am-icon-arrow-vertical"/></div>
      </div>
    );
  }
});
module.exports = SelectItem;
