---
category: Components
type: Navigation
title: Pagination
---

A long list can be divided into several pages by `Pagination`, and only one page will be loaded at a time.

### Rule

- When it will take a long time to load/render all items.

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
|  mode  | the mode of `Pagination` which can be one of `button`,`number`,`pointer` | string | `button`  |
|  current  | current page index(Note: the index is counted from 0) | number  |    |
|  total  | total number of data | number  |  0  |
|  simple  | whether to hide number | boolean | false  |
|  disabled  | whether is disabled | boolean | false  |
| locale |  anguage package setting, you can override the configuration of the global `LocaleProvider | Object：{prevText, nextText} |  |
|  onChange | a callback function, can be executed when the page number is changing, and it takes the resulting page index its arguments | (index: Number): void |  |
