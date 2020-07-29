---
title: Collapse
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

### Collapse

Properties | Descrition | Type | Default
-----------|------------|------|--------
| activeKey | current active Panel key | Array or String   | The first panel key on accordion mode|
| defaultActiveKey | default active key | String   | null |
| onChange    | called when collapse Panel is changed | (key: string): void |  noop  |
| accordion | accordion mode | Boolean | false  |
| openAnimation  |  set the custom switch animation, disable the animation can be set to `{}` | Object | ref `rc-collapse/lib/openAnimationFactory.js` |

### Collapse.Panel

Properties | Descrition | Type | Default
-----------|------------|------|--------
| key  | corresponding activeKey   | String   | -   |
| header | header content of Panel | React.Element or String | -   |

Note: Currently does not support nested use for RN.
