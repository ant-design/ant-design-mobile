import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() { }
export default class InputItem extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = (e) => {
            let value = e.target.value;
            const { maxLength, onChange, format } = this.props;
            switch (format) {
                case 'text': {
                    if (maxLength > 0) {
                        value = value.substring(0, maxLength);
                    }
                    break;
                }
                case 'bankCard': {
                    value = value.replace(/\D/g, '');
                    if (maxLength > 0) {
                        value = value.substring(0, maxLength);
                    }
                    value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
                    break;
                }
                case 'phone': {
                    value = value.replace(/\D/g, '');
                    if (maxLength > 0) {
                        value = value.substring(0, 11);
                    }
                    const valueLen = value.length;
                    if (valueLen > 3 && valueLen < 8) {
                        value = `${value.substr(0, 3)} ${value.substr(3)}`;
                    }
                    else if (valueLen >= 8) {
                        value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
                    }
                    break;
                }
                case 'number': {
                    value = value.replace(/\D/g, '');
                    break;
                }
                case 'password': {
                    break;
                }
                default: {
                    break;
                }
            }
            onChange(value);
        };
        this.onInputBlur = (e) => {
            setTimeout(() => {
                this.setState({
                    focus: false
                });
            }, 300);
            const value = e.target.value;
            this.props.onBlur(value);
        };
        this.onInputFocus = (e) => {
            this.setState({
                focus: true
            });
            const value = e.target.value;
            this.props.onFocus(value);
        };
        this.onExtraClick = (e) => {
            this.props.onExtraClick(e);
        };
        this.onErrorClick = () => {
            this.props.onErrorClick();
        };
        this.clearInput = () => {
            this.props.onChange('');
        };
        this.state = {
            focus: false,
        };
    }
    render() {
        const { prefixCls, prefixListCls, format, type, name, editable, value, placeholder, style, clear, children, error, className, extra } = this.props;
        const { focus } = this.state;
        const wrapCls = classNames({
            [`${prefixListCls}-item`]: type === 'hasLine',
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-error`]: error,
            [`${prefixCls}-focus`]: focus,
            [className]: className
        });
        let inputType = 'text';
        if (format === 'bankCard' || format === 'phone') {
            inputType = 'tel';
        }
        else if (format === 'password') {
            inputType = 'password';
        }
        return (React.createElement("div", {className: wrapCls, style: style}, children ? (React.createElement("div", {className: `${prefixCls}-label`}, children)) : null, React.createElement("div", {className: `${prefixCls}-control`}, React.createElement("input", {type: inputType, name: name, placeholder: placeholder, value: value, onChange: this.onInputChange, onBlur: this.onInputBlur, onFocus: this.onInputFocus, readOnly: !editable, pattern: format === 'number' ? '[0-9]*' : ''})), clear && editable && value.length > 0 ?
            React.createElement("div", {className: `${prefixCls}-clear`, onClick: this.clearInput, onTouchStart: this.clearInput})
            : null, error ? (React.createElement("div", {className: `${prefixCls}-error-extra`, onClick: this.onErrorClick})) : null, extra !== '' ? React.createElement("div", {className: `${prefixCls}-extra`, onClick: this.onExtraClick}, extra) : null));
    }
}
InputItem.propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['hasLine']),
    format: PropTypes.oneOf(['text', 'bankCard', 'phone', 'password', 'number']),
    editable: PropTypes.bool,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    extra: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    onExtraClick: PropTypes.func,
    error: PropTypes.bool,
    onErrorClick: PropTypes.func,
    size: PropTypes.oneOf(['large', 'small']),
    labelPosition: PropTypes.oneOf(['left', 'top']),
    textAlign: PropTypes.oneOf(['left', 'center']),
};
InputItem.defaultProps = {
    prefixCls: 'am-input',
    prefixListCls: 'am-list',
    type: 'hasLine',
    format: 'text',
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    maxLength: -1,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    extra: '',
    onExtraClick: noop,
    error: false,
    onErrorClick: noop,
    size: 'large',
    labelPosition: 'left',
    textAlign: 'left',
};
