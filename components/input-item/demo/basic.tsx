import * as React from 'react';
import { View } from 'react-native';
import { InputItem, List } from 'antm';

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
      labelnum4: '',
      labelnum5: '',
      labelnum6: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
    };
  }

  render() {
    return (
      <View>
        <List>
          <List.Body>
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
            >输入框</InputItem>
            <InputItem
              clear
              onErrorPress={() => { alert(1); }}
              value="不可编辑"
              onChange={(value) => {
                this.setState({
                  value,
                });
              }}
              extra="元"
              placeholder="不可编辑"
              editable={false}
            >输入框</InputItem>
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
          </List.Body>
        </List>
        <List>
          <List.Body>
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
            >姓名</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
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
            >校验码</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
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
            >四字标签</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
            <InputItem
              clear
              value={this.state.labelnum4}
              onChange={(value) => {
                this.setState({
                  labelnum4: value,
                });
              }}
              labelNumber={5}
              placeholder="五个字标签"
            >五个字标签</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
            <InputItem
              clear
              value={this.state.labelnum5}
              onChange={(value) => {
                this.setState({
                  labelnum5: value,
                });
              }}
              labelNumber={6}
              placeholder="六个字标签"
            >六个字标签六</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Body>
            <InputItem
              clear
              value={this.state.labelnum6}
              onChange={(value) => {
                this.setState({
                  labelnum6: value,
                });
              }}
              labelNumber={7}
              placeholder="七个字标签"
            >七个字标签七个</InputItem>
          </List.Body>
        </List>
        <List>
          <List.Header>格式</List.Header>
          <List.Body>
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
            >文本输入</InputItem>
            <InputItem
              clear
              format="bankCard"
              value={this.state.bankcard}
              onChange={(value) => {
                  this.setState({
                    bankcard: value,
                  });
                }}
              placeholder="bankCard"
            >银行卡</InputItem>
            <InputItem
              clear
              format="phone"
              value={this.state.phone}
              onChange={(value) => {
                  this.setState({
                    phone: value,
                  });
                }}
              placeholder="phone"
            >手机号</InputItem>
            <InputItem
              clear
              format="password"
              value={this.state.password}
              onChange={(value) => {
                  this.setState({
                    password: value,
                  });
                }}
              placeholder="password"
            >密码</InputItem>
            <InputItem
              clear
              format="number"
              value={this.state.number}
              onChange={(value) => {
                  this.setState({
                    number: value,
                  });
                }}
              placeholder="number"
            >数字</InputItem>
          </List.Body>
        </List>
      </View>
    );
  }
}
