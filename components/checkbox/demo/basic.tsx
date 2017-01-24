import React from 'react';
import {View, Text} from 'react-native';
import {WhiteSpace, Checkbox, List} from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

export default class BasicCheckboxExample extends React.Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    };
  }

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Checkbox
            checked={this.state.checkBox1}
            style={{tintColor:'#f00'}}
            onChange={(event) => { this.setState({ checkBox1: event.target.checked }); }}
          />
          <WhiteSpace />
          <Checkbox>Checkbox</Checkbox>
          <WhiteSpace />
          <Checkbox checked disabled />
          <WhiteSpace />
          <Checkbox disabled />
        </View>

        <WhiteSpace />
        <AgreeItem>同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意</AgreeItem>
        <WhiteSpace />
        <AgreeItem
          checked={this.state.agreeItem1}
          checkboxStyle={{tintColor:'#f00'}}
          onChange={(event) => { this.setState({ agreeItem1: event.target.checked }); }}
        >
          同意 《信用支付服务合同
        </AgreeItem>
        <WhiteSpace />
        <AgreeItem disabled>未选中，不可编辑 《信用支付服务合同》</AgreeItem>
        <WhiteSpace />
        <AgreeItem checked disabled>强制选中,不可编辑 《信用支付服务合同信用支付服务合同信用支付服务合同》</AgreeItem>

        <List style={{marginTop: 12}}>
          <Text style={{marginTop: 12}}>表单多选项，普通列表中多选项</Text>
          <CheckboxItem
            checked={this.state.checkboxItem1}
            onChange={(event) => { this.setState({ checkboxItem1: event.target.checked }); }}
          >
            签约
          </CheckboxItem>
          <CheckboxItem>物料铺设</CheckboxItem>
          <CheckboxItem disabled>机具维护（不能选）</CheckboxItem>
          <CheckboxItem disabled checked>产品问题解决（必选）</CheckboxItem>
        </List>
      </View>
    );
  }
}
