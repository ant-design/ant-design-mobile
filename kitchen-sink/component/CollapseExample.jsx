/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Collapse } from '../../index.js';

const CollapseExample = React.createClass({
  render() {
    return (
      <Page title="列表" subtitle="&lt;List&gt;&lt;List.Item /&gt;&lt;List.Item /&gt;&lt;/List&gt;">
        <Collapse
          title={<div>22222</div>}
          content={['子内容子内容','子内容子内容']}
          open={false}
          onTitleClick={() => {alert(111)}}
          onContentClick={(i) => {alert(i)}}
        />
        <Collapse
          title="标题文字"
          openable={false}
          content={['子内容子内容','子内容子内容']}
        />
        <Collapse
          title="标题文字"
          open={false}
          openable={false}
          content={['子内容子内容','子内容子内容']}
        />
        <Collapse
          title="标题文字"
          content={['子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容子内容']}
        />
      </Page>
    );
  },
});

export default CollapseExample;
