import * as React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { ListView } from 'antd-mobile';

const styles = StyleSheet.create({
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  img: {
    width: 64,
    height: 64,
  },
});

const victory = 'https://os.alipayobjects.com/rmsportal/kwihkdUVljwUURM.png';
const superlike = 'https://os.alipayobjects.com/rmsportal/pmXtSKUFLsIEJLh.png';
const poke = 'https://os.alipayobjects.com/rmsportal/ZlYzyBcrtLqnbjN.png';
const party = 'https://os.alipayobjects.com/rmsportal/mIrghdvucaPOLhc.png';
const liking = 'https://os.alipayobjects.com/rmsportal/DrcLpisGZWASeoj.png';
const like = 'https://os.alipayobjects.com/rmsportal/jloFMiDVGaHrHIO.png';
const heart = 'https://os.alipayobjects.com/rmsportal/QFjTyLzmuJQIflm.png';
const flowers = 'https://os.alipayobjects.com/rmsportal/rgahTjFqZATwqqL.png';
const fist = 'https://os.alipayobjects.com/rmsportal/KcyBnnVZlfIDgci.png';
const dislike = 'https://os.alipayobjects.com/rmsportal/FmMzrxqOhiogBOX.png';
const call = 'https://os.alipayobjects.com/rmsportal/TKlynYhJACDNwKw.png';
const bandaged = 'https://os.alipayobjects.com/rmsportal/htJwTSIUpppWwSb.png';

const THUMB_URLS = [
  like,
  dislike,
  call,
  fist,
  bandaged,
  flowers,
  heart,
  liking,
  party,
  poke,
  superlike,
  victory,
];

const Thumb = React.createClass({
  getInitialState() {
    return { thumbIndex: this._getThumbIdx(), dir: 'row' };
  },
  _getThumbIdx() {
    return Math.floor(Math.random() * THUMB_URLS.length);
  },
  _onPressThumb() {
    this.props.highlightRow(this.props.sectionID, this.props.rowID);
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  },
  render() {
    return (
      <TouchableHighlight
        onPress={this._onPressThumb}
      >
        <View style={[styles.buttonContents, { flexDirection: this.state.dir }]}>
          <Image style={styles.img} source={{ uri: THUMB_URLS[this.state.thumbIndex] }} />
          <Image style={styles.img} source={{ uri: THUMB_URLS[this.state.thumbIndex] }} />
          <Image style={styles.img} source={{ uri: THUMB_URLS[this.state.thumbIndex] }} />
          {this.state.dir === 'column' ?
            <Text>
              {this.props.highlightRow}
            </Text> :
            null
          }
        </View>
      </TouchableHighlight>
    );
  },
});

const NUM_SECTIONS = 20;
const NUM_ROWS_PER_SECTION = 10;
let pageIndex = 0;

export default  React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

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
  renderRow(rowData, sectionID, rowID, highlightRow = () => {}) {
    return (<Thumb rowData={rowData} sectionID={sectionID} rowID={rowID} highlightRow={highlightRow} />);
  },
  renderSectionHeader(sectionData) {
    return (
      <Text style={[{ color: 'blue' }]}>
        {sectionData}
      </Text>
    );
  },
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderHeader={() => <Text>header</Text>}
        renderFooter={() => <Text>footer</Text>}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        pageSize={4}
        onEndReached={this._onEndReached}
      />
    );
  },

  _onEndReached(event) {
    // load new data
    this._genData(++pageIndex);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(this.dataBlob, this.sectionIDs, this.rowIDs),
    });
  },
});

export const title = 'ListView';
export const description = 'ListView example';
