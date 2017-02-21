/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '相约酒店',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '麦当劳邀您过周末',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '食惠周',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

export default class BasicDemo extends React.Component<any, any> {
  private dataBlob;
  private sectionIDs;
  private rowIDs;
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, _sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this._genData();
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
      headerPressCount: 0,
    };
  }
  _genData = (pIndex = 0) => {
    for (let i = 0; i < NUM_SECTIONS; i++) {
      let ii = pIndex * NUM_SECTIONS + i;
      const sectionName = `Section ${ii}`;
      this.sectionIDs.push(sectionName);
      this.dataBlob[sectionName] = sectionName;
      this.rowIDs[ii] = [];

      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        this.rowIDs[ii].push(rowName);
        this.dataBlob[rowName] = rowName;
      }
    }
    // new object ref
    this.sectionIDs = [].concat(this.sectionIDs);
    this.rowIDs = [].concat(this.rowIDs);
  };
  onEndReached = (_event) => {
    // load new data
    this.setState({ isLoading: true });
    setTimeout(() => {
      this._genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        isLoading: false,
      });
    }, 1000);
  }
  renderSectionHeader = (sectionData) => {
    return (
      <Text style={[{ padding: 10, backgroundColor: 'rgba(255,255,255,0.8)' }]}>
        {`任务 ${sectionData.split(' ')[1]}`}
      </Text>
    );
  }
  render() {
    const separator = (sectionID, rowID) => (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderStyle: 'solid',
          borderTopWidth: 1,
          borderTopColor: '#ECECED',
          borderBottomWidth: 1,
          borderBottomColor: '#ECECED',
        }}
      />
    );
    const row = (_rowData, sectionID, rowID, highlightRow = (_sId, _rId) => {}) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (<View key={rowID}>
        <TouchableHighlight
          underlayColor={'rgba(100,100,100,0.2)'}
          style={[{ padding: 8, backgroundColor: 'white' }]}
          onPress={() => { highlightRow(sectionID, rowID); }}
        >
          <View>
            <View
              style={[{ marginBottom: 8, borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: '#F6F6F6' }]}
            >
              <Text style={{ fontSize: 18, fontWeight: '500', padding: 2 }}>{obj.title}</Text>
            </View>
            <View style={[{ flexDirection: 'row' }]}>
              <Image style={[{ height: 64, width: 64, marginRight: 8 }]} source={{ uri: obj.img }} />
              <View>
                <Text>{obj.des} - {rowID}</Text>
                <Text>{this.props.highlightRow}</Text>
                <Text><Text style={[{ fontSize: 24, color: '#FF6E27' }]}>35</Text>元/任务</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>);
    };
    const loadingTxt = this.state.isLoading ? '加载中...' : '加载完毕';
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <Text style={[{ padding: 8 }]}>列表头</Text>}
        renderFooter={() => <Text style={[{ padding: 30, textAlign: 'center' }]}> {loadingTxt} </Text>}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export const title = 'ListView';
export const description = 'ListView example';
