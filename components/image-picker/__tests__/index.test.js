import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Flex from '../../flex';
import ImagePicker from '../index';

describe('ImagePicker', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <ImagePicker />,
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.html()).toEqual('<div class="am-image-picker-list" role="group"><div class="am-flexbox am-flexbox-align-center"><div class="am-flexbox-item"><div class="am-image-picker-item am-image-picker-upload-btn" role="button" aria-label="Choose and add image"><input type="file" accept="image/*"></div></div><div class="am-flexbox-item"></div><div class="am-flexbox-item"></div><div class="am-flexbox-item"></div></div></div>');
  });

  it('renders files correctly', () => {
    const files = [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    }];

    const wrapperCant = mount(
      <ImagePicker
        selectable={false}
        files={files}
      />,
    );
    // can't select
    expect(wrapperCant.find('.am-image-picker-item').length).toBe(2);

    const wrapper = mount(
      <ImagePicker
        files={files}
      />,
    );
    // can select
    expect(wrapper.find('.am-image-picker-item').length).toBe(3);
  });

  it('select file correctly', () => {
    const wrapperCant = mount(
      <ImagePicker
        selectable={false}
      />,
    );
    // can select
    expect(wrapperCant.find('.am-image-picker-upload-btn').length).toBe(0);

    const wrapper = mount(
      <ImagePicker />,
    );
    // can select
    expect(wrapper.find('.am-image-picker-upload-btn').length).toBe(1);
  });

  it('disableDelete', () => {
    const files = [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2123',
    }];
    const wrapperCant = mount(
      <ImagePicker
        files={files}
        disableDelete
      />,
    );
    // have no delect icon
    expect(wrapperCant.find('.am-image-picker-item-remove').length).toBe(0);
  });
  it('renders length', () => {
    const files = [{
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122',
    }, {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2123',
    }];

    const wrapperDefault = shallow(
      <ImagePicker
        files={files}
        selectable={false}
      />,
    );
    expect(wrapperDefault.find(Flex).length).toBe(1);

    const wrapperWithTwo = shallow(
      <ImagePicker
        length="2"
        files={files}
        selectable={false}
      />,
    );
    expect(wrapperWithTwo.find(Flex).length).toBe(2);

    const wrapperWithOne = shallow(
      <ImagePicker
        length="1"
        files={files}
        selectable={false}
      />,
    );
    expect(wrapperWithOne.find(Flex).length).toBe(3);
  });
});
