---
category: Components
type: Data Display
title: NoticeBar
---

Component to display a system message, event notice and etc. Which is under the navigation bar.

### Rules

- Be used to attract user's attension, the importance level is lower than `Modal` and higher than `Toast`.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| mode    | Type of NoticeBar, options: `closable` `link`   | String |  ''  |
| icon    | Set the icon at the start position  |  ReactNode | `<Icon type={require('./trips.svg')} size="xxs" />`|
| onClick | A callback function, can be executed when you close the notice or click on the operating area   | (): void |   |
| marqueeProps | marquee params | Object | `{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}`  |
| action | text which is used to replace icon | ReactElement | |
