/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Collapse } from 'antm';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CollapseExample = React.createClass({
  render() {
    return (
      <Page title="列表" subtitle="&lt;List&gt;&lt;List.Item /&gt;&lt;List.Item /&gt;&lt;/List&gt;">
        <Collapse
          prefixCls="am-collapse"
          defaultActiveKey="0"
        >
          <Collapse.Panel header="hellohellohellohellohellohe">{['this is panel contentthis is panel contentthis is panel contentthis is panel contentthis is panel content', 'this is panel content', 222]}</Collapse.Panel>
          <Collapse.Panel header="title2">this is panel content2 or other</Collapse.Panel>
          <Collapse.Panel header="title2">
            <Collapse
              defaultActiveKey="0"
              prefixCls="am-collapse">
              <Collapse.Panel header="This is panel nest panel">daadada</Collapse.Panel>
            </Collapse>
          </Collapse.Panel>
        </Collapse>

      </Page>
    );
  },
});

export default CollapseExample;
