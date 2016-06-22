import React from 'react';
import { Text } from 'react-native';
const THEMES = require('./style/index').ThemesList;
export default class Header extends React.Component {
    render() {
        return (React.createElement(Text, {style: THEMES.Header}, this.props.children));
    }
}
