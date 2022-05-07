import { ReactElement } from 'react'
import * as ReactDOM from 'react-dom'
import type { Root } from 'react-dom/client'

// 移植自rc-util: https://github.com/react-component/util/blob/master/src/React/render.ts

type CreateRoot = (container: ContainerType) => Root

// Let compiler not to search module usage
const fullClone = {
  ...ReactDOM,
} as typeof ReactDOM & {
  createRoot?: CreateRoot
}

const { version, render: reactRender, unmountComponentAtNode } = fullClone

let createRoot: CreateRoot
try {
  const mainVersion = Number((version || '').split('.')[0])
  if (mainVersion >= 18) {
    createRoot = require('react-dom/client').createRoot
  }
} catch (e) {
  // Do nothing;
}

const MARK = '__antd_mobile_root__'

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root
}

function legacyRender(node: ReactElement, container: ContainerType) {
  reactRender(node, container)
}

function concurrentRender(node: ReactElement, container: ContainerType) {
  const root = container[MARK] || createRoot(container)
  root.render(node)
  container[MARK] = root
}

export function render(node: ReactElement, container: ContainerType) {
  if (createRoot as unknown) {
    concurrentRender(node, container)
    return
  }
  legacyRender(node, container)
}

// ========================== Unmount =========================
function legacyUnmount(container: ContainerType) {
  return unmountComponentAtNode(container)
}

async function concurrentUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount()
    delete container[MARK]
  })
}

export function unmount(container: ContainerType) {
  if (createRoot as unknown) {
    return concurrentUnmount(container)
  }

  return legacyUnmount(container)
}
