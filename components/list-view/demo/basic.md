---
order: 0
title: list-view
---

react native listView

---

````jsx
import { ListView } from 'antm';
import { View, Text, pagingStyles as styles, TouchableOpacity, Thumb } from 'components/list-view/demoUtil';

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

  renderRow(rowData: string) {
    return (<Thumb text={rowData} />);
  },

  renderSectionHeader(sectionData: string) {
    return (
      <View style={styles.section}>
        <Text style={styles.text}>
          {sectionData}
        </Text>
      </View>
    );
  },

  renderHeader() {
    let headerLikeText = this.state.headerPressCount % 2 ?
      <View><Text style={styles.text}>1 Like</Text></View> :
      null;
    return (
      <TouchableOpacity onPress={this._onPressHeader} style={styles.header}>
        {headerLikeText}
        <View>
          <Text style={styles.text}>
            Table Header (click me)
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  renderFooter() {
    return (
      <View style={styles.header}>
        <Text onPress={() => console.log('Footer!')} style={styles.text}>
          Table Footer
        </Text>
      </View>
    );
  },

  render() {
    return (<div>
      <ListView
        style={styles.listview}
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
