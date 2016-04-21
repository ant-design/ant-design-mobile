/* eslint no-console:0 */

import React from 'react';
import Page from '../common/Page';
import { SearchBar, WhiteSpace } from 'antm';

let SearchBarExample = React.createClass({
  render() {
    return (
      <Page title="SearchBar" subtitle="&lt;SearchBar placeholder='搜索' /&gt;">
        <SearchBar
          value=""
          placeholder="搜索"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
          onFocus={(value) => {console.log('onFocus');}}
          onBlur={(value) => {console.log('onBlur');}}
        />
        <WhiteSpace/>
        <SearchBar
          value="蚂蚁中台"
          placeholder="搜索"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
        />
        <WhiteSpace/>
        <SearchBar
          value=""
          placeholder="取消按钮总是显示"
          onSubmit={(value) => {console.log('onSubmit' + value);}}
          onChange={(value) => {console.log(value);}}
          onClear={(value) => {console.log('onClear');}}
          onCancel={(value) => {console.log('onCancel');}}
          showCancelButton={true}
        />
        <WhiteSpace/>
        <SearchBar placeholder="搜索框被禁用" disablSearch={true}/>
      </Page>
    );
  },
});

export default SearchBarExample;
