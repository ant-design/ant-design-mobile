export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);
