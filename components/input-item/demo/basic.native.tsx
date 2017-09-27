/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { InputItem, List, Button } from 'antd-mobile';

declare var jest: any;

export default class BasicInputItemExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
      focused: false,
    };
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => '基本'}>
          <InputItem
            clear
            error
            onErrorPress={() => { alert('点击了错误icon'); }}
            value={this.state.value}
            onChange={(value) => {
              this.setState({
                value,
              });
            }}
            extra="元"
            placeholder="有标签"
          >
            输入框
          </InputItem>
          <InputItem
            clear
            onErrorPress={() => { alert(1); }}
            value="不可编辑"
            onChange={(value) => {
              this.setState({
                value,
              });
            }}
            extra={<Text>元</Text>}
            placeholder="不可编辑"
            editable={false}
          >
            输入框
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value) => {
              this.setState({
                value1: value,
              });
            }}
            placeholder="无标签"
          />
          <InputItem
            defaultValue="xx"
            clear
            placeholder="自动获取光标"
            autoFocus={/* TODO: https://github.com/facebook/jest/issues/3707  */typeof(jest) === 'undefined'}
          >
            标题
          </InputItem>
          <InputItem
            clear
            placeholder="点击下方按钮该输入框会获取光标"
            focused={this.state.focused}
            onFocus={() => {
              this.setState({
                focused: false,
              });
            }}
          >
            标题
          </InputItem>
          <List.Item>
            <Button
              onClick={() => {
                this.setState({
                  focused: true,
                });
              }}
              type="primary"
            >
              点击获取光标
            </Button>
          </List.Item>
        </List>
        <List renderHeader={() => '固定标签字数'} >
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value) => {
              this.setState({
                labelnum1: value,
              });
            }}
            labelNumber={2}
            placeholder="两个字标签"
          >
            姓名
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            onChange={(value) => {
              this.setState({
                labelnum2: value,
              });
            }}
            labelNumber={3}
            placeholder="三个字标签"
          >
            校验码
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            onChange={(value) => {
              this.setState({
                labelnum3: value,
              });
            }}
            labelNumber={4}
            placeholder="四个字标签（默认）"
          >
            四字标签
          </InputItem>
        </List>
        <List renderHeader={() => '格式'}>
          <InputItem
            clear
            error
            value={this.state.text}
            onChange={(value) => {
                this.setState({
                  text: value,
                });
              }}
            placeholder="text"
          >
            文本输入
          </InputItem>
          <InputItem
            clear
            type="bankCard"
            value={this.state.bankcard}
            onChange={(value) => {
                this.setState({
                  bankcard: value,
                });
              }}
            placeholder="bankCard"
          >
            银行卡
          </InputItem>
          <InputItem
            clear
            type="phone"
            value={this.state.phone}
            onChange={(value) => {
                this.setState({
                  phone: value,
                });
              }}
            placeholder="phone"
          >
            手机号
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value) => {
                this.setState({
                  password: value,
                });
              }}
            placeholder="password"
          >
            密码
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            onChange={(value) => {
                this.setState({
                  number: value,
                });
              }}
            placeholder="number"
          >
            数字
          </InputItem>
        </List>
      </ScrollView>
    );
  }
}
