import React from 'react';
import { ScrollView } from 'react-native';
import { TextareaItem, List } from 'antd-mobile';

export default class BasicTextAreaItemExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value1: '默认带value',
      text: '',
      height: 0,
    };
  }

  onChange = (_e) => {
    // console.log('onChange');
    // console.log(e.text);
  }

  onFocus = () => {
    // console.log('onFocus');
  }

  onBlur = () => {
    // console.log('onBlur');
  }

  handleError = () => {
    // console.log('onErrorClick')
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List
          renderHeader={() => '基本' }
        >
          <TextareaItem
            rows = {4}
            placeholder="固定行数"
            onChange={(e) => this.onChange(e)}
            onFocus={() => this.onFocus()}
          />
          <TextareaItem
            rows = {5}
            count = {100}
            placeholder="多行带计数"
            onChange={(e) => this.onChange(e)}
            onFocus={() => this.onFocus()}
          />
          <TextareaItem
            keyboardType="email-address"
            value={this.state.value1}
            onChange={(e) => this.onChange(e)}
          />
          <TextareaItem
            placeholder="高度自适应"
            autoHeight = {true}
            onChange={(e) => this.onChange(e)}
          />
          <TextareaItem
            value="不可编辑 editable = {false}"
            editable = {false}
          />
          <TextareaItem
            clear={false}
            placeholder="最大长度10，不带清除clear={false}"
            count = {10}
            title="标题"
          />
          <TextareaItem
            error
            value="报错样式 error={true}"
            count = {200}
            onErrorClick = {this.handleError}
          />
        </List>
      </ScrollView>
    );
  }
}
