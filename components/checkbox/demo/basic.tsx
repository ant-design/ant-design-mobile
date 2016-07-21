import * as React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { List } from 'antm';
import Checkbox from '../index';
import CheckStyle from '../style/index';
const styles = CheckStyle.CheckboxItem;

export default class BasicCheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked1: true,
      checked2: false
    }
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#F5F5F9'}}>
        <List>
          <List.Header>多选框</List.Header>
          <List.Body>
            <Checkbox checked={this.state.checked1} onChange={()=>this.setState({checked1: !this.state.checked1})}>默认选中</Checkbox>
            <Checkbox checked={this.state.checked2} onChange={()=>this.setState({checked2: !this.state.checked2})}>默认不选</Checkbox>
            <Checkbox last={true} disabled={true}>禁用</Checkbox>
          </List.Body>
        </List>
        <Checkbox mode="agree">
          <Text style={styles.agreementText}>同意</Text>
          <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}><Text style={styles.agreementContact}>《信用支付服务合同》</Text></TouchableOpacity>
        </Checkbox>
        <Checkbox mode="agree" disabled={true}>
          <Text style={styles.agreementText}>强制选中，无法取消</Text>
          <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}><Text style={styles.agreementContact}>《信用支付服务合同》</Text></TouchableOpacity>
        </Checkbox>
        <Checkbox mode="agree" checked={true}>
          <Text style={styles.agreementText}>同意</Text>
          <TouchableOpacity onPress={() => alert('你戳中《保险条款》了！')}><Text style={styles.agreementContact}>《保险条款》</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('你戳中《产品说明书》了！')}><Text style={styles.agreementContact}>《产品说明书》</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('你戳中《投保提示书》了！')}><Text style={styles.agreementContact}>《投保提示书》</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}><Text style={styles.agreementContact}>《信用支付服务合同》</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('你戳中《招财宝平台服务协议》了！')}><Text style={styles.agreementContact}>《招财宝平台服务协议》</Text></TouchableOpacity>
          <Text style={styles.agreementText}>了解本产品的特点和保单利益的不确定性</Text>
        </Checkbox>
      </ScrollView>
    );
  }
}
