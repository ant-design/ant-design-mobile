/* tslint:disable:jsx-no-multiline-js */
// tslint:disable:no-empty
import { List } from 'antd-mobile';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';

const Item = List.Item;
const Brief = Item.Brief;

export default class BasicListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'basic'}>
          <Item data-seed="logId">
            标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
          </Item>
          <Item wrap>
            文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
          </Item>
          <Item disabled extra="箭头向右" arrow="horizontal" onClick={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向下" arrow="down" onClick={() => {}}>
            标题文字
          </Item>
          <Item extra="箭头向上" arrow="up" onClick={() => {}}>
            标题文字
          </Item>
          <Item extra="没有箭头" arrow="empty">
            标题文字
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine
          >
            垂直居中对齐
          </Item>
          <Item extra="内容内容" multipleLine>
            垂直居中对齐<Brief>辅助文字内容</Brief>
          </Item>
          <Item
            wrap
            extra="文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行"
            multipleLine
            align="top"
            arrow="horizontal"
          >
            顶部对齐
            <Brief>辅助文字内容辅助文字内容辅助文字内容辅助文字内容</Brief>
            <Brief>辅助文字内容</Brief>
          </Item>
          <Item
            extra={
              <View>
                内容内容
                <Brief style={{ textAlign: 'right' }}>辅助文字内容</Brief>
              </View>
            }
            multipleLine
            align="bottom"
          >
            底部对齐
          </Item>
        </List>
        <List renderHeader={() => '带缩略图'}>
          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            thumb
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal"
          >
            thumb
          </Item>
          <Item
            extra={
              <Image
                source={{
                  uri:
                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="horizontal"
          >
            extra为Image
          </Item>
        </List>
      </ScrollView>
    );
  }
}

export const title = 'List';
export const description = 'List Example';
