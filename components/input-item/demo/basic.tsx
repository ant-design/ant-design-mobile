import * as React from 'react';
import { View, Image } from 'react-native';
import { InputItem, List } from 'antm';

export default class BasicInputItemExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value1: '默认带value',
    };
  }

  onChange = (e) => {

  }

  onFocus = () => {
  }

  onBlur = () => {
  }

  handleError = () => {
  }

  render() {
    return (
      <List style={{ padding: 10 }}>
        <List.Body>
          <InputItem
            name="input1"
            placeholder="内容"
            clear
            maxLength={10}
            onBlur={function (e) { }}
            onFocus={function (e) { }}
          >基本</InputItem>
          <InputItem
            name="标签可以是node"
            placeholder="标签可以是node"
          >
            <View
              style={{ backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/zumwvwrngNMGSWe.png)',
               backgroundSize: 'cover', height: 22, width: 22 }}/>
          </InputItem>
          <InputItem
            value="仅供展示:editable={false}"
            editable={false}
          >不可编辑</InputItem>
          <InputItem
            name="input3"
            value="无标签"
            clear
            placeholder="内容"
          />
          <InputItem
            name="input4"
            clear
            placeholder="extra"
            extra="元"
          >带注释</InputItem>
          <InputItem
            name="input5"
            name="camera"
            placeholder="注释可以是node"
            clear
            extra={<Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
             style={{ width: 22, height:22 }} />}
          >带注释</InputItem>
          <InputItem
            name="input6"
            value="输入框"
            clear
            placeholder="clear"
          >带清除</InputItem>
          <InputItem
            name="input7"
            value="校验出错"
            error
            errorMsg="校验出错"
            clear
            placeholder="内容"
          >报错样式</InputItem>
          <InputItem
            name="input8"
            value=""
            error
            onErrorClick={() => {alert(111);}}
            placeholder="内容"
            clear
            extra={<Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
             style={{ width: 22, height:22 }} />}
          >报错样式</InputItem>
        </List.Body>
      </List>
    );
  }
}
