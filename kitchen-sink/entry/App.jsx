import React from 'react';
import { List, Flex } from 'antm';
import Page from '../common/Page';
import Item from '../common/Item';

const hashImgObj = {
  actionsheet: 'IptWdCkrtkAUfjE',
  flex: 'IeXslRXpqPEitpt',
  drawer: 'IptWdCkrtkAUfjE',
  modal: 'HwHLKgaijAirqiu',
  toast: 'IptWdCkrtkAUfjE',
  button: 'sBXNfEnfmpaCtJF',
  badge: 'AraRKTSdXQbKkGv',
  collapse: 'wlNeoTpEKIpTcOW',
  checkbox: 'mDSCerpoWfSuLlJ',
  progress: 'aIomfcRsRHmPyNo',
  radio: 'MHMIvHaTJRwnFeV',
  switch: 'NmMXnPngqRrKHrq',
  stepper: 'aDugjLTLBeQffgX',
  slider: 'MHMIvHaTJRwnFeV',
  tabs: 'oeOvbvMpweuBOvO',
  tag: 'xEKBTGGcFJvyQgn',
  timeline: 'aIomfcRsRHmPyNo',
  'top-notice': 'AraRKTSdXQbKkGv',
  'white-space': 'mioJMWDMAmiurTR',
  'wing-blank': 'WzZoGzTRKzQgMWi',
  'textarea-item': 'aDugjLTLBeQffgX',
  'search-bar': 'UAJROWKghHcBeoL',
  'select-list': 'AnrgQGatyTsOmGS',
  list: 'wlNeoTpEKIpTcOW',
  'list-picker': 'WYAMQVIuqdtAGqK',
  'list-date-picker': 'XjBSEKVWMeIulGv',
  'input-item': 'taqdRzRIOnYvSDk',
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
    return (
      <Page logo="https://os.alipayobjects.com/rmsportal/MEyMcVciuKgRnjL.png" title="AntD Mobile" subtitle="服务于蚂蚁大中台无线业务的react组件库" isIndex={true}>
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
                  if (i % 3 === 0) {
                    flexItems = [];
                    flexs.push(<Flex className="antm-demo-flex" key={`flex-${i}`}>
                      {flexItems};
                    </Flex>);
                  }
                  flexItems.push(<Flex.Item key={i}>
                    <Item
                      logo={`https://os.alipayobjects.com/rmsportal/${img}.png`}
                      title={ii.chinese}
                      subtitle={ii.english}
                      onClick={() => {location.hash = fileName;}}
                    />
                  </Flex.Item>);
                }
                return flexs;
              })()}
            </List.Body>
          </List>);
        })}
      </Page>
    );
  },
});
