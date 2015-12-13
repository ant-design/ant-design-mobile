import React, {PropTypes} from 'react';
function noop() {}

const SelectItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    align: PropTypes.string,
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    didMount: PropTypes.func,
    willUnmount: PropTypes.func,
    onChange: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      label: '',
      name: '',
      align: 'left',
      defaultValue: '',
      options: [],
      onChange: noop,
      didMount: noop,
      willUnmount:noop,
      extraFormData: {}
    };
  },
  getInitialState() {
    return {
      value: this.props.defaultValue,
      extraFormData: this.props.extraFormData
    };
  },
  componentDidMount() {
    this.props.didMount(this);
  },
  componentWillUnmount(){
    this.props.willUnmount(this);
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.set({
        value: nextProps.value
      });
    }
  },
  _onChange(e) {
    const value = e.target.value;
    this.setValue(value, e);
  },
  setValue(value, e) {
    if (!('value' in this.props)) {
      this.setState({
        value,
      });
    }
    this.props.onChange.call(this, e);
  },

  render(){
    let {prefixCls, options, align} = this.props;
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
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
          <select name={this.props.name} value={this.state.value} onChange={this._onChange} style={dirctionStyle}>
            {Options}
          </select>
        </div>
        <div className={prefixCls + '-list-arrow'}><span className={prefixCls + '-icon ' + prefixCls + '-icon-arrow-vertical'}></span></div>
        {extraFormDataArray}
      </div>
    );
  }
});
module.exports = SelectItem;
