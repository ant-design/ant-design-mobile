var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import Button from '../button';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
function noop() { }
export default class PageResult extends React.Component {
    render() {
        let [{ prefixCls, imgUrl, title, message, buttonTxt, buttonClick, buttonType, buttonGhost, className }, restProps] = splitObject(this.props, ['prefixCls', 'imgUrl', 'title', 'message', 'className',
            'buttonTxt', 'buttonClick', 'buttonType', 'buttonGhost']);
        const wrapCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), React.createElement("div", {className: `${prefixCls}-pic`, style: { backgroundImage: `url(${imgUrl})` }}), title !== '' ? (React.createElement("div", {className: `${prefixCls}-title`}, title)) : null, message !== '' ? (React.createElement("div", {className: `${prefixCls}-message`}, message)) : null, buttonTxt !== '' ? (React.createElement("div", {className: `${prefixCls}-button`}, React.createElement(Button, {type: buttonType, ghost: buttonGhost, onClick: buttonClick}, buttonTxt))) : null));
    }
}
PageResult.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    buttonTxt: PropTypes.string,
    buttonType: PropTypes.string,
    buttonGhost: PropTypes.bool,
    buttonClick: PropTypes.func,
};
PageResult.defaultProps = {
    prefixCls: 'am-page-result',
    imgUrl: '',
    title: '',
    message: '',
    buttonTxt: '',
    buttonType: 'default',
    buttonGhost: false,
    buttonClick: noop,
};
