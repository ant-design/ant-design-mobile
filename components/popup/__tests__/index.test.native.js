import React from 'react';
// import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
import Popup from '../index';

describe('Popup', () => {
  it('renders correctly', () => {
    Popup.show(<div>Popup Content</div>);
  });
});
