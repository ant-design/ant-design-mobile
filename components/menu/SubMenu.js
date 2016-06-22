import React, { PropTypes } from 'react';
import classNames from 'classnames';
import List from '../list/index';
import Radio from '../radio/index';
function noop() { }
export default class SubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = (el) => {
            this.setState({
                value: [el]
            });
            this.props.onChange(el);
        };
        this.state = {
            value: this.props.value,
            data: this.props.data
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        });
    }
    render() {
        const { value, data } = this.state;
        const { className, prefixCls, radioPrefixCls } = this.props;
        const subMenuCls = classNames({
            [`${prefixCls}`]: true,
            [className]: className
        });
        const itemsDom = [];
        data.forEach((el, idx) => {
            const listItemCls = classNames({
                [`${radioPrefixCls}-item`]: true,
                [`${prefixCls}-item-selected`]: value.length > 0 && value[0].value === el.value,
                [`${prefixCls}-item-disabled`]: el.disabled,
            });
            itemsDom.push(React.createElement(List.Item, {className: listItemCls, key: idx, extra: React.createElement(Radio, {value: el.value, checked: value.length > 0 && value[0].value === el.value, disabled: el.disabled, onChange: this.onClick.bind(this, el)})}, el.label));
        });
        return (React.createElement(List, {style: { paddingTop: 0 }, className: subMenuCls}, React.createElement(List.Body, null, itemsDom)));
    }
}
SubMenu.propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.array,
    data: PropTypes.array,
    onChange: PropTypes.func,
};
SubMenu.defaultProps = {
    prefixCls: 'am-sub-menu',
    radioPrefixCls: 'am-radio',
    value: [],
    data: [],
    onChange: noop
};
