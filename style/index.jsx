const pixelRatio = Math.floor(window.devicePixelRatio || 1);
if(pixelRatio >= 2) {
  document.querySelector('html').classList.add('pixel-ratio-' + pixelRatio);
}
import 'normalize.css/normalize.css';
import './index.less';
// import './reset.less';
// import './smooth.less';
import './writing.less';
