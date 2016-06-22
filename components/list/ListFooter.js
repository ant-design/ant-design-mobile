import React, { PropTypes } from 'react';
import { Text } from 'react-native';
const THEMES = require('./style/index').ThemesList;
export default class Footer extends React.Component {
    render() {
        let alignStyle = {};
        switch (this.props.align) {
            case 'middle':
                alignStyle = { textAlign: 'center' };
                break;
            case 'right':
                alignStyle = { textAlign: 'right' };
                break;
            default:
                alignStyle = { textAlign: 'left' };
                break;
        }
        return (React.createElement(Text, {style: [THEMES.Footer, alignStyle]}, this.props.children));
    }
}
Footer.propTypes = {
    align: PropTypes.oneOf(['left', 'middle', 'right'])
};
Footer.defaultProps = {
    align: 'left'
};
