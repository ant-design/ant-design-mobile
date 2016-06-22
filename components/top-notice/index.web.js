import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
export default class TopNotice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }
    onClick() {
        const { mode, onClick } = this.props;
        onClick();
        if (mode === 'closable') {
            this.setState({
                show: false,
            });
        }
    }
    render() {
        const { prefixCls, children, mode, type, onClick, className } = this.props;
        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: !!className
        });
        let operationDom = '';
        switch (mode) {
            case 'closable':
                operationDom = (React.createElement("div", {className: "am-top-notice-operation", onClick: () => this.onClick()}, React.createElement(Icon, {type: "cross"})));
                break;
            case 'link':
                operationDom = (React.createElement("div", {className: "am-top-notice-operation", onClick: onClick}, React.createElement(Icon, {type: "right"})));
                break;
            default:
                operationDom = '';
                break;
        }
        let iconType = '';
        switch (type) {
            case 'success':
                iconType = 'check-circle';
                break;
            case 'error':
                iconType = 'cross-circle';
                break;
            case 'warn':
                iconType = 'exclamation-circle';
                break;
            case 'question':
                iconType = 'question-circle';
                break;
            case 'info':
            default:
                iconType = 'info-circle';
                break;
        }
        const iconDom = type ? React.createElement("div", {className: "am-top-notice-icon"}, React.createElement(Icon, {type: iconType})) : null;
        return this.state.show ? (React.createElement("div", {className: wrapCls}, iconDom, React.createElement("div", {className: "am-top-notice-content"}, children), operationDom)) : null;
    }
}
TopNotice.propTypes = {
    mode: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
};
TopNotice.defaultProps = {
    prefixCls: 'am-top-notice',
    mode: '',
    onClick() { },
};
