---
order: 0
title: list-view
---

react native listView

---

````jsx
import { ListView } from 'antm';

const styles = {
  listView: {
    height: '100%',
    backgroundColor: '#B0C4DE',
  },
  header: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B5998',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
  },
  rowText: {
    color: '#888888',
  },
  thumbText: {
    fontSize: 20,
    color: '#888888',
  },
  buttonContents: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 5,
    backgroundColor: '#EAEAEA',
    borderRadius: 3,
    paddingVertical: 10,
  },
  img: {
    width: 64,
    height: 64,
    marginHorizontal: 10,
    backgroundColor: 'transparent',
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#5890ff',
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
            Oooo, look at this new text!  So awesome it may just be crazy.
            Let me keep typing here so it wraps at least one line.
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
    return (<Thumb text={rowData} />);
  },

  renderSectionHeader(sectionData) {
    return (
      <div style={styles.section}>
        <span style={styles.text}>
          {sectionData}
        </span>
      </div>
    );
  },

  renderHeader() {
    let headerLikeText = this.state.headerPressCount % 2 ?
      <div><span style={styles.text}>1 Like</span></div> :
      null;
    return (
      <div onClick={this._onPressHeader} style={styles.header}>
        {headerLikeText}
        <div>
          <span style={styles.text}>
            Table Header (click me)
          </span>
        </div>
      </div>
    );
  },

  renderFooter() {
    return (
      <div style={styles.header}>
        <span onClick={() => console.log('Footer!')} style={styles.text}>
          Table Footer
        </span>
      </div>
    );
  },

  render() {
    return (<div>
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderHeader={this.renderHeader}
        renderFooter={this.renderFooter}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        initialListSize={10}
        pageSize={4}
        scrollRenderAheadDistance={500}
        renderScrollComponent={() => null}
        stickyHeader
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
