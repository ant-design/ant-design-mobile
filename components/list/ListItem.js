var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { Image, View, TouchableHighlight, Text } from 'react-native';
import ReactElement from 'ReactElement';
const ASSETS = require('./style/index').AssetsList;
const THEMES = require('./style/index').ThemesList;
class Content extends React.Component {
    render() {
        return (React.createElement(Text, {style: [THEMES.Content, this.props.style], numberOfLines: 1}, this.props.children));
    }
}
class AffiliatedContent extends React.Component {
    render() {
        return (React.createElement(Text, {style: [THEMES.AffiliatedContent, this.props.style], numberOfLines: 1}, this.props.children));
    }
}
class Extra extends React.Component {
    render() {
        return (React.createElement(View, {style: { alignItems: 'flex-end' }}, this.props.children));
    }
}
class Detail extends React.Component {
    render() {
        return (React.createElement(Text, {style: [THEMES.Detail, this.props.style], numberOfLines: 1}, this.props.children));
    }
}
export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            __lazy: this.props.lazy,
        };
    }
    componentWillMount() {
        if (this.state.__lazy) {
            this.setTimeout(() => this.setState({ __lazy: false }), 500);
        }
    }
    render() {
        if (this.state.__lazy) {
            return (React.createElement(View, null));
        }
        let thumbDom = [];
        let contentDom = [];
        let extraDom = [];
        let arrowDom = [];
        if (this.props.thumb) {
            thumbDom = (React.createElement(Image, {source: { uri: this.props.thumb }, style: [THEMES.Thumb,
                this.props.line === 2 ? THEMES.Line2.Thumb : {}]}));
        }
        if ((this.props.line === 2) && ReactElement.isValidElement(this.props.children)) {
            contentDom = React.createElement(View, {style: { flex: 1 }}, this.props.children);
        }
        else {
            contentDom = React.createElement(Text, {style: THEMES.Content, numberOfLines: 1}, this.props.children);
        }
        if (this.props.extra) {
            if (ReactElement.isValidElement(this.props.extra)) {
                extraDom = this.props.extra;
            }
            else {
                extraDom = React.createElement(Text, {style: THEMES.Extra, numberOfLines: 1}, this.props.extra);
            }
        }
        if (this.props.arrow) {
            switch (this.props.arrow) {
                case 'horizontal':
                    arrowDom = React.createElement(Image, {source: { uri: ASSETS.arrowH }, style: THEMES.Arrow});
                    break;
                case 'down':
                    arrowDom = React.createElement(Image, {source: { uri: ASSETS.arrowDown }, style: THEMES.Arrow});
                    break;
                case 'up':
                    arrowDom = React.createElement(Image, {source: { uri: ASSETS.arrowUp }, style: THEMES.Arrow});
                    break;
                default:
                    arrowDom = React.createElement(View, {style: THEMES.Arrow});
                    break;
            }
        }
        const itemStyle = [THEMES.Item,
            this.props.line === 2 ? THEMES.Line2.Item : {},
            this.props.last ? THEMES.Last.Item : {},
            this.props.error ? THEMES.Error.Item : {},
            this.props.style];
        const itemView = (React.createElement(View, __assign({}, this.props, {style: itemStyle}), thumbDom, contentDom, extraDom, arrowDom));
        if (this.props.needActive) {
            return (React.createElement(TouchableHighlight, __assign({activeOpacity: 1, underlayColor: THEMES.underlayColor, onPress: this.props.onClick, onPressIn: () => { }, onPressOut: () => { }}, this.props), itemView));
        }
        return itemView;
    }
}
Item.propTypes = {
    extra(props, propName) {
        if (props[propName]) {
            if (!ReactElement.isValidElement(props[propName]) && typeof (props[propName]) !== 'string') {
                throw new Error('extra must be a string or element');
            }
        }
    },
    needActive: PropTypes.bool,
    onClick: PropTypes.func,
    line: PropTypes.number,
    arrow: PropTypes.oneOf(['horizontal', 'down', 'up']),
    error: PropTypes.bool,
    lazy: PropTypes.bool,
    last: PropTypes.bool
};
Item.defaultProps = {
    lazy: false,
    last: false,
    line: 1,
    needActive: true
};
Item.Content = Content;
Item.AffiliatedContent = AffiliatedContent;
Item.Extra = Extra;
Item.Detail = Detail;
