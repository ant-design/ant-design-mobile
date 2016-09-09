import * as React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { List, Button } from 'antd-mobile';

export default class BasicListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List
          title="基本 列表头部"
          footer="列表尾部"
        >
            <List.Item>标题文字,没有设置onClick则点击无反馈</List.Item>
            <List.Item
              error
              onClick={() => alert('点击触发onClick事件')}
            >标题文字</List.Item>
            <List.Item
              extra="内容内容"
              onClick={() => {}}
              arrow="horizontal"
            >标题文字</List.Item>
        </List>
        <List
          title="带缩略图"
        >
          <List.Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
            onClick={() => {}}
          >thumb</List.Item>
          <List.Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            onClick={() => {}}
          >thumb</List.Item>
          <List.Item
            extra={<Image
              source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
              style={{width: 29, height: 29}}
            />}
            arrow="horizontal"
            onClick={() => {}}
          >extra为Image</List.Item>
        </List>

        <List
          title="箭头方向"
        >
          <List.Item
            extra="horizontal,箭头向右"
            arrow="horizontal"
            onClick={() => {}}
          >
            标题文字
          </List.Item>
          <List.Item
            extra="down,箭头向下"
            arrow="down"
            onClick={() => {}}
          >
            标题文字
          </List.Item>
          <List.Item
            extra="up,箭头向上"
            arrow="up"
            onClick={() => {}}
          >
            标题文字
          </List.Item>
          <List.Item
            extra="empty,有箭头坑位"
            arrow="empty"
            onClick={() => {}}
            multipleLine
          >
            标题文字
          </List.Item>
          <List.Item
            extra="没有箭头"
            onClick={() => {}}
          >标题文字</List.Item>
        </List>

        <List
          title="多行列表 Demo"
        >
          <List.Item
            multipleLine
            arrow="horizontal"
            extra={<View>
              内容内容
              <List.Item.Brief>辅助文字内容</List.Item.Brief>
            </View>}
          >
            标题文字
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
          </List.Item>
          <List.Item
            error
            multipleLine
            arrow="horizontal"
          >
            标题文字
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
          </List.Item>
          <List.Item
            multipleLine
            arrow="horizontal"
          >
            标题文字
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
          </List.Item>
          <List.Item
            multipleLine
            arrow="horizontal"
          >
            标题文字
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
            <List.Item.Brief>辅助文字内容</List.Item.Brief>
          </List.Item>
          <List.Item
            multipleLine
            arrow="down"
          >
            运营
            <List.Item.Brief>可进行收款、折扣管理、查看数据等操作。如果文字超长那就省略号</List.Item.Brief>
          </List.Item>
          <List.Item
            multipleLine
            arrow="up"
            extra={<Button size="small" onPress={() => alert(1)}>按钮</Button>}
          >
            区域经理
            <List.Item.Brief>可进行收款、折扣管理、查看数据等操作。</List.Item.Brief>
          </List.Item>
          <List.Item
            multipleLine
            arrow="horizontal"
            align={'top'}
            extra={<View>
              zhifubao@alipay.com
              <List.Item.Brief>001</List.Item.Brief>
            </View>}
          >
            账户名
          </List.Item>
        </List>

        <List
          title="业务例子 Demo"
        >
          <List.Item
            extra="鹿港小镇"
            arrow="horizontal"
          >
            所属门店
          </List.Item>
          <List.Item
            extra="张三"
          >
            员工姓名
          </List.Item>
          <List.Item
            extra="收银员"
          >
            员工角色
          </List.Item>
          <List.Item
            extra="13838383756"
          >
            员工手机
          </List.Item>
          <List.Item
            extra="只可退自己的"
          >
            退款权限
          </List.Item>
          <List.Item
            extra="文本信息"
            arrow="horizontal"
          >
            其他权限
          </List.Item>
          <List.Item
            extra={
              <Image
                source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
                style={{width: 29, height: 29}}
              />
            }
            arrow="horizontal"
          >
            员工二维码
          </List.Item>
          <List.Item
            extra={
              <View>koubei@alipay.com<List.Item.Brief>002</List.Item.Brief></View>
            }
            arrow="horizontal"
            multipleLine
          >
            垂直居中对齐
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}

export const title = 'List';
export const description = 'List Example';
