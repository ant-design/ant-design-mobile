/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { ListView } from 'antd-mobile';

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
let index = data.length - 1;

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs: any = [];
let rowIDs: any = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class BasicDemo extends React.Component<any, any> {
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

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 600);
  }

  onEndReached = (_event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', _event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
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
                <Text><Text style={[{ fontSize: 24, color: '#FF6E27' }]}>35</Text>¥</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>);
    };
    const loadingTxt = this.state.isLoading ? 'Loading...' : 'Loaded';
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <Text style={[{ padding: 8 }]}>header</Text>}
        renderFooter={() => <Text style={[{ padding: 30, textAlign: 'center' }]}> {loadingTxt} </Text>}
        renderSectionHeader={sectionData => (
          <Text style={[{ padding: 10, backgroundColor: 'rgba(255,255,255,0.8)' }]}>
            {`Task ${sectionData.split(' ')[1]}`}
          </Text>
        )}
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
