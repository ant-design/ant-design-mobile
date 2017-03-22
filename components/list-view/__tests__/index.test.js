import React from 'react';
import 'react-native-mock/mock';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import { Text } from 'react-native';
import ListView from '../index';

describe('ListView', () => {
  it('renders correctly', () => {
    class Minimal extends React.Component {
      constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }
      render() {
        return (
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => <Text>{rowData}</Text>}
          />
        );
      }
    }
    const wrapper = renderer.create(<Minimal />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
