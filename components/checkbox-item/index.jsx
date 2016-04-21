import React, { PropTypes } from 'react';
import classNames from 'classnames';
import List from '../list';
import Checkbox from 'rc-checkbox';

export default class CheckboxItem extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    extra: PropTypes.any,
  };

  static defaultProps = {
    mode: 'normal',
    name: '',
    checked: false,
    disabled: false,
    extra: '',
    onChange: () => {
    },
  };

  render() {
    const { style, mode, name, checked, disabled, extra, children, className } = this.props;
    const wrapCls = classNames({
      'am-list-item': mode === 'normal',
      'am-list-item-check': mode === 'normal',
      'am-checkbox-agree': mode === 'agree',
      [className]: className
    });

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
          <label className="am-ft-md" htmlFor={name}>{children}</label>
        </div>
      </div>);
    } else {
      // console.log({...this.props});
      renderDom = (<List.Item
        extra={extra}
        thumb={<Checkbox
          prefixCls="am-checkbox"
          defaultChecked={checked}
          name={name}
          onChange={this.props.onChange}
          disabled={disabled}
        />}
      >
        {children}
      </List.Item>);
      /*
      renderDom = (<div className={wrapCls} style={style}>
        <div className="am-list-thumb">
          {<Checkbox
            prefixCls="am-checkbox"
            defaultChecked={checked}
            name={name}
            onChange={this.props.onChange}
            disabled={disabled}
          />}
        </div>
        <div className="am-list-content">{children}</div>
        <div className="am-list-extra">{extra}</div>
      </div>);
      */
    }
    return renderDom;
  }
}
