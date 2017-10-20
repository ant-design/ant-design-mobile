---
order: 5
title: Upgrade Tip Feature
---

## Introduction
This feature will record `antd-mobile‘s` and dependencies `rc/rmc's` versions at **Local :`node_modules/antd-mobile/lib/_util/version.json`** when install `antd-mobile`.

This feature will request lastest versions from server, when **NODE_ENV=development** (**GET method, no more data**). And will show the information of version, tips and so on use console.

This feature use `process.env.NODE_ENV === 'development'` to make judgments, will not enter the production environment (`NODE_ENV != development`).

## How To Close
Edit the file `package.json`, add `"antd-mobile": { "upgrade-tip": false }` (Need delete and reinstall `antd-mobile`).
