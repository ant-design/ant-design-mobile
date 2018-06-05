---
category: Components
type: Navigation
title: Pagination
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

### Rule

- When it will take a long time to load/render all items.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  mode  | the mode of `Pagination` which can be one of `button`,`number`,`pointer` | string | `button`  |
|  current  | current page index | number  |  1 |
|  total  | total number of data | number  |  0  |
|  simple  | whether to hide number | boolean | false  |
|  disabled  | whether is disabled | boolean | false  |
| locale |  [i18n](/components/locale-provider/) setting, you can override the configuration of the global `LocaleProvider | Object：{prevText, nextText} |  |
|  onChange | invoked with the new index when the value changes. | (index: Number): void |  |

