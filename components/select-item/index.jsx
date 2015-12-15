import React, {PropTypes} from 'react';
function noop() {}

const SelectItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    align: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      name: '',
      align: 'left',
      value: '',
      options: [],
      onChange: noop,
    };
  },
  _onChange(e) {
    this.props.onChange.call(this, e.target.value);
  },
  render(){
    let {prefixCls, options, align} = this.props;
    let labelDom = '';
    if (this.props.label) {
      labelDom = (<div className={prefixCls + '-list-label'}>{this.props.label}</div>);
    }
    let Options = [];
    for (let i = 0, len = options.length; i < len; i++) {
      Options.push((<option value={options[i].val} key={options[i].val}>{options[i].txt}</option>));
    }
    let dirctionStyle = {};
    if(align === 'right') {
      dirctionStyle = {'direction' : 'rtl'};
    }
    return (
      <div className={prefixCls + '-list-item ' + prefixCls + '-list-item-select'}>
        {labelDom}
        <div className={prefixCls + '-list-control'}>
          <select name={this.props.name} value={this.props.value} onChange={this._onChange} style={dirctionStyle}>
            {Options}
          </select>
        </div>
        <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical'}></span></div>
      </div>
    );
  }
});
module.exports = SelectItem;
