import React from 'react';
import NavBarProps from './PropsType';

export default class NavBar extends React.Component<NavBarProps, any> {
  componentDidMount() {
    console.warn('NavBar does not support react-native, please use react-native navigator instead. ');
  }
  render() {
    return null;
  }
}
