---
name: antd-mobile-release
description: 在 ant-design-mobile 仓库准备 npm 发版，并在用户手工发布后创建 Git tag 和 GitHub Release 时使用。
---

# Ant Design Mobile 发版

适用于 `ant-design/ant-design-mobile` 的 npm 包和 GitHub Release。用户要求“发布准备”时，先确认版本，再完成依赖、构建、检查和版本提交；**用户只手工执行 npm 发布命令**。用户告知发布完成后，由 Agent 验证 npm 包，再打 tag 和创建 GitHub Release。

## 先确认版本

1. 只读检查当前分支、工作区、最新 `master`、已有 Git tag、GitHub Release、npm 版本与 dist-tag，以及上次发布以来的变更。已有未提交改动时先查明归属，不覆盖用户工作。
2. 根据变更性质推荐一个明确的目标版本，简述推荐理由，并直接询问用户是否采用该版本；用户也可以指定其他版本。稳定版不能沿用当前的 `-alpha` 版本号；预发布版需明确版本号及 `alpha` 或 `dev` 标签。
3. **得到用户对目标版本的明确确认后**，才修改文件、安装依赖、编译、提交或推送。确认目标版本尚未用于 npm 包、Git tag 或 GitHub Release。

## 确认后执行准备

1. 基于最新 `master`，检查工作区和远端 CI。按锁文件安装依赖，使用与项目兼容的 Node.js、pnpm 版本，不顺手升级依赖或修改包管理配置。
2. 将 `package.json` 改为确认的目标版本。执行 `pnpm build`、适用的测试与 Lint、`pnpm package-diff` 和 `npm pack --dry-run ./lib`，核对 `lib/package.json` 与目标版本、待发布文件一致；失败时先修复并重新验证，不带着失败结果提交。
3. 只提交本次发版相关文件。版本提交标题必须写明完整目标版本，使用 `chore: release v<version>`，例如 `chore: release v5.43.0`；不得使用 `chore: change version` 等不含版本号的泛化标题。提交后核对标题与 `package.json` 版本一致，再推送至 `origin/master`，核对远端提交与本地一致，并报告远端 CI 状态。不能安全更新或推送时，说明阻塞，不覆盖他人改动。
4. 整理上个稳定版以来的变更，准备简洁的中英文 GitHub Release 日志及相关 PR 链接。确保用户所在工作目录已有正确版本的 `./lib`，且 Node.js、pnpm 和 npm registry 可直接用于发包；准备阶段**不创建或推送 tag，不运行发布命令，也不创建 GitHub Release**。报告版本、提交和检查结果，然后只提示稳定版用户输入 `pnpm pub`。用户明确选择预发布版时，改为对应的 `pnpm pub:alpha` 或 `pnpm pub:dev`。

## 用户手工发布完成后

1. 用户告知发布完成后，从目标 npm registry 核对实际包版本与 dist-tag；稳定版应成为 `latest`。npm 发布成功后可能延迟可见，暂时查不到目标版本或标签仍是旧版本时，先核对发布命令输出和 registry，再每隔 30–60 秒重新查询并向用户报告等待状态，不把短暂的 404 当作发布失败。确认目标版本及标签可见前，不得打 tag 或创建 Release，也不要代替用户重试 npm 发布；若长时间仍不可见，再排查发布结果。
2. 确认远端 `master` 包含版本提交。在该**版本提交**上创建并推送 `v<version>` tag；若 tag 已存在，核对其指向，正确则复用，错误则先处理冲突，不移动已发布的 tag。
3. 用准备好的中英文日志在该 tag 上创建 GitHub Release；若 Release 已存在，则核对并更新标题、正文与 tag，不创建重复 Release。随后核对 npm 包、dist-tag、远端 tag 和 Release，并跟进 Release 触发的 `Doc Site` 工作流至结果明确。

`pnpm pub` 会先运行仓库的 `package-diff`，再发布 `./lib`。若差异检查提示缺失文件，先核对原因，不直接确认。任何发布动作失败时先记录已完成的步骤和远端状态，不盲目重试，以免重复发布。
