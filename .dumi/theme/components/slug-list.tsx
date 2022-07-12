import React, { FC } from 'react'
import { AnchorLink } from 'dumi/theme'
import './slug-list.less'

type Slug = {
  depth: number
  value: string
  heading: string
}

interface Props {
  slugs: Slug[] | undefined
}

export const SlugList: FC<Props> = props => {
  const { slugs } = props
  if (!slugs) return null
  return (
    <div className='adm-doc-toc'>
      <ul role='slug-list'>
        {slugs
          .filter(({ depth }, index) => depth > 1 && depth < 4)
          .map(slug => (
            <li key={slug.heading} title={slug.value} data-depth={slug.depth}>
              <AnchorLink to={`#${slug.heading}`}>
                <span>{slug.value}</span>
              </AnchorLink>
            </li>
          ))}
      </ul>
    </div>
  )
}
