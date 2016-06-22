import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() { }
export default class TextareaItem extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = () => {
            if (this.props.autoHeight) {
                this.initialTextHeight = this.refs.textarea.offsetHeight;
                this.componentDidUpdate();
            }
        };
        this.componentDidUpdate = () => {
            if (this.props.autoHeight) {
                let textareaDom = this.refs.textarea;
                textareaDom.style.height = '';
                textareaDom.style.height = `${Math.max(this.initialTextHeight, textareaDom.scrollHeight)}px`;
            }
        };
        this.onChange = (e) => {
            let value = e.target.value;
            const { count, onChange } = this.props;
            if (count > 0) {
                value = value.substring(0, count);
            }
            onChange(value);
        };
        this.onBlur = (e) => {
            setTimeout(() => {
                this.setState({
                    focus: false
                });
            }, 500);
            const value = e.target.value;
            this.props.onBlur(value);
        };
        this.onFocus = (e) => {
            this.setState({
                focus: true
            });
            const value = e.target.value;
            this.props.onFocus(value);
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
        let { prefixCls, prefixListCls, style, title, name, value, placeholder, clear, rows, count, editable, error, className } = this.props;
        const { focus } = this.state;
        const wrapCls = classNames({
            [`${prefixListCls}-item`]: true,
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-error`]: error,
            [`${prefixCls}-focus`]: focus,
            [className]: className
        });
        return (React.createElement("div", {className: wrapCls, style: style, onClick: this._handleClick}, title ? (React.createElement("div", {className: `${prefixCls}-label`}, title)) : null, React.createElement("div", {className: `${prefixCls}-control`}, React.createElement("textarea", {ref: "textarea", name: name, rows: rows, placeholder: placeholder, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, value: value, readOnly: !editable})), clear && editable && value.length > 0 ?
            (React.createElement("div", {className: `${prefixCls}-clear`, onClick: this.clearInput, onTouchStart: this.clearInput}))
            : null, error ? (React.createElement("div", {className: `${prefixCls}-error-extra`, onClick: this.onErrorClick})) : null, count > 0 && rows > 1 ? (React.createElement("span", {className: `${prefixCls}-count`}, React.createElement("span", null, value.length), "/", count)) : null));
    }
}
TextareaItem.propTypes = {
    prefixCls: PropTypes.string,
    prefixListCls: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['hasLine']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    clear: PropTypes.bool,
    rows: PropTypes.number,
    count: PropTypes.number,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    error: PropTypes.bool,
    onErrorClick: PropTypes.func,
    autoHeight: PropTypes.bool,
    editable: PropTypes.bool,
};
TextareaItem.defaultProps = {
    prefixCls: 'am-textarea',
    prefixListCls: 'am-list',
    title: '',
    type: 'hasLine',
    autoHeight: false,
    editable: true,
    name: '',
    value: '',
    placeholder: '',
    clear: false,
    rows: 1,
    count: 0,
    onChange: noop,
    onBlur: noop,
    onFocus: noop,
    onErrorClick: noop,
    error: false,
};
