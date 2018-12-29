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
});
