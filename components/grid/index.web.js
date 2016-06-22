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
import Flex from '../flex';
import Carousel from '../carousel';
import splitObject from '../_util/splitObject';
function noop() { }
export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = (el, index) => {
            this.props.onClick(el, index);
        };
        this.onTouchStart = (index) => {
            if (this.props.needActive) {
                this.setState({
                    hover: true,
                    hoverIndex: index
                });
            }
        };
        this.onTouchEnd = () => {
            if (this.props.needActive) {
                this.setState({
                    hover: false,
                });
            }
        };
        this.state = {
            hover: false,
        };
    }
    componentWillMount() {
        this.clientWidth = document.documentElement.clientWidth;
    }
    render() {
        let [{ className, data, prefixCls, hasLine, isCarousel }, restProps] = splitObject(this.props, ['className', 'data', 'prefixCls', 'hasLine', 'isCarousel']);
        const wrapCls = classNames({
            [prefixCls]: true,
            [`${prefixCls}-line`]: hasLine,
            [className]: className
        });
        const itemCls = classNames({
            [`${prefixCls}-item-hover`]: needActive,
        });
        const dataLength = data.length;
        const FlexCount = Math.ceil(dataLength / 4);
        let gridContent = [];
        let carouselContent = [];
        const flexItemStyle = {
            height: `${this.clientWidth / 4}px`,
            paddingTop: `${(this.clientWidth / 4 - 40) / 2}px`
        };
        for (let i = 0; i < FlexCount; i++) {
            let flexContent = [];
            for (let j = 0; j < 4; j++) {
                if (i * 4 + j < dataLength) {
                    flexContent.push(React.createElement(Flex.Item, {className: itemCls, style: flexItemStyle, onClick: this.onClick.bind(this, data[i * 4 + j], (i * 4 + j)), key: `griditem-${i * 4 + j}`}, React.createElement("div", {className: `${prefixCls}-icon`, style: { backgroundImage: `url(${data[i * 4 + j].icon})` }}), React.createElement("div", {className: `${prefixCls}-text`}, data[i * 4 + j].text)));
                }
                else {
                    flexContent.push(React.createElement(Flex.Item, {style: flexItemStyle, key: `griditem-${i * 4 + j}`}));
                }
            }
            gridContent.push(React.createElement(Flex, {key: `fridflex${i}`}, flexContent));
        }
        if (isCarousel) {
            const gridContentLength = gridContent.length;
            for (let k = 0, len = Math.ceil(gridContentLength / 2); k < len; k++) {
                if (k * 2 < gridContentLength) {
                    carouselContent.push();
                }
                if (k * 2 + 1 < gridContentLength) {
                    carouselContent.push(React.createElement("div", {key: `carouselitem-${k * 2 + 1}`}, gridContent[k * 2], gridContent[k * 2 + 1]));
                }
                else {
                    carouselContent.push(React.createElement("div", {key: `carouselitem-${k * 2}`}, gridContent[k * 2], React.createElement(Flex, null, React.createElement(Flex.Item, {className: itemCls, style: flexItemStyle}), React.createElement(Flex.Item, {className: itemCls, style: flexItemStyle}), React.createElement(Flex.Item, {className: itemCls, style: flexItemStyle}), React.createElement(Flex.Item, {className: itemCls, style: flexItemStyle}))));
                }
            }
        }
        return (React.createElement("div", __assign({}, restProps, {className: wrapCls}), isCarousel === true ? React.createElement(Carousel, {mode: "banner", infinite: false}, carouselContent) : gridContent));
    }
}
Grid.propTypes = {
    prefixCls: PropTypes.string,
    data: PropTypes.array,
    onClick: PropTypes.func,
    hasLine: PropTypes.bool,
    needActive: PropTypes.bool,
    isCarousel: PropTypes.bool,
};
Grid.defaultProps = {
    prefixCls: 'am-grid',
    data: [],
    onClick: noop,
    hasLine: true,
    needActive: true,
    isCarousel: false,
};
