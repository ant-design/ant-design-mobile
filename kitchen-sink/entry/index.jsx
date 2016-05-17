import { List, Flex } from 'antm';
import '../common/lib';
import Page from '../common/Page';
import Item from '../common/Item';
import FlexExample from '../component/FlexExample';
import ListExample from '../component/ListExample';
import CollapseExample from '../component/CollapseExample';
import ButtonExample from '../component/ButtonExample';
import TabExample from '../component/TabExample';
import PageResultExample from '../component/PageResultExample';
import WhiteSpaceExample from '../component/WhiteSpaceExample';
import WingBlankExample from '../component/WingBlankExample';
import CheckboxExample from '../component/CheckboxExample';
import InputExample from '../component/InputExample';
import DatePickerExample from '../component/DatePickerExample';
import ListPickerExample from '../component/ListPickerExample';
import RadioExample from '../component/RadioExample';
import SearchBarExample from '../component/SearchBarExample';
import SwitchExample from '../component/SwitchExample';
import TextareaExample from '../component/TextareaExample';
import ToastExample from '../component/ToastExample';
import TopNoticeExample from '../component/TopNoticeExample';
import ModalExample from '../component/ModalExample';
import TagExample from '../component/TagExample';
import BadgeExample from '../component/BadgeExample';
import DrawerExample from '../component/DrawerExample';
import ActionSheetExample from '../component/ActionSheetExample';
import SliderExample from '../component/SliderExample';
import SelectListExample from '../component/SelectListExample';
import TimelineExample from '../component/TimelineExample';
import ProgressExample from '../component/ProgressExample';
import StepperExample from '../component/StepperExample';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

if((/iphone|ipad/i).test(navigator.userAgent)) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      // FastClick.attach(document.body);
    }, false);
  }
}

window.scrolltopNumber = 0;

