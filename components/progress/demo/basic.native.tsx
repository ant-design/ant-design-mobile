import { Button, Progress, WhiteSpace } from 'antd-mobile';
import React from 'react';
import { Text, View, ViewStyle } from 'react-native';

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      percent: 40,
    };
  }

  onAdd = () => {
    let p = this.state.percent + 10;
    if (this.state.percent >= 100) {
      p = 0;
    }
    this.setState({ percent: p });
  }

  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={[style as ViewStyle]}>
          <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>
        </View>
        <Button
          style={{ width: 50, marginLeft: 10 }}
          type="ghost"
          size="small"
          onClick={this.onAdd}
        >
          (+-)10
        </Button>

        <WhiteSpace />
        <Progress percent={5} />
      </View>
    );
  }
}
