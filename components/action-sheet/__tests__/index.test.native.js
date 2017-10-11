// import React from 'react';
// import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import ActionSheet from '../index';

describe('ActionSheet', () => {
  it('showActionSheetWithOptions correctly', () => {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];

    // 不用 setTimeout , ActionSheet.showActionSheetWithOptions 为 undefined ？
    setTimeout(() => {
      ActionSheet.showActionSheetWithOptions({
        title: '标题',
        message: '我是描述我是描述',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
      },
      (buttonIndex) => {
        console.log(BUTTONS[buttonIndex]);
        // expect(BUTTONS[buttonIndex]).toBe('操作一');
      });
    }, 10);

    // expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