const App = React.createClass({
  render() {
    return (
      <Page logo="https://os.alipayobjects.com/rmsportal/MEyMcVciuKgRnjL.png" title="AntD Mobile" subtitle="服务于蚂蚁大中台无线业务的react组件库" isIndex={true}>
        <List>
          <List.Header>基本</List.Header>
          <List.Body>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/IeXslRXpqPEitpt.png"
                  title="布局"
                  subtitle="Flex"
                  onClick={() => {location.hash = 'flex';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/wlNeoTpEKIpTcOW.png"
                  title="列表"
                  subtitle="List"
                  arrow="horizontal" onClick={() => {location.hash = 'list';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/wlNeoTpEKIpTcOW.png"
                  title="折叠面板"
                  subtitle="Collapse"
                  arrow="horizontal" onClick={() => {location.hash = 'collapse';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/mioJMWDMAmiurTR.png"
                  title="上下留白"
                  subtitle="WhiteSpace"
                  onClick={() => {location.hash = 'whitespace';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/WzZoGzTRKzQgMWi.png"
                  title="两翼留白"
                  subtitle="WingBlank"
                  onClick={() => {location.hash = 'wingblank';}}
                />
              </Flex.Item>
              <Flex.Item/>
            </Flex>
          </List.Body>
        </List>
        <List>
          <List.Header>导航</List.Header>
          <List.Body>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/oeOvbvMpweuBOvO.png"
                  title="选项卡"
                  subtitle="Tabs"
                  onClick={() => {location.hash = 'tab';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png"
                  title="动作菜单"
                  subtitle="ActionSheet"
                  onClick={() => {location.hash = 'actionsheet';}}
                />
              </Flex.Item>
              <Flex.Item />
            </Flex>
          </List.Body>
        </List>
        <List>
          <List.Header>表单相关</List.Header>
          <List.Body>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/sBXNfEnfmpaCtJF.png"
                  title="按钮"
                  subtitle="Button"
                  onClick={() => {location.hash = 'button';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/MHMIvHaTJRwnFeV.png"
                  title="单选框"
                  subtitle="Radio"
                  onClick={() => {location.hash = 'radio';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/mDSCerpoWfSuLlJ.png"
                  title="复选框"
                  subtitle="Checkbox"
                  onClick={() => {location.hash = 'checkbox';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/taqdRzRIOnYvSDk.png"
                  title="文本输入"
                  subtitle="InputItem"
                  onClick={() => {location.hash = 'input';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/XjBSEKVWMeIulGv.png"
                  title="日期选择"
                  subtitle="DatePicker"
                  onClick={() => {location.hash = 'datepicker';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/WYAMQVIuqdtAGqK.png"
                  title="列表选择"
                  subtitle="ListPicker" onClick={() => {location.hash = 'listpicker';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/AnrgQGatyTsOmGS.png"
                  title="列表单选"
                  subtitle="SelectList"
                  onClick={() => {location.hash = 'selectlist';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/HwHLKgaijAirqiu.png"
                  title="Modal"
                  subtitle="Modal"
                  onClick={() => {location.hash = 'modal';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/UAJROWKghHcBeoL.png"
                  title="搜索栏"
                  subtitle="SearchBar"
                  onClick={() => {location.hash = 'searchbar';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/NmMXnPngqRrKHrq.png"
                  title="滑动开关"
                  subtitle="Switch"
                  onClick={() => {location.hash = 'switch';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png"
                  title="多行输入"
                  subtitle="TextareaItem"
                  onClick={() => {location.hash = 'textarea';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/MHMIvHaTJRwnFeV.png"
                  title="滑动输入条"
                  subtitle="Slider"
                  onClick={() => {location.hash = 'slider';}}
                />
              </Flex.Item>
            </Flex>
          </List.Body>
        </List>
        <List>
          <List.Header>展示</List.Header>
          <List.Body>
            <Flex className="antm-demo-flex">

              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/AraRKTSdXQbKkGv.png"
                  title="顶部提示"
                  subtitle="TopNotice"
                  onClick={() => {location.hash = 'topnotice';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/AraRKTSdXQbKkGv.png"
                  title="徽标数"
                  subtitle="Badge"
                  onClick={() => {location.hash = 'badge';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png"
                  title="轻提示"
                  subtitle="Toast"
                  onClick={() => {location.hash = 'toast';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png"
                  title="抽屉"
                  subtitle="Drawer"
                  onClick={() => {location.hash = 'drawer';}} />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/aIomfcRsRHmPyNo.png"
                  title="进度条"
                  subtitle="Progress"
                  onClick={() => {location.hash = 'progress';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/xEKBTGGcFJvyQgn.png"
                  title="标签"
                  subtitle="Tag"
                  onClick={() => {location.hash = 'tag';}}
                />
              </Flex.Item>
            </Flex>
            <Flex className="antm-demo-flex">
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/aIomfcRsRHmPyNo.png"
                  title="时间线"
                  subtitle="Timeline"
                  onClick={() => {location.hash = 'timeline';}}
                />
              </Flex.Item>
              <Flex.Item>
                <Item
                  logo="https://os.alipayobjects.com/rmsportal/aDugjLTLBeQffgX.png"
                  title="步进器"
                  subtitle="Stepper"
                  onClick={() => {location.hash = 'stepper';}}
                />
              </Flex.Item>
              <Flex.Item/>
            </Flex>
          </List.Body>
        </List>
      </Page>
    );
  },
});

const pageRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/flex" component={FlexExample}/>
    <Route path="/list" component={ListExample}/>
    <Route path="/collapse" component={CollapseExample}/>
    <Route path="/button" component={ButtonExample}/>
    <Route path="/tab" component={TabExample}/>
    <Route path="/whitespace" component={WhiteSpaceExample}/>
    <Route path="/wingblank" component={WingBlankExample}/>
    <Route path="/checkbox" component={CheckboxExample}/>
    <Route path="/input" component={InputExample}/>
    <Route path="/datepicker" component={DatePickerExample}/>
    <Route path="/listpicker" component={ListPickerExample}/>
    <Route path="/searchbar" component={SearchBarExample}/>
    <Route path="/switch" component={SwitchExample}/>
    <Route path="/textarea" component={TextareaExample}/>
    <Route path="/pageresult" component={PageResultExample}/>
    <Route path="/toast" component={ToastExample}/>
    <Route path="/topnotice" component={TopNoticeExample}/>
    <Route path="/modal" component={ModalExample}/>
    <Route path="/selectlist" component={SelectListExample} />
    <Route path="/badge" component={BadgeExample}/>
    <Route path="/tag" component={TagExample}/>
    <Route path="/drawer" component={DrawerExample}/>
    <Route path="/actionsheet" component={ActionSheetExample}/>
    <Route path="/slider" component={SliderExample}/>
    <Route path="/radio" component={RadioExample}/>
    <Route path="/timeline" component={TimelineExample}/>
    <Route path="/progress" component={ProgressExample}/>
    <Route path="/stepper" component={StepperExample}/>
  </Router>
);

ReactDOM.render(pageRouter, document.getElementById('react-content'));
