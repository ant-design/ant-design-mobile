import * as React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { ListView, Toast } from 'antd-mobile';

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

export default  React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.dataBlob = {};
    this.sectionIDs = [];
    this.rowIDs = [];
    this._genData = (pIndex = 0) => {
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
    this._genData();
    return {
      dataSource: dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
      headerPressCount: 0,
    };
  },
  onEndReached(event) {
    // load new data
    Toast.info('加载新数据');
    this.setState({ isLoading: true });
    setTimeout(() => {
      this._genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
        isLoading: false,
      });
    }, 1000);
  },
  render() {
    const separator = (sectionID, rowID) => (
      <View key={`${sectionID}-${rowID}`} style={{
        backgroundColor: '#F5F5F9',
        height: 8,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#ECECED',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECED',
      }}></View>
    );
    const row = (rowData, sectionID, rowID, highlightRow = (sId, rId) => {}) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (<View key={rowID}>
        <TouchableHighlight underlayColor={'rgba(100,100,100,0.2)'}
          style={[{
            padding: 8,
            backgroundColor: 'white',
          }]}
          onPress={() => {
            highlightRow(sectionID, rowID);
          }}
        >
          <View>
            <View style={[{
              marginBottom: 8,
              borderStyle: 'solid',
              borderBottomWidth: 1,
              borderBottomColor: '#F6F6F6',
            }]}>
              <Text style={{
                fontSize: 18,
                fontWeight: '500',
                padding: 2,
              }}>{obj.title}</Text>
            </View>
            <View style={[{
              flexDirection: 'row',
            }]}>
              <Image style={[{ height: 64, width: 64, marginRight: 8 }]} source={{ uri: obj.img }} />
              <View>
                <Text>{obj.des}</Text>
                <Text>{this.props.highlightRow}</Text>
                <Text><Text style={[{ fontSize: 24, color: '#FF6E27' }]}>35</Text>元/任务</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>);
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <Text>header</Text>}
        renderFooter={() => <Text>footer</Text>}
        renderSectionHeader={(sectionData) => <Text style={[{ padding: 8, color: 'blue' }]}>
            {`任务 ${sectionData.split(' ')[1]}`}
          </Text>}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        onEndReached={this.onEndReached}
      />
    );
  },
});

export const title = 'ListView';
export const description = 'ListView example';
