import React from 'react';
import { mount } from 'enzyme';
import PickerView from '../index';

const createMap = label => ({ label, value: label });

describe('PickerView', () => {
  const dataWithoutCascade = [
    ['2018', '2019', '2020'].map(createMap),
    ['Blade_Runner', 'Before_Midnight', 'Shutter_Island'].map(createMap),
  ];

  const oneDimenData = ['2018', '2019', '2020'].map(createMap);

  describe('with one-dimensional data', () => {
    const wrapper = mount(<PickerView data={oneDimenData} cascade={false} />);

    it('should render <PickerView /> component', () => {
      expect(wrapper.exists('.am-picker')).toBe(true);
    });

    it('should contain value match data', () => {
      expect(
        oneDimenData.some(
          ({ value }, ii) =>
            !(
              wrapper
                .find('.am-picker-col-item')
                .at(ii)
                .text() === value
            ),
        ),
      ).toBe(false);
    });

    it('should select default value', () => {
      expect(
        wrapper.find('.am-picker-col-item-selected').text() ===
          oneDimenData[0].value,
      ).toBe(true);
    });
  });

  describe('without cascade effect', () => {
    const wrapper = mount(
      <PickerView data={dataWithoutCascade} cascade={false} />,
    );

    it('should render <PickerView /> component', () => {
      expect(wrapper.exists('.am-picker')).toBe(true);
    });

    it('should contain the same length column to data', () => {
      expect(wrapper.find('.am-picker').children()).toHaveLength(
        dataWithoutCascade.length,
      );
    });

    it('should contain value match data', () => {
      expect(
        dataWithoutCascade.some((col, i) =>
          col.some(
            ({ value }, ii) =>
              !(
                wrapper
                  .find('.am-picker')
                  .childAt(i)
                  .find('.am-picker-col-item')
                  .at(ii)
                  .text() === value
              ),
          ),
        ),
      ).toBe(false);
    });

    it('should select default value', () => {
      expect(
        dataWithoutCascade.some(
          (col, i) =>
            !(
              wrapper
                .find('.am-picker')
                .childAt(i)
                .find('.am-picker-col-item-selected')
                .text() === col[0].value
            ),
        ),
      ).toBe(false);
    });
  });
});
