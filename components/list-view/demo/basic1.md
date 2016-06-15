---
order: 1
title: IndexedList
destroyComponent: true
---

用于通讯薄等场景


````jsx
import { ListView, List } from 'antm';
const { Item } = List;

const NUM_SECTIONS = 20;
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
    return (<Item>Hello: {rowData}</Item>);
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
      <ListView.IndexedList
        style={{ height: '100%' }}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => <span>footer</span>}
        renderSectionHeader={this.renderSectionHeader}
        renderRow={this.renderRow}
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999 },
        }}
      />
    </div>);
  },
});

ReactDOM.render(<Demo />, mountNode);
````
