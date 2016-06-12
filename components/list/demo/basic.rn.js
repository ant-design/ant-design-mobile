import React, { Image, ScrollView } from 'react-native';
import List from '../index.ios';
import Button from '../../button/index.ios';

export default class BasicListExample extends React.Component {
  render() {
    return (
      <ScrollView>
        {/* 基本用法 Demo */}
        <List>
          <List.Header>基本用法 Demo</List.Header>
            <List.Body>
              <List.Item
                onClick={this.onClick}
                needActive={false}
              >标题文字,无Active效果</List.Item>
              <List.Item
                onClick={this.onClick}
              >标题文字默认有Active效果</List.Item>
              <List.Item
                extra="内容内容"
                onClick={this.onClick}
                last
              >标题文字</List.Item>
            </List.Body>
          <List.Footer>列表尾部,List.Footer</List.Footer>
        </List>

        <List>
          <List.Header>icon Demo</List.Header>
           <List.Body>
            <List.Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              arrow="horizontal"
              onClick={window.openurl}
            >icon</List.Item>
            <List.Item
              thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
              onClick={window.clickItem}
            >icon</List.Item>
            <List.Item
              icon=""
              extra={<Image source="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="28" height="28" />}
              arrow="horizontal"
              onClick={window.clickItem}
            >扩展信息传入icon</List.Item>
          </List.Body>
        </List>

        {/* 箭头 Demo */}
        <List>
          <List.Header>箭头 Demo</List.Header>
          <List.Body>
            <List.Item extra="horizontal,剪头向右" arrow="horizontal">标题文字</List.Item>
            <List.Item extra="down,剪头向下" arrow="down">标题文字</List.Item>
            <List.Item extra="up,剪头向上" arrow="up">标题文字</List.Item>
            <List.Item
              extra={<List.Item.Extra><List.Item.Content>zhifubao@alipay.com</List.Item.Content><List.Item.Detail>001</List.Item.Detail></List.Item.Extra>}
              line={2}
              arrow="horizontal"
              last
            ><List.Item.Content>账户名</List.Item.Content></List.Item>
          </List.Body>
        </List>

        {/* 双行列表 Demo */}
        <List>
          <List.Header>双行列表 Demo</List.Header>
              <List.Body>
                <List.Item line={2} thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" arrow="horizontal">
                  <List.Item.Content>收银员</List.Item.Content>
                  <List.Item.Detail>仅可进行收款、退款及查账操作</List.Item.Detail>
                </List.Item>
                <List.Item line={2} thumb="http://img0.bdstatic.com/img/image/daren/ximeng2.jpg" arrow="horizontal"
                  extra={<List.Item.Extra><List.Item.Content>第一行文字</List.Item.Content><List.Item.Detail>Detail</List.Item.Detail></List.Item.Extra>}>
                  <List.Item.Content>Content</List.Item.Content>
                  <List.Item.Detail>Detail</List.Item.Detail>
                </List.Item>
                <List.Item line={2} arrow="down">
                  <List.Item.Content>运营</List.Item.Content>
                  <List.Item.Detail>可进行收款、折扣管理、查看数据等操作。如果文字超长那就省略号</List.Item.Detail>
                </List.Item>
                <List.Item line={2} arrow="up" extra={<Button mode="light" size="sam" onPress={() => alert(1)}>按钮</Button>}>
                  <List.Item.Content>区域经理</List.Item.Content>
                  <List.Item.Detail>可进行收款、折扣管理、查看数据等操作。</List.Item.Detail>
                </List.Item>
                <List.Item line={2} last arrow="horizontal" align={'top'}
                  extra={<List.Item.Extra><List.Item.Content>zhifubao@alipay.com</List.Item.Content><List.Item.Detail>001</List.Item.Detail></List.Item.Extra>}>
                  <List.Item.Content>账户名</List.Item.Content>
                </List.Item>
          </List.Body>
         <List.Footer>文本说明文本说明</List.Footer>
        </List>

        {/* 业务例子 Demo */}
        <List >
          <List.Header>业务例子 Demo</List.Header>
          <List.Body>
            <List.Item
              link="http://www.baidu.com"
              extra="鹿港小镇"
              arrow="horizontal"
            >所属门店</List.Item>
            <List.Item
              extra="张三"
            >员工姓名</List.Item>
            <List.Item
              extra="收银员"
            >员工角色</List.Item>
            <List.Item
              extra="13838383756"
            >员工手机</List.Item>
            <List.Item
              extra="只可退自己的"
            >退款权限</List.Item>
            <List.Item
              content="其他权限"
              arrow="horizontal"
            >文本信息</List.Item>
            <List.Item
              extra={<Image source="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png" width="29" height="29" />}
              arrow="horizontal"
            >员工二维码</List.Item>
            <List.Item
              extra={<List.Item.Extra><List.Item.Content>koubei@alipay.com</List.Item.Content><List.Item.Detail>002</List.Item.Detail></List.Item.Extra>}
              arrow="horizontal"
              last
            >垂直居中对齐</List.Item>
          </List.Body>
        </List>
      </ScrollView>
    );
  }
}

exports.title = 'List';
exports.description = 'List Example';
exports.demo = BasicListExample;
