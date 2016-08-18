import * as React from 'react';
import { View } from 'react-native';
import { WingBlank, WhiteSpace, Button, Progress } from 'antd-mobile';

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      percent: 10,
    };
  }

  onAdd = () => {
    this.setState({
      percent: this.state.percent + 10,
    });
  }

  onMius = () => {
    this.setState({
      percent: this.state.percent - 10,
    });
  }

  render() {
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={{ marginTop: 80 }}>
          <Progress percent={ this.state.percent } />
        </View>
        <WhiteSpace/>
        <WhiteSpace/>
        <WingBlank style={{ marginTop: 120, flexDirection: 'row' }}>
            <Button type={'default'} onPress={this.onAdd}>
              +
            </Button>
            <Button style={{ marginLeft: 10 }} type={'default'} onPress={this.onMius}>
              -
            </Button>
            <View style={{ flex: 1 }} />
        </WingBlank>
        <WhiteSpace/>
        <WhiteSpace/>
        <View style={{ marginTop: 80 }}>
          <Progress percent={5} />
        </View>

      </View>
    );
  }
}
