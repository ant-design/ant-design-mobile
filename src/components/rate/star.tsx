import React from 'react'
import { FC } from 'react'

export const Star: FC = () => {
  return (
    <svg
      viewBox='0 0 42 40'
      height='1em'
      xmlns='http://www.w3.org/2000/svg'
      style={{ verticalAlign: '-0.125em' }}
    >
      <path
        d='m21 34-10.52 5.53a2 2 0 0 1-2.902-2.108l2.01-11.714-8.511-8.296a2 2 0 0 1 1.108-3.411l11.762-1.71 5.26-10.657a2 2 0 0 1 3.586 0l5.26 10.658L39.815 14a2 2 0 0 1 1.108 3.411l-8.51 8.296 2.009 11.714a2 2 0 0 1-2.902 2.109L21 34Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}
