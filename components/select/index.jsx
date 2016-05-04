import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class Select extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-select',
    name: '',
    align: 'left',
    value: '',
    options: [],
    onChange: noop,
  };

  onChange = (e) => {
    const value = e.target.value;
    this.props.onChange(value);
  };

  render() {
    let { prefixCls, options, align, className } = this.props;

    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-right`]: align === 'right',
      [className]: className
    });

    let Options = [];
    for (let i = 0, len = options.length; i < len; i++) {
      Options.push((<option value={options[i].val} key={options[i].val}>{options[i].txt}</option>));
    }

    return (<select {...this.props} className={wrapCls} onChange={this.onChange}>
      {Options}
    </select>);
  }
}
