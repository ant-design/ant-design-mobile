const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')
const { template, chain } = require('lodash')

const iconPath = path.resolve(__dirname, `../packages/antd-mobile-icons`)

async function resolveFiles(cwd) {
  const files = await globby(['*.svg'], {
    cwd: cwd,
  })

  const readTasks = files.map(async filename => {
    const abFilepath = path.join(cwd, filename)
    const content = await fs.readFile(abFilepath, 'utf-8')
    return {
      filename,
      content,
    }
  })

  return Promise.all(readTasks)
}

async function main() {
  const iconTpl = await fs.readFile(
    path.resolve(iconPath, 'templates/icon.tpl'),
    'utf-8',
  )
  const files = await resolveFiles(path.resolve(iconPath, 'icons/out'))
  const icons = []

  files.forEach(({ filename, content }) => {
    const iconName = filename.replace(/\.svg$/, '')

    // 1. 生成组件文件
    fs.outputFile(
      path.resolve(iconPath, `src/icons/${iconName}.ts`),
      template(iconTpl)({
        type: iconName,
        componentName: iconName,
        content,
      }),
    )

    icons.push(iconName)
  })

  // 2. 生成组件的入口集合
  const indexTpl = await fs.readFile(
    path.resolve(iconPath, 'templates/index.tpl'),
    'utf-8',
  )
  fs.outputFile(
    path.resolve(iconPath, 'src/icons/index.ts'),
    template(indexTpl)({
      icons: icons.map(iconName => ({
        type: iconName,
        componentName: iconName,
      })),
    }),
  )
}

main()
