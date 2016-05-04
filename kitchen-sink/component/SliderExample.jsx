/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { Slider, WhiteSpace, WingBlank } from 'antm';

function noop() {}

let SliderExample = React.createClass({
  render () {
    return (
      <Page title="滑动输入条" subtitle="&lt;Slider defaultValue={26} /&gt;">
        <WhiteSpace mode={40} />
        <Slider defaultValue={26} />
        <WhiteSpace mode={40} />
        <Slider range defaultValue={[20, 50]} />
        <WhiteSpace mode={40} />
        <Slider range defaultValue={[20, 50]} disabled />
      </Page>
    )
  }
});

export default SliderExample;
