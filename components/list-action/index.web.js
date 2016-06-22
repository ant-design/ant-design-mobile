var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import Swipeout from 'react-swipeout';
import Hammer from 'react-hammerjs';
import Modal from '../modal';
class ListAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
        this.onLongTap = this.onLongTap.bind(this);
        this.onClose = this.onClose.bind(this);
    }
    onLongTap() {
        const { disabled, onOpen } = this.props;
        if (disabled) {
            return;
        }
        onOpen();
        this.setState({
            showModal: true,
        });
    }
    onClose() {
        this.props.onClose();
        this.setState({
            showModal: false,
        });
    }
    onAndroidBtnClick(btn) {
        const onPress = btn.onPress;
        if (onPress) {
            onPress();
        }
        if (this.props.autoClose) {
            this.onClose();
        }
    }
    renderAndroid() {
        const { children, title } = this.props;
        const pressOption = {
            recognizers: {
                press: {
                    time: 500,
                    threshold: 50
                }
            }
        };
        return (React.createElement("div", null, React.createElement(Hammer, {onPress: this.onLongTap, options: pressOption}, children), this.state.showModal ? (React.createElement(Modal, {animated: false, title: title, transparent: true, closable: true, maskClosable: true, onClose: this.onClose, footer: this.renderAndroidBtn(), visible: true})) : null));
    }
    renderAndroidBtn() {
        const { prefixCls, left, right } = this.props;
        const actions = [...left, ...right];
        return (React.createElement("ul", {className: `${prefixCls}-android-actions`}, actions.map((btn, i) => {
            return (React.createElement("li", {key: i, className: `${prefixCls}-android-btn`, onClick: () => this.onAndroidBtnClick(btn)}, btn.text));
        })));
    }
    render() {
        const isAndroid = !!navigator.userAgent.match(/Android/i);
        const { prefixCls, left, right, style } = this.props;
        return (left.length || right.length) ? (React.createElement("div", {className: `${prefixCls}`, style: style}, isAndroid ? this.renderAndroid() : (React.createElement(Swipeout, __assign({}, this.props))))) : (React.createElement("div", null));
    }
}
ListAction.propTypes = {
    prefixCls: PropTypes.string,
    autoClose: PropTypes.bool,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    left: PropTypes.arrayOf(PropTypes.object),
    right: PropTypes.arrayOf(PropTypes.object),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.any,
};
ListAction.defaultProps = {
    prefixCls: 'am-listaction',
    title: '请确认操作',
    autoClose: false,
    disabled: false,
    left: [],
    right: [],
    onOpen() { },
    onClose() { },
};
export default ListAction;
