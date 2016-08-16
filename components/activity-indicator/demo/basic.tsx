import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WhiteSpace, ActivityIndicator } from 'antd-mobile';

export default class ActivityIndicatorExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingVisible: true,
    };
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <ActivityIndicator />
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <ActivityIndicator
          text="正在加载..."
        />
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <View style={[styles.horizontal]}>
          <ActivityIndicator color="black" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#00aa00" />
        </View>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <ActivityIndicator
          size="large"
        />
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
        <View style={[styles.centering]}>
          <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
          <ActivityIndicator
            toast
            size="large"
            text="正在加载"
          />
        </View>
        <WhiteSpace size={20} style={{ backgroundColor: '#fff' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});
