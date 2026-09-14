---
name: antd-mobile-release
description: 在 ant-design-mobile 仓库准备发版、核对版本、编译验证并交接手工发布时使用。
---

# Ant Design Mobile 发版准备

适用于 `ant-design/ant-design-mobile` 的 npm 包和 GitHub Release。用户要求“发布准备”时，先确认版本，再完成代码准备；npm 发布及后续发布操作由用户手工执行。

## 先确认版本

1. 只读检查当前分支、工作区、最新 `master`、已有 Git tag、GitHub Release、npm 版本与 dist-tag，以及上次发布以来的变更。已有未提交改动时先查明归属，不覆盖用户工作。
2. 根据变更性质推荐一个明确的目标版本，简述推荐理由，并直接询问用户是否采用该版本；用户也可以指定其他版本。稳定版不能沿用当前的 `-alpha` 版本号；预发布版需明确版本号及 `alpha` 或 `dev` 标签。
3. **得到用户对目标版本的明确确认后**，才修改文件、安装依赖、编译、提交或推送。确认目标版本尚未用于 npm 包、Git tag 或 GitHub Release。

## 确认后执行准备

1. 基于最新 `master`，检查工作区和远端 CI。按锁文件安装依赖，使用与项目兼容的 Node.js、pnpm 版本，不顺手升级依赖或修改包管理配置。
2. 将 `package.json` 改为确认的目标版本。执行 `pnpm build` 和适用的测试、检查，核对 `lib/package.json` 与目标版本一致，并检查预期发布文件；失败时先修复并重新验证，不带着失败结果提交。
3. 只提交本次发版相关文件。版本提交标题必须写明完整目标版本，使用 `chore: release v<version>`，例如 `chore: release v5.43.0`；不得使用 `chore: change version` 等不含版本号的泛化标题。提交后核对标题与 `package.json` 版本一致，再推送至 `origin/master`，核对远端提交与本地一致，并报告远端 CI 状态。不能安全更新或推送时，说明阻塞，不覆盖他人改动。
4. 整理上个稳定版以来的变更，准备简洁的中英文 GitHub Release 日志及相关 PR 链接。在此交接：准备阶段不创建或推送 tag，不运行 `pnpm pub`、`pnpm pub:alpha` 或 `pnpm pub:dev`，也不创建 GitHub Release。向用户报告版本、提交、构建与检查结果，以及仍需用户手工完成的步骤。

## 交给用户的手工发布指令

给出代入**实际版本号和提交号**的命令，并注明使用本次验证兼容的 Node.js、pnpm 版本。用户应在确认版本提交已进入 `origin/master` 且远端 CI 满足发布要求后执行：

```bash
git switch master
git pull --ff-only origin master
git tag v<version> <release-commit>
git push origin v<version>
pnpm build
pnpm pub
gh release create v<version> --title v<version> --notes-file <release-notes-file>
```

`gh release create` 需在 npm 发布成功后执行；也可在 GitHub 页面基于该 tag 手工创建 Release。稳定版的 `pnpm pub` 会先运行仓库的 `package-diff`，再发布 `./lib`；若差异检查提示缺失文件，先核对原因，不直接确认。预发布版先单独运行 `pnpm package-diff`，再改用 `pnpm pub:alpha` 或 `pnpm pub:dev`，并核对对应 dist-tag。发布后检查 npm 版本、dist-tag、远端 tag、Release 和 `Doc Site` 工作流。若发布动作失败，先核对已完成的步骤和远端状态，不盲目重试，以免重复发布。
