import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() { }
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onSubmit(this.state.value);
        };
        this.onChange = (e) => {
            let value = e.target.value;
            this.setState({ value });
            this.props.onChange(value);
        };
        this.onFocus = (e) => {
            if (this.props.disablSearch) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }
            let value = e.target.value;
            this.setState({
                focus: true,
            });
            this.props.onFocus(value);
        };
        this.onBlur = (e) => {
            let value = e.target.value;
            this.setState({
                focus: false,
            });
            this.props.onBlur(value);
        };
        this.onCancel = () => {
            this.setState({ value: '' });
            this.props.onCancel('');
        };
        this.onClear = () => {
            this.setState({
                value: ''
            });
            this.refs.searchInput.focus();
            this.props.onClear('');
        };
        this.state = {
            value: this.props.value,
            focus: false,
        };
    }
    render() {
        const { prefixCls, showCancelButton, disablSearch, placeholder, cancelTxt, className } = this.props;
        const { value, focus } = this.state;
        const wrapCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        const inputCls = classNames({
            [`${prefixCls}-input`]: true,
            [`${prefixCls}-input-focus`]: focus,
            [`${prefixCls}-start`]: value.length > 0
        });
        let cancelStyle = value.length > 0 ? { display: 'block' } : { display: 'none' };
        return (React.createElement("form", {onSubmit: this.onSubmit}, React.createElement("div", {className: wrapCls}, React.createElement("div", {className: inputCls}, React.createElement("input", {type: "search", className: `${prefixCls}-value`, value: value, disabled: disablSearch, placeholder: placeholder, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, ref: "searchInput"}), React.createElement("a", {onClick: this.onClear, className: `${prefixCls}-clear`})), React.createElement("div", {className: `${prefixCls}-cancel`, style: showCancelButton ? { display: 'block' } : cancelStyle, onClick: this.onCancel}, cancelTxt))));
    }
}
SearchBar.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onCancel: PropTypes.func,
    onClear: PropTypes.func,
    showCancelButton: PropTypes.bool,
    cancelTxt: PropTypes.string,
    disablSearch: PropTypes.bool,
};
SearchBar.defaultProps = {
    prefixCls: 'am-search',
    value: '',
    placeholder: '',
    onSubmit: noop,
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    onCancel: noop,
    onClear: noop,
    showCancelButton: false,
    cancelTxt: '取消',
    disablSearch: false,
};
