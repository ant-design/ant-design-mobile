import { _BaseIcon as BaseIcon } from '@ant-design/mobile-icons'

const customCache = new Set<string>()

export default (url: string) => {
  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof url === 'string' &&
    url.length &&
    !customCache.has(url)
  ) {
    const script = document.createElement('script')
    script.setAttribute('src', url)
    script.setAttribute('data-namespace', url)
    customCache.add(url)
    document.body.appendChild(script)
  }

  return BaseIcon
}
