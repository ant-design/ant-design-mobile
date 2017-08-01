import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Carousel from '../index';

describe('Carousel.web', () => {
  it('renders correctly', () => {
    const children = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'].map((item, i) => (
      <a href="#" key={i}>
        <img src={`https://zos.alipayobjects.com/rmsportal/${item}`} alt="carousel images" />
      </a>
    ));
    const wrapper = render(<Carousel>{children}</Carousel>);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
