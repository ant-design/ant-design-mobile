import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Checkbox from 'rc-checkbox';
import './index.less';
function noop() {}

export default class CheckboxItem extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { style, mode, name, checked, disabled, extra, children, className } = this.props;
    const wrapCls = classNames({
      'am-list-item': mode !== 'agree',
      'am-list-item-check': mode !== 'agree',
      'am-checkbox-agree': mode === 'agree',
      [className]: className
    });

    let inputProp = {};
    if (checked){
      inputProp.checked = 'checked';
    }

    let extraDom = extra ? <div className="am-list-extra">{extra}</div> : null;

    let renderDom = '';
    if (mode === 'agree') {
      renderDom = (<div>
        <div className={wrapCls} style={style}>
          {<Checkbox
            prefixCls="am-checkbox"
            defaultChecked={checked}
            name={name}
            onChange={this.props.onChange}
            disabled={disabled}
          />}
          <label className="am-ft-md" htmlFor={'agree' + name}>{children}</label>
        </div>
      </div>);
    } else {
      renderDom = (<div className={wrapCls} style={style}>
        <div className="am-list-content">{children}</div>
        <div className="am-list-extra">
          {extra}
          {<Checkbox
            prefixCls="am-checkbox"
            defaultChecked={checked}
            name={name}
            onChange={this.props.onChange}
            disabled={disabled}
          />}
        </div>
      </div>);

    }
    return renderDom;
  }
}

CheckboxItem.PropTypes = {
  style         : PropTypes.object,
  name          : PropTypes.string,
  checked       : PropTypes.bool,
  disabled      : PropTypes.bool,
  onChange      : PropTypes.func,
};

CheckboxItem.defaultProps = {
  mode: '',
  name: '',
  checked: false,
  disabled: false,
  extra: '',
  onChange: () => {
  },
};
