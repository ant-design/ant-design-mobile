import * as React from 'react';
import { PropTypes } from 'react';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import tsPropsType from './PropsType';
// import splitObject from '../_util/splitObject';

export default class FloatMenu extends React.Component<tsPropsType, any> {
  static propTypes = {
    children: PropTypes.any,
  };
  static defaultProps = {
    onSelect: () => { },
  };
  render() {
    const { children, onSelect, overlay, disabled,
      name, style, triggerStyle, overlayStyle, contextStyle, renderOverlayComponent } = this.props;
    const menuOptionsProp = {
      optionsContainerStyle: overlayStyle,
      renderOptionsContainer: renderOverlayComponent,
    };
    return (<MenuContext ref="menuContext" style={contextStyle}>
      <Menu name={name} onSelect={onSelect} style={style}>
        <MenuTrigger disabled={disabled} style={triggerStyle}>
          {children}
        </MenuTrigger>
        <MenuOptions {...menuOptionsProp}>
          {overlay}
        </MenuOptions>
      </Menu>
    </MenuContext>);
  }
}

FloatMenu.Item = MenuOption;
