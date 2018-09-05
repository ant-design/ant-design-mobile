export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const IS_IOS = canUseDOM && /iphone|ipad|ipod/i.test(window.navigator.userAgent);
export const IS_IOS_NOT_DEV_TOOLS = canUseDOM && !!navigator.platform && /iPad|iPhone|iPod/i.test(navigator.platform);
