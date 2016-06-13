import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import AntmRnListBase from './AntmRnListBase';
import { COMPONENTS, APIS } from '../demoList';

class AntRnList extends React.Component {
  props: Props;

  constructor(props) {
    super(props);

    this.onPressRow = this.onPressRow.bind(this);
  }

  render() {
    return (
      <AntmRnListBase
        components={COMPONENTS}
        apis={APIS}
        searchText=""
        renderAdditionalView={this.renderAdditionalView.bind(this)}
        onPressRow={this.onPressRow}
      />
    );
  }

  renderAdditionalView(renderRow, renderTextInput): React.Component {
    if (this.props.isInDrawer) {
      const homePage = renderRow({
        title: 'Ant Mobile1',
        description: 'List of examples',
      }, -1);
      return (
        <View>
          {homePage}
        </View>
      );
    }
    return renderTextInput(styles.searchTextInput, styles.searchRow);
  }

  onPressRow(example: any) {
    const Component = example.default;
    this.props.onSelectExample({
      title: example.title,
      component: React.createClass({
        render() {
          return (
            <ScrollView>
              <Component />
            </ScrollView>
          );
        }
      }),
    });
  }
}

const styles = StyleSheet.create({
  searchRow: {
    paddingTop: 15,
  },
  searchTextInput: {
    padding: 2,
  },
});

export default AntRnList;
