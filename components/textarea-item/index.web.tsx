import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

import TextareaItemProps from './TextAreaItemPropsType';

export interface TextareaItemState {
  focus: boolean;
}

export default class TextareaItem extends React.Component<TextareaItemProps, TextareaItemState> {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelNumber: PropTypes.oneOf([2, 3, 4, 5, 6, 7]),
  };

  static defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    title: '',
    autoHeight: false,
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    rows: 1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
    labelNumber: 4,
  };

  initialTextHeight: number;

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
  }

  componentDidMount = () => {
    if (this.props.autoHeight) {
      this.initialTextHeight = (this.refs as any).textarea.offsetHeight;
      this.componentDidUpdate();
    }
  };

  componentDidUpdate = () => {
    if (this.props.autoHeight) {
      let textareaDom = (this.refs as any).textarea;
      textareaDom.style.height = '';
      textareaDom.style.height = `${Math.max(this.initialTextHeight, textareaDom.scrollHeight)}px`;
    }
  };

  onChange = (e) => {
    let value = e.target.value;
    const { onChange } = this.props;
    onChange(value);
  };

  onBlur = (e) => {
    setTimeout(() => {
      this.setState({
        focus: false,
      });
    }, 500);
    const value = e.target.value;
    this.props.onBlur(value);
  };

  onFocus = (e) => {
    this.setState({
      focus: true,
    });
    const value = e.target.value;
    this.props.onFocus(value);
  };

  onErrorClick = () => {
    this.props.onErrorClick();
  };

  clearInput = () => {
    this.props.onChange('');
  };

  render() {
    let {
      prefixCls, prefixListCls, style, title, name, value, placeholder, clear, rows, count,
      editable, error, className, labelNumber, autoHeight } = this.props;
    const { focus } = this.state;
    const wrapCls = classNames({
      [`${prefixListCls}-item`]: true,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-single-line`]: rows === 1 && !autoHeight,
      [`${prefixCls}-error`]: error,
      [`${prefixCls}-focus`]: focus,
      [className]: className,
    });

    const labelCls = classNames({
      [`${prefixCls}-label`]: true,
      [`${prefixCls}-label-2`]: labelNumber === 2,
      [`${prefixCls}-label-3`]: labelNumber === 3,
      [`${prefixCls}-label-4`]: labelNumber === 4,
      [`${prefixCls}-label-5`]: labelNumber === 5,
      [`${prefixCls}-label-6`]: labelNumber === 6,
      [`${prefixCls}-label-7`]: labelNumber === 7,
    });

    return (
      <div className={wrapCls} style={style}>
        {title ? (<div className={labelCls}>{title}</div>) : null}
        <div className={`${prefixCls}-control`}>
          <textarea
            ref="textarea"
            name={name}
            rows={rows}
            placeholder={placeholder}
            maxLength={count}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            value={value}
            readOnly={!editable}
          />
        </div>
        {clear && editable && value.length > 0 ?
          (<div className={`${prefixCls}-clear`} onClick={this.clearInput} onTouchStart={this.clearInput} />)
          : null}
        {error ? (<div className={`${prefixCls}-error-extra`} onClick={this.onErrorClick} />) : null}
        {count > 0 && rows > 1
          ? (<span className={`${prefixCls}-count`}><span>{value.length}</span>/{count}</span>)
          : null}
      </div>
    );
  }
}
