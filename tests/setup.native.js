// https://github.com/facebook/jest/issues/2208#issuecomment-264733133
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn(),
}));

// https://github.com/facebook/react-native/pull/12682
jest.mock('UIManager', () => ({
  createView: jest.fn(),
  setChildren: jest.fn(),
  manageChildren: jest.fn(),
  updateView: jest.fn(),
  removeSubviewsFromContainerWithID: jest.fn(),
  replaceExistingNonRootView: jest.fn(),
  removeRootView: jest.fn(),
  focus: jest.fn(),
  blur: jest.fn(),
  findSubviewIn: jest.fn(),
  dispatchViewManagerCommand: jest.fn(),
  measure: jest.fn(),
  measureInWindow: jest.fn(),
  viewIsDescendantOf: jest.fn(),
  measureLayout: jest.fn(),
  measureLayoutRelativeToParent: jest.fn(),
  measureViewsInRect: jest.fn(),
  takeSnapshot: jest.fn(),
  setJSResponder: jest.fn(),
  clearJSResponder: jest.fn(),
  configureNextLayoutAnimation: jest.fn(),
  getContentSizeMultiplier: jest.fn(),
  customBubblingEventTypes: {},
  customDirectEventTypes: {},
  Dimensions: {
    window: {
      fontScale: 2,
      height: 1334,
      scale: 2,
      width: 750,
    },
  },
  ModalFullscreenView: {
    Constants: {},
  },
  ScrollView: {
    Constants: {},
  },
  View: {
    Constants: {},
  },
}));

// https://github.com/facebook/react-native/issues/11969
global.cancelAnimationFrame = jest.fn();
global.requestAnimationFrame = jest.fn();

require('react-native-mocker/mock');
