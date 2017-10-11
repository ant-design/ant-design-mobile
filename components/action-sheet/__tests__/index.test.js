import React from 'react';
// import { render, mount } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import ActionSheet from '../index';

describe('ActionSheet', () => {
  it('showActionSheetWithOptions correctly', () => {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: '我是描述我是描述',
      maskClosable: true,
    },
    (buttonIndex) => {
      // console.log(BUTTONS[buttonIndex]);
      expect(BUTTONS[buttonIndex]).toBe('操作一');
    });
    expect([document.querySelector('.am-action-sheet')]).toHaveLength(1);
    document.querySelectorAll('.am-action-sheet-button-list-item')[0].click();
  });

  it('showShareActionSheetWithOptions correctly', () => {
    const iconList = [
      { icon: <img src="https://zos.alipayobjects.com/rmsportal/WmEzpOsElbbvgmrexFSH.png" alt="friend" />, title: '发送给朋友' },
      { icon: <img src="https://zos.alipayobjects.com/rmsportal/HssPJKvrjEByyVWJIFwl.png" alt="sina" />, title: '新浪微博' },
      { icon: <img src="https://zos.alipayobjects.com/rmsportal/HCGowLrLFMFglxRAKjWd.png" alt="lift" />, title: '生活圈' },
      { icon: <img src="https://zos.alipayobjects.com/rmsportal/LeZNKxCTkLHDWsjFfqqn.png" alt="wechat" />, title: '微信好友' },
      { icon: <img src="https://zos.alipayobjects.com/rmsportal/YHHFcpGxlvQIqCAvZdbw.png" alt="qq" />, title: 'QQ' },
    ];
    const icons = [[...iconList], [iconList[2], iconList[3], iconList[4]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: icons,
      message: '我是描述我是描述',
    },
    (buttonIndex, rowIndex) => {
      // console.log(buttonIndex, rowIndex, icons[rowIndex][buttonIndex].title);
      expect(buttonIndex).toBe(1);
      expect(rowIndex).toBe(0);
      expect(icons[rowIndex][buttonIndex].title).toBe('新浪微博');
    });
    expect([document.querySelector('.am-action-sheet-share')]).toHaveLength(1);
    document.querySelectorAll('.am-action-sheet-share-list-item')[1].click();
  });
});
