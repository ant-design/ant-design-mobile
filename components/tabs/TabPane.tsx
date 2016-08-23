import * as React from 'react';
import { View} from 'react-native';

export default class TabPane extends React.Component<any, any> {
  render() {
    const { tabLabel, children } = this.props;
    return (
        <View tabLabel={tabLabel}>
          {children}
        </View>
    );
  }
}
