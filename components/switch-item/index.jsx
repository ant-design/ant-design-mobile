import React, {PropTypes} from 'react';
function noop() {}

const SwitchItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    defaultChecked:PropTypes.bool,
    onChange: PropTypes.func,
    didMount: PropTypes.func,
    extraFormData: PropTypes.object
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      defaultChecked: false,
      onChange: noop,
      didMount: noop,
    };
  },
  getInitialState() {
    const props = this.props;
    let checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    return {
      checked: checked,
      extraFormData:this.props.extraFormData
    };
  },
  _onSwitchChange(e) {
    const checked = !this.state.checked;
    this.setState({
      checked: checked
    });
    this.props.onChange.call(this, e);
  },
  render(){
    let {prefixCls } = this.props;
    const extraFormData = this.state.extraFormData;
    const extraFormDataArray = [];
    for (const key in extraFormData) {
      extraFormDataArray.push((<input type="hidden" key={key} name={key} value={extraFormData[key]}/>));
    }
    return (
      <div className={prefixCls + '-list-item'}>
        <div className={prefixCls + '-list-content'}>{this.props.label}</div>
        <div className={prefixCls + '-switch'}>
          <input type="checkbox" name={this.props.name} className={prefixCls + '-switch-checkbox'} checked={this.state.checked} onChange={this._onSwitchChange}/>
          {extraFormDataArray}
          <label className={prefixCls + '-switch-label'}>
            <div className={prefixCls + '-switch-inner'}></div>
            <div className={prefixCls + '-switch-switch'}></div>
          </label>

        </div>

      </div>
    );
  }
});

module.exports = SwitchItem;
