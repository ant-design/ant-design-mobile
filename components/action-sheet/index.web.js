var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
import Icon from '../icon';
import assign from 'object-assign';
const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
let closeFn = () => { };
function createActionSheet(flag, config, callback) {
    const props = assign({}, {
        prefixCls: 'am-action-sheet',
    }, config);
    const { prefixCls, transitionName, maskTransitionName, maskClosable = true } = props;
    let div = document.createElement('div');
    document.body.appendChild(div);
    let d;
    function close() {
        d.setState({
            visible: false
        });
        if (div) {
            ReactDOM.unmountComponentAtNode(div);
            div.parentNode.removeChild(div);
            div = null;
        }
    }
    closeFn = close;
    function cb(info) {
        callback(info);
        close();
    }
    const { title, message, options, destructiveButtonIndex, cancelButtonIndex } = props;
    let children = null;
    switch (flag) {
        case NORMAL:
            children = (React.createElement("div", {className: `${prefixCls}-normal`}, React.createElement("h3", {className: `${prefixCls}-title`}, title), React.createElement("div", {className: `${prefixCls}-message`}, message), React.createElement("ul", {className: `${prefixCls}-button-list`}, options.map((item, index) => {
                const extraProp = {
                    onClick: () => cb(index),
                };
                let li = React.createElement("li", __assign({className: [`${prefixCls}-button-list-item`], key: index}, extraProp), item);
                const cls = {
                    [`${prefixCls}-destructive-button`]: destructiveButtonIndex === index,
                    [`${prefixCls}-cancel-button`]: cancelButtonIndex === index,
                };
                if (cancelButtonIndex === index || destructiveButtonIndex === index) {
                    li = React.createElement("li", __assign({key: index, className: classNames(cls)}, extraProp), item);
                }
                return li;
            }))));
            break;
        case SHARE:
            children = (React.createElement("div", {className: `${prefixCls}-share`}, React.createElement("h3", {className: `${prefixCls}-title`}, title), React.createElement("div", {className: `${prefixCls}-message`}, message), React.createElement("ul", {className: `${prefixCls}-share-content`}, options.map((item, index) => {
                const extraProp = {
                    onClick: () => cb(index),
                };
                return (React.createElement("li", __assign({key: index}, extraProp), React.createElement("p", {className: `${prefixCls}-share-item-icon`}, item.iconName ? React.createElement(Icon, {type: item.iconName}) : item.icon), React.createElement("p", {className: `${prefixCls}-share-item-title`}, item.title)));
            }))));
            break;
        default:
            children = (React.createElement("div", {className: `${prefixCls}-custom`}, React.createElement("h3", {className: `${prefixCls}-title`}, title), React.createElement("div", {className: `${prefixCls}-message`}, message), React.createElement("div", {className: `${prefixCls}-custom-content`}, props.component)));
    }
    ReactDOM.render(React.createElement(Dialog, {prefixCls: prefixCls, visible: true, title: "", footer: "", transitionName: transitionName || `${prefixCls}-slide-fade`, maskTransitionName: maskTransitionName || `${prefixCls}-fade`, onClose: close, maskClosable: maskClosable}, children), div, function () {
        d = this;
    });
}
export default class ActionSheet {
}
ActionSheet.showActionSheetWithOptions = (config, callback = () => { }) => {
    createActionSheet(NORMAL, config, callback);
};
ActionSheet.showShareActionSheetWithOptions = (config, callback = () => { }) => {
    createActionSheet(SHARE, config, callback);
};
ActionSheet.showActionSheetWithCustom = (config, callback = () => { }) => {
    createActionSheet(null, config, callback);
};
ActionSheet.close = () => {
    closeFn();
};
