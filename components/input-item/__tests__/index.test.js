import React from 'react';
import { mount } from 'enzyme';
import InputItem from '../index';

describe('InputItem', () => {
  // No need to render Snapshot again, because of `./demo.test.js`

  it('format bankCard correctly', () => {
    const bankCard = mount((
      <InputItem
        type="bankCard"
      >银行卡</InputItem>
    ));
    bankCard.find('input').simulate('change', { target: { value: '1a23 4-5.6  7w890' } });
    expect(bankCard.state('value')).toBe('1234 5678 90');
  });

  it('format phone correctly', () => {
    const phone = mount((
      <InputItem
        type="phone"
      >手机号码</InputItem>
    ));
    phone.find('input').simulate('change', { target: { value: '1a23 4-5.6  7w890a123123' } });
    expect(phone.state('value')).toBe('123 4567 8901');
  });

  it('format number correctly', () => {
    const number = mount((
      <InputItem
        type="number"
      >数字</InputItem>
    ));
    number.find('input').simulate('change', { target: { value: '1a23 4-5.6  7w890' } });
    expect(number.state('value')).toBe('1234567890');
  });

  it('trigger async onChange correctly', () => {
    const handleClick = jest.fn();
    const bankCard = mount((
      <InputItem
        type="bankCard"
        onChange={handleClick}
      >测试异步onChange</InputItem>
    ));
    bankCard.find('input').simulate('change', { target: { value: '1a23 4-5.6  7w890' } });
    setTimeout(() => expect(handleClick).toBeCalledWith('1234 5678 90'));
  });

  it('trigger sync onChange correctly', () => {
    const handleClick = jest.fn();
    const bankCard = mount((
      <InputItem
        type="bankCard"
        onChange={handleClick}
        value="1234 5678 90"
      >测试同步onChange</InputItem>
    ));
    bankCard.find('input').simulate('change', { target: { value: '1234 5678 90' } });
    expect(handleClick).toBeCalledWith('1234 5678 90');
  });

  it('type=money trigger click', () => {
    const originGetComputedStyle = global.window.getComputedStyle;
    global.window.getComputedStyle = function () {
      return {
        height: '200px',
      };
    };
    jest.useFakeTimers();
    const div = global.document.createElement('div');
    div.style.padddingTop = '1000px';
    div.setAttribute('id', 'test');
    global.document.body.appendChild(div);
    const customKeyboard = mount((
      <InputItem
        type="money"
        autoAdjustHeight
      >数字键盘</InputItem>
    ), { attachTo: div });
    // 模拟位置，单测中getBoundingClientRect返回的值全是0
    document.querySelector('div[role="textbox"]').getBoundingClientRect = function () {
      return {
        top: 1000,
      };
    };
    // 模拟输入框点击，拉起键盘
    customKeyboard.find('div[role="textbox"]').simulate('click', {});
    //  触发点击，让键盘收起
    setTimeout(() => {
      document.dispatchEvent(new Event('click'));
      global.window.getComputedStyle = originGetComputedStyle;
    }, 1000);
    jest.runAllTimers();
  });

  it('type=money autoAdjustHeight=false', () => {
    jest.useFakeTimers();
    const div = global.document.createElement('div');
    div.style.padddingTop = '1000px';
    div.setAttribute('id', 'test');
    global.document.body.appendChild(div);
    const customKeyboard = mount((
      <InputItem
        type="money"
        autoAdjustHeight={false}
      >数字键盘</InputItem>
    ), { attachTo: div });
    // 模拟输入框点击，拉起键盘
    customKeyboard.find('div[role="textbox"]').simulate('click', {});
    jest.runAllTimers();
  });

  it('type=money disabledKeys=["."]', () => {
    jest.useFakeTimers();
    const div = global.document.createElement('div');
    div.style.padddingTop = '1000px';
    div.setAttribute('id', 'test');
    global.document.body.appendChild(div);
    const customKeyboard = mount((
      <InputItem
        type="money"
        autoAdjustHeight={false}
        disabledKeys={['.']}
      >数字键盘</InputItem>
    ), { attachTo: div });
    // 模拟输入框点击，拉起键盘
    customKeyboard.find('div[role="textbox"]').simulate('click', {});
    expect(global.document.querySelectorAll('.am-number-keyboard-wrapper').length).toBe(2);
    expect(global.document.querySelectorAll('.am-number-keyboard-item-disabled').length).toBe(3);
    jest.runAllTimers();
  });
});
