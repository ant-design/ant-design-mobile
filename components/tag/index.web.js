var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            const props = this.props;
            if (props.type === 'read' || props.disabled)
                return;
            if (props.closable) {
                this.onClose();
            }
            else {
                const _selected = this.state.selected;
                this.setState({
                    selected: !_selected,
                }, () => {
                    props.onChange(!_selected);
                });
            }
        };
        this.onClose = (e) => {
            const props = this.props;
            props.onClose(e);
            this.setState({
                closed: true,
            }, () => {
                props.afterClose();
            });
        };
        this.state = {
            selected: props.selected,
            closed: false,
        };
    }
    render() {
        let [{ children, className, prefixCls, type, size, disabled, closable }, restProps] = splitObject(this.props, ['children', 'className', 'prefixCls', 'type', 'size', 'disabled', 'closable']);
        const selected = this.state.selected;
        const wrapCls = classNames({
            [className]: !!className,
            [prefixCls]: true,
            [`${prefixCls}-normal`]: !selected,
            [`${prefixCls}-active`]: (selected || closable) && !disabled && type !== 'read',
            [`${prefixCls}-read`]: type === 'read',
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-size-small`]: size === 'small',
            [`${prefixCls}-size-large`]: size === 'large',
        });
        const close = closable && !disabled && type !== 'read' && size === 'large' ? (React.createElement("div", {className: `${prefixCls}-close`}, React.createElement(Icon, {type: "cross"}))) : null;
        return this.state.closed ? null : (React.createElement("div", __assign({className: wrapCls}, restProps, {onClick: this.onClick}), React.createElement("div", {className: `${prefixCls}-text`}, children), close));
    }
}
Modal.propTypes = {
    type: PropTypes.oneOf(['action', 'read']),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['large', 'small']),
    closable: PropTypes.bool,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    afterClose: PropTypes.func,
    selected: PropTypes.bool,
};
Modal.defaultProps = {
    prefixCls: 'am-tag',
    type: 'read',
    disabled: false,
    size: 'large',
    closable: false,
    selected: false,
    onChange() { },
    onClose() { },
    afterClose() { },
};
