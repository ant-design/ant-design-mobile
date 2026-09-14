---
name: antd-mobile-release
description: 在 ant-design-mobile 仓库准备或执行 npm 版本发布、GitHub Release 和主文档站点发布时使用。
---

# Ant Design Mobile 发版

适用于 `ant-design/ant-design-mobile` 的 npm 包和 GitHub Release。用户只要求了解流程或准备发版时，完成检查和可审阅的准备工作；只有用户已授权实际发布时，才执行推送、npm 发布和创建 Release。

## 发布前

1. 确认仓库为 `ant-design/ant-design-mobile`，基于最新 `master`，检查工作区、远端 CI、现有 Git tag、GitHub Release 和 npm dist-tag。已有未提交改动时先查明归属，不覆盖用户工作。
2. 确定目标版本，确认它尚未在 npm 和 Git tag 中使用。稳定版不得沿用当前的 `-alpha` 版本号；预发布版应明确选用 `alpha` 或 `dev` 标签。
3. 依照仓库锁文件安装依赖，避免发版时顺手升级依赖。将 `package.json` 改为目标版本并提交，提交信息可用 `chore: change version`。确保版本提交已进入远端 `master`，再在该提交上创建本地 `v<version>` tag。
4. 可先运行构建和测试排查依赖问题；正式发布前必须执行 `pnpm build`，确认构建成功，且 `lib/package.json` 的版本与目标版本、tag 一致。只提交本次发版相关文件。

## 发布 npm 与 GitHub Release

1. 再次核对目标版本、构建产物和 npm 发布目标。稳定版执行 `pnpm pub`：仓库脚本先运行 `package-diff`，再发布 `./lib`。如果差异检查提示缺失文件，先判断是否符合预期，不直接确认通过。用户明确要求预发布版时，使用仓库对应的 `pub:alpha` 或 `pub:dev` 脚本，并核对 dist-tag。
2. npm 发布成功后，将 tag 推送到 GitHub，在该 tag 上创建 GitHub Release。根据上个稳定版以来的变更填写简洁的中英文发布日志和相关 PR 链接。
3. 核对 npm 版本及 dist-tag、远端 tag 和 GitHub Release。发布 Release 会触发仓库的 `Doc Site` 工作流；关注运行状态，出现部署审批时按当前授权和权限处理，确认主文档站点部署成功。

若某一步失败，先记录已经完成的发布动作，再处理失败原因；不要盲目重试 npm 发布或创建重复的 Release。任何版本号、tag 指向或发布包不一致都应在继续前修正。
