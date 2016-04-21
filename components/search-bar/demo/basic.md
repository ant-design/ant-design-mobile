---
order: 0
title: 基本
---



````jsx
import { SearchBar } from 'antm';
let SearchBarExample = React.createClass({
  render() {
    return (
      <div>
        <SearchBar
          value=""
          placeholder="搜索"
          onSubmit={(value) => {console.log(`onSubmit${value}`);}}
          onChange={(value) => {console.log(value);}}
          onClear={() => {console.log('onClear');}}
          onCancel={() => {console.log('onCancel');}}
          onFocus={() => {console.log('onFocus');}}
          onBlur={() => {console.log('onBlur');}}
        />
        <SearchBar
          value="蚂蚁中台"
          placeholder="搜索"
          onSubmit={(value) => {console.log(`onSubmit${value}`);}}
          onChange={(value) => {console.log(value);}}
          onClear={() => {console.log('onClear');}}
          onCancel={() => {console.log('onCancel');}}
        />
        <SearchBar
          value=""
          placeholder="取消按钮总是显示"
          onSubmit={(value) => {console.log(`onSubmit${value}`);}}
          onChange={(value) => {console.log(value);}}
          onClear={() => {console.log('onClear');}}
          onCancel={() => {console.log('onCancel');}}
          showCancelButton
        />
        <SearchBar placeholder="搜索框被禁用" disablSearch />
    </div>
    );
  }
});

ReactDOM.render(<SearchBarExample />, document.getElementById('components-search-bar-demo-basic'));
````
