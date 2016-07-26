import * as React from 'react';
import { Uploader, WhiteSpace } from 'antm';
import { View } from 'react-native';

export default class UploaderExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      files: [{
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2121',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2122',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2123',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2124',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2125',
      }, {
        url: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
        id: '2126',
      }],
      files2: [],
    };
  }

  render() {
    return (
      <View style={{ marginTop: 20, marginLeft: 20 }}>
        <Uploader
          onChange={(files) => {
            this.setState({
              files,
            });
          }}
          files={this.state.files}
        />
        <WhiteSpace />
        <Uploader
          onChange={(files2) => {
            this.setState({
              files2,
            });
          }}
          files={this.state.files2}
        />
      </View>
    );
  }
}
