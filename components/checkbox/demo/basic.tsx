import * as React from 'react';
import { View, Text } from 'react-native';
import { WhiteSpace, Checkbox, List } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
const CheckboxItem = Checkbox.CheckboxItem;

export default class BasicCheckboxExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Checkbox checked/>
          <WhiteSpace />
          <Checkbox />
          <WhiteSpace />
          <Checkbox checked disabled/>
          <WhiteSpace />
          <Checkbox disabled/>
        </View>

        <WhiteSpace />
        <AgreeItem>
          <Text>同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意同意</Text>
        </AgreeItem>
        <WhiteSpace />
        <AgreeItem checked>
          <Text>同意 《信用支付服务合同》 </Text>
        </AgreeItem>
        <WhiteSpace />
        <AgreeItem disabled >
          <Text>未选中，不可编辑 《信用支付服务合同》 </Text>
        </AgreeItem>
        <WhiteSpace />
        <AgreeItem checked disabled>
          <Text>强制选中,不可编辑 《信用支付服务合同信用支付服务合同信用支付服务合同》 </Text>
        </AgreeItem>

        <List>
          <List.Header>表单多选项，普通列表中多选项</List.Header>
          <List.Body>
            <CheckboxItem checked>签约</CheckboxItem>
            <CheckboxItem>物料铺设</CheckboxItem>
            <CheckboxItem disabled>机具维护（不能选）</CheckboxItem>
            <CheckboxItem disabled checked>产品问题解决（必选）</CheckboxItem>
          </List.Body>
        </List>
      </View>
    );
  }
}
