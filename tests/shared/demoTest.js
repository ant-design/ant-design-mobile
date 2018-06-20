import glob from 'glob';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import MockDate from 'mockdate';

export default function webDemoTest(component, options = {}) {
  const files = glob.sync(`./components/${component}/demo/*.md`);

  files.forEach((file) => {
    let testMethod = options.skip === true ? test.skip : test;
    if (Array.isArray(options.skip) && options.skip.some(c => file.includes(c))) {
      testMethod = test.skip;
    }
    testMethod(`renders ${file} correctly`, () => {
      // https://github.com/boblauer/MockDate#api
      MockDate.set('11/22/2016', -60); // Set an arbitrary time zone
      const demo = require(`../.${file}`).default; // eslint-disable-line global-require, import/no-dynamic-require
      const wrapper = render(demo);
      expect(renderToJson(wrapper)).toMatchSnapshot();
      MockDate.reset();
    });
  });
}
