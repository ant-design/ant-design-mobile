---
order: 3
title:
  zh-CN: '索引列表（标题吸顶）'
  en-US: 'index List (title sticky)'
---

sticky index List


````jsx
import { province as provinceData } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List, SearchBar } from 'antd-mobile';

const { Item } = List;

function genData(ds, province) {
  const dataBlob = {};
  const sectionIDs = [];
  const rowIDs = [];
  Object.keys(province).forEach((item, index) => {
    sectionIDs.push(item);
    dataBlob[item] = item;
    rowIDs[index] = [];

    province[item].forEach((jj) => {
      rowIDs[index].push(jj.value);
      dataBlob[jj.value] = jj.label;
    });
  });
  return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      inputValue: '',
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {
    // simulate initial Ajax
    setTimeout(() => {
      this.setState({
        dataSource: genData(this.state.dataSource, provinceData),
        isLoading: false,
      });
    }, 600);
  }

  onSearch = (val) => {
    const pd = { ...provinceData };
    Object.keys(pd).forEach((item) => {
      pd[item] = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
    });
    this.setState({
      inputValue: val,
      dataSource: genData(this.state.dataSource, pd),
    });
  }

  render() {
    return (<div style={{ paddingTop: '44px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <SearchBar
          value={this.state.inputValue}
          placeholder="Search"
          onChange={this.onSearch}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        className="am-list sticky-list"
        useBodyScroll
        renderSectionWrapper={sectionID => (
          <StickyContainer
            key={`s_${sectionID}_c`}
            className="sticky-container"
            style={{ zIndex: 4 }}
          />
        )}
        renderSectionHeader={sectionData => (
          <Sticky
            className="sticky"
            style={{
              zIndex: 3,
              backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',
              color: 'white',
            }}
          >{sectionData}</Sticky>
        )}
        renderHeader={() => <span>custom header</span>}
        renderFooter={() => <span>custom footer</span>}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        quickSearchBarStyle={{
          top: 85,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````
````css
.sticky-list .sticky-container .am-list-item { padding-left: 0; }
.sticky-list .sticky-container .am-list-line { padding-right: 0; }
.sticky-list .sticky-container .am-list-line .am-list-content { padding-top: 0; padding-bottom: 0; }
.sticky-list .sticky-container .sticky { padding: 7px 15px; transform: none; }
````
