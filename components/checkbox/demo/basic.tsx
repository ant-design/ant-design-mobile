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
      checkedT: true,
      checkedF: false,
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F9' }}>
        <List>
          <List.Header>列表项复选框demo</List.Header>
          <List.Body>
            <Checkbox checked={this.state.checkedT} onChange={() => this.setState({checkedT: !this.state.checkedT})}>
              使用Ant Design Component
            </Checkbox>
            <Checkbox checked={this.state.checkedF} onChange={() => this.setState({checkedF: !this.state.checkedF})}>
              不使用Ant Design Component
            </Checkbox>
            <Checkbox last={true} disabled={true}>
              强制选中,不可编辑
            </Checkbox>
          </List.Body>
        </List>
        <List>
          <List.Header>协议复选框demo</List.Header>
          <List.Body>
            <Checkbox type="agree" checked={true}>
              <Text style={styles.agreementText}>
                同意
              </Text>
              <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}>
                <Text style={styles.agreementContact}>《信用支付服务合同》</Text>
              </TouchableOpacity>
            </Checkbox>
            <Checkbox type="agree">
              <Text style={styles.agreementText}>
                未选中,不可编辑
              </Text>
              <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}>
                <Text style={styles.agreementContact}>《信用支付服务合同》</Text>
              </TouchableOpacity>
            </Checkbox>
            <Checkbox type="agree" disabled={true}>
              <Text style={styles.agreementText}>
                强制选中，无法取消
              </Text>
              <TouchableOpacity onPress={() => alert('你戳中《信用支付服务合同》了！')}>
                <Text style={styles.agreementContact}>《信用支付服务合同信用支付服务合同》</Text>
              </TouchableOpacity>
            </Checkbox>
          </List.Body>
        </List>
      </ScrollView>
    );
  }
}
