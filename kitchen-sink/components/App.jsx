import React from 'react';
import { List, Flex } from 'antm';
import Page from './Page';
import Item from './Item';

const hashImgObj = {
  'action-sheet': 'sTvsgvivVKnqQtS',
  alert: 'XdSYKalBelFOMqd',
  badge: 'nSDcLEWgUrOkCJq',
  button: 'lOXYjfSRPpkwudh',
  carousel: 'ifHkrPIiJFcMNzT',
  checkbox: 'IznQRcXpGsRfHXX',
  collapse: 'yIQQHiTULgYehij',
  'date-picker': 'XjBSEKVWMeIulGv',
  drawer: 'IptWdCkrtkAUfjE',
  dropdown: 'PMIYKpJIhmqwyXI',
  flex: 'KZtGFWmnMUFpiSE',
  'float-menu': 'HhilRXHawmUwlML',
  grid: 'QbGTlZewFSvHlSS',
  icon: 'zRqLyIrksLZyGPo',
  'input-item': 'nZNeLMIrNJiuSyr',
  list: 'wlNeoTpEKIpTcOW',
  'list-action': 'OJgqKyrKGdIEfwp',
  'list-view': 'wlNeoTpEKIpTcOW',
  menu: 'NRpaVQhCssmCMvT',
  modal: 'AMszKQQdMvMmYng',
  'nav-bar': 'VrOSRjcBgRlvffN',
  'page-result': 'nQbMEPIMUYIxyfW',
  picker: 'WYAMQVIuqdtAGqK',
  progress: 'aIomfcRsRHmPyNo',
  radio: 'MHMIvHaTJRwnFeV',
  'refresh-control': 'kmDibjGUbFrdeeY',
  'search-bar': 'UAJROWKghHcBeoL',
  slider: 'ViixEhXOewlupTr',
  stepper: 'aDugjLTLBeQffgX',
  steps: 'aDugjLTLBeQffgX',
  switch: 'NmMXnPngqRrKHrq',
  tabs: 'oeOvbvMpweuBOvO',
  tag: 'xEKBTGGcFJvyQgn',
  'textarea-item': 'aDugjLTLBeQffgX',
  timeline: 'aIomfcRsRHmPyNo',
  toast: 'IptWdCkrtkAUfjE',
  'top-notice': 'AraRKTSdXQbKkGv',
  uploader: 'CVHyVxhFqkhZfYs',
  'white-space': 'mioJMWDMAmiurTR',
  'wing-blank': 'WzZoGzTRKzQgMWi',
};

const lists = {};

import reactComponents from '../../_data/react-components';
Object.keys(reactComponents).forEach(i => {
  const iArr = i.split('/');
  if (iArr[0] === 'components') {
    const meta = reactComponents[i].meta;
    if (!lists[meta.category]) {
      lists[meta.category] = [];
    }
    lists[meta.category].push(meta);
  }
});

export default React.createClass({
  render() {
    const customWidth = (document.documentElement.clientWidth / 3);
    const itemStyle = {
      width: `${customWidth}px`,
      height: `${customWidth}px`,
    };
    return (
      <Page logo="https://os.alipayobjects.com/rmsportal/MEyMcVciuKgRnjL.png" title="AntD Mobile" subtitle="移动端UI组件库" isIndex={true}>
        {Object.keys(lists).map((cate, index) => {
          return (<List key={index}>
            <List.Header>{cate}</List.Header>
            <List.Body>
              {(() => {
                const flexs = [];
                let flexItems = [];
                for (let i = 0; i < lists[cate].length; i++) {
                  const ii = lists[cate][i];
                  const fileName = ii.fileName.split('/')[1];
                  const img = hashImgObj[fileName] || 'IptWdCkrtkAUfjE';
                  flexItems.push(<Item
                    logo={`https://os.alipayobjects.com/rmsportal/${img}.png`}
                    title={ii.chinese}
                    subtitle={ii.english}
                    onClick={() => {location.hash = fileName;}}
                    style={itemStyle}
                    key={`flexitem-${i}`}
                  />);
                }
                flexs.push(<Flex wrap="wrap" className="antm-demo-flex" key={`flex-${index}`}>
                  {flexItems}
                </Flex>);
                return flexs;
              })()}
            </List.Body>
          </List>);
        })}
      </Page>
    );
  },
});
