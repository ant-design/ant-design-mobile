import React, { PropTypes } from 'react';
import classNames from 'classnames';
import objectAssign from 'object-assign';
import SubMenu from './SubMenu';
import List from '../list';
import Flex from '../flex';
function noop() { }
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.onClickListItem = (el) => {
            if (el.isLeaf === true) {
                this.setState({
                    firstValue: el.value,
                    SubMenuData: []
                }, () => {
                    this.props.onChange([el.value]);
                });
            }
            else {
                this.setState({
                    firstValue: el.value,
                    SubMenuData: el.children || []
                });
            }
        };
        this.onClickSubMenuItem = (el) => {
            setTimeout(() => {
                if (this.props.level === 2) {
                    this.props.onChange([this.state.firstValue, el.value]);
                }
                else {
                    this.props.onChange([el.value]);
                }
            }, 300);
        };
        const { data, value, level } = this.props;
        if (level === 2) {
            let SubMenuData = (data.filter((el) => { return el.value === (value.length > 0 && value[0] || null); }))[0].children || [];
            this.state = {
                SubMenuData,
                firstValue: value[0] || '',
            };
        }
        else {
            this.state = {
                SubMenuData: data
            };
        }
    }
    render() {
        let { className, data, prefixCls, height, value, level, style } = this.props;
        if (!height) {
            height = document.documentElement.clientHeight / 2;
        }
        let heightStyle = {
            height: `${height}px`,
            overflowY: 'scroll'
        };
        style = objectAssign(style || {}, heightStyle);
        let { SubMenuData, firstValue } = this.state;
        const wrapCls = classNames({
            [prefixCls]: true,
            [className]: className
        });
        let listContent = [];
        data.forEach((el, index) => {
            listContent.push(React.createElement(List.Item, {className: el.value === firstValue ? `${prefixCls}-selected` : '', onClick: this.onClickListItem.bind(this, el), key: `listitem-1-${index}`}, el.label));
        });
        return (React.createElement("div", {className: wrapCls, style: style}, React.createElement(Flex, {align: "top"}, level === 2 ? (React.createElement(Flex.Item, {style: heightStyle}, React.createElement(List, null, React.createElement(List.Body, null, listContent)))) : null, React.createElement(Flex.Item, {style: heightStyle}, React.createElement(SubMenu, {value: SubMenuData.filter((el) => {
            return el.value === (value.length && value[value.length - 1]);
        }), data: SubMenuData, onChange: this.onClickSubMenuItem})))));
    }
}
Menu.propTypes = {
    prefixCls: PropTypes.string,
    data: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    level: PropTypes.oneOf([1, 2]),
    height: PropTypes.number,
};
Menu.defaultProps = {
    prefixCls: 'am-menu',
    value: [],
    data: [],
    level: 2,
    onChange: noop,
};
