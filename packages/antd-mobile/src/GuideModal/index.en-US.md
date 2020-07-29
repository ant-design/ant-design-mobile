---
title: GuideModal
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" compact />

### API

#### GuideModal
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| outStepEleIds | the id list of elements hollow out show in page | string[] | '' |
| fatigue | fatigue setting used by localstorage | number | 1 |
| storageKey | the key of localstorage | string | 'GUIDE_MODAL' |
| customNext | if need custom Next | boolean | false |
| showSkip | if need skip option | boolean | false |
| onChange | callback of each step | (step: number, finished: boolean) => void | - |
| onMaskPress | callback when mask press | (opts: { next(): void; skip(): void }) => void | - |


#### Step

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| nextBtnText | the text of next bottom | string | '' |

only take effect in `customNext: false` mode

#### Next

you can use your custom style in Next area after import `Next` component

### Note

Do not add transform style of parent node which will be show on mask
