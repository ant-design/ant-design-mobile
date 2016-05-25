import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import AntmRnListBase from './AntmRnListBase';
import { COMPONENTS, APIS } from '../demoList';

type Props = {
  onSelectExample: Function,
  isInDrawer: bool,
};

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
        title: 'Ant Mobile',
        description: 'List of examples',
      }, -1);
      return (
        <View>
          {homePage}
        </View>
      );
    }
    return renderTextInput(styles.searchTextInput);
  }

  onPressRow(example: any) {

    this.props.onSelectExample({
      title: example.title,
      component: example.demo,
    });
  }
}

const styles = StyleSheet.create({
  searchTextInput: {
    padding: 2,
  },
});

export default AntRnList;
