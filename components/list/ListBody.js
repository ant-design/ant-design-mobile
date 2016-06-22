var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { PropTypes } from 'react';
import { View } from 'react-native';
const THEMES = require('./style/index').ThemesList;
export default class Body extends React.Component {
    render() {
        return (React.createElement(View, __assign({}, this.props, {style: [THEMES.Body,
            this.props.error ? THEMES.Error.Body : {},
            this.props.style]}), this.props.children));
    }
}
Body.propTypes = {
    error: PropTypes.bool
};
