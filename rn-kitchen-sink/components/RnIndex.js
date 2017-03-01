/* eslint no-console:0 */
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, SearchBar } from 'antd-mobile';
import { UIVIEWS, UICONTROLS, OTHERS, UIBARS } from '../demoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 64 : 54,
  },
});

export default class RnIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      uiViews: UIVIEWS,
      uiControls: UICONTROLS,
      others: OTHERS,
      uiBars: UIBARS,
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search(this.state.searchText);
  }

  onPressRow(rowData) {
    if (rowData.title) {
      Actions[rowData.title]();
    } else {
      console.log('demoList.js 中配置的组件必须要有 title');
    }
  }

  search(text) {
    const regex = new RegExp(String(text), 'i');
    const filter = component => regex.test(component.title);

    this.setState({
      uiViews: UIVIEWS.filter(filter),
      uiControls: UICONTROLS.filter(filter),
      others: OTHERS.filter(filter),
      uiBars: UIBARS.filter(filter),
      searchText: text,
    });
  }

  render() {
    const { uiViews, uiControls, others, uiBars } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar onChange={(text) => { this.search(text); }} />
        <ScrollView>
          {
            [['UI Views', uiViews],
            ['UI Controls', uiControls],
            ['Others', others],
            ['UI Bars', uiBars]].map((item, i) => (
              <List
                key={i}
                renderHeader={() => item[0]}
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >{
                item[1].map(el => (
                  <List.Item
                    thumb={el.icon}
                    onClick={() => {
                      this.onPressRow(el);
                    }}
                    arrow="horizontal"
                    key={el.title}
                  >{`${el.title} ${el.description}`}</List.Item>
                ))
              }</List>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}
