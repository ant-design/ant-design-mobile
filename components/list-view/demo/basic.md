---
order: 0
title: list-view
---

react native listView

---

````jsx
import { ListView, List, DatePicker } from 'antm';

const { Item } = List;

const styles = {
  listView: {
    height: '100%',
  },
  buttonContents: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  img: {
    width: 64,
    height: 64,
  },
};

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
    this.setState({
      thumbIndex: this._getThumbIdx(),
      dir: this.state.dir === 'row' ? 'column' : 'row',
    });
  },
  render() {
    return (
      <div
        onClick={this._onPressThumb}
        style={{ ...styles.buttonContents, flexDirection: this.state.dir }}>
        <img style={styles.img} src={THUMB_URLS[this.state.thumbIndex]} />
        <img style={styles.img} src={THUMB_URLS[this.state.thumbIndex]} />
        <img style={styles.img} src={THUMB_URLS[this.state.thumbIndex]} />
        {this.state.dir === 'column' ?
          <span>
            我是 list-item
          </span> :
          <span />
        }
      </div>
    );
  },
});

const NUM_SECTIONS = 100;
const NUM_ROWS_PER_SECTION = 10;

const Demo = React.createClass({
  getInitialState() {
    const getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    const getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };

    const dataSource = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    for (let ii = 0; ii < NUM_SECTIONS; ii++) {
      const sectionName = `Section ${ii}`;
      sectionIDs.push(sectionName);
      dataBlob[sectionName] = sectionName;
      rowIDs[ii] = [];

      for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
        const rowName = `S${ii}, R${jj}`;
        rowIDs[ii].push(rowName);
        dataBlob[rowName] = rowName;
      }
    }
    return {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      headerPressCount: 0,
    };
  },

  renderRow(rowData) {
    if (rowData.indexOf('R0') !== -1) {
      return (
      <DatePicker
        className="am-date-picker"
        mode="date"
        title="选择日期"
        extra="可选,小于结束日期"
        minDate="2014-08-06"
        maxDate="2016-12-3"
       >
         <Item arrow="horizontal">日期</Item>
       </DatePicker>);
    }
    return (<Item><Thumb text={rowData} /></Item>);
  },

  renderSectionHeader(sectionData) {
    return (
      <div style={{ color: 'blue' }}>
        {sectionData}
      </div>
    );
  },

  render() {
    return (<div>
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <span>footer</span>}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        initialListSize={10}
        pageSize={4}
        scrollRenderAheadDistance={500}
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999 },
        }}
      />
    </div>);
  },

  _onPressHeader() {
    // var config = layoutAnimationConfigs[Math.floor(this.state.headerPressCount / 2) % layoutAnimationConfigs.length];
    // LayoutAnimation.configureNext(config);
    this.setState({ headerPressCount: this.state.headerPressCount + 1 });
  },
});

ReactDOM.render(<Demo />, mountNode);
````
