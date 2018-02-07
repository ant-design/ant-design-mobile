declare module 'antd-mobile';

declare module 'antd-mobile-demo-data';

declare module 'rmc-list-view';

declare module 'rc-collapse';

declare module 'rc-checkbox';

declare module 'rmc-feedback';

declare module 'rc-slider';

declare module 'rn-topview';

declare module 'rc-notification';
declare module 'rmc-notification';

declare module 'react-native-camera-roll-picker';

declare module 'array-tree-filter';

declare module 'rc-drawer';

declare module 'rmc-dialog';
declare module 'rmc-nuka-carousel';
declare module 'react-native-menu';
declare module 'rmc-tooltip';
declare module 'rmc-pull-to-refresh';
declare module 'rc-slider/lib/Range';
declare module 'react-native/Libraries/StyleSheet/normalizeColor';
declare module 'react-native/Libraries/StyleSheet/setNormalizedColorAlpha';
declare module 'rc-slider/lib/Slider';
declare module 'rmc-steps';

declare var process: {
  env: {
    NODE_ENV: string;
    DISABLE_ANTD_MOBILE_UPGRADE: string;
  };
};

// @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
// get all from A except B*
// type C = Omit<A,'B1'|'B2'>
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
