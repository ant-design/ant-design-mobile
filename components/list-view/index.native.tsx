import React from 'react';

export default class ListView extends React.Component<any, any> {
  componentDidMount() {
    // tslint:disable-next-line:no-console
    console.warn(
      'React Native ListView has been officially marked as `DEPRECATED`,' +
        ' see https://facebook.github.io/react-native/docs/listview.html for details.',
    );
  }
  render() {
    return null;
  }
}
