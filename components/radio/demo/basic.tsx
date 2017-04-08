/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Radio, List } from 'antd-mobile';
const RadioItem = Radio.RadioItem;

export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    part1Value: 1,
    part2Value: 1,
  };

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Radio
            checked={this.state.part1Value === 1}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: 1 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          >
            支持
          </Radio>
          <WhiteSpace />
          <Radio
            checked={this.state.part1Value === 2}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part1Value: 2 });
              }
            }}
            style={{ borderWidth: 1, borderColor: '#999', margin: 10 }}
          />
          <WhiteSpace />
        </View>

        <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>表单单选项，普通列表中单选项</Text>
          <RadioItem
            checked={this.state.part2Value === 1}
            onChange={(event) => {
              if (event.target.checked) {
              this.setState({ part2Value: 1 });
              }
            }}
          >
            使用 Ant Desgin Component
          </RadioItem>
          <RadioItem
            checked={this.state.part2Value === 2}
            onChange={(event) => {
              if (event.target.checked) {
                this.setState({ part2Value: 2 });
              }
            }}
          >
            使用 Ant Desgin Component
          </RadioItem>
          <RadioItem disabled>个性化调整disabled</RadioItem>
          <RadioItem disabled checked>个性化调整disabled</RadioItem>
        </List>
      </View>
    );
  }
}
