import {
  FastAverageColor,
  FastAverageColorResource,
  FastAverageColorOptions,
} from 'fast-average-color'
import { useState } from 'react'

export const useAverageColor = (
  algorithm: FastAverageColorOptions['algorithm']
): [string | undefined, (target: FastAverageColorResource) => void] => {
  const [color, setColor] = useState<string | undefined>(undefined)
  const fac = new FastAverageColor()
  const getAverageColor = (
    resource: FastAverageColorResource,
    algorithm: FastAverageColorOptions['algorithm'],
    opacity: string
  ) => {
    const facc = fac.getColor(resource, {
      algorithm,
      ignoredColor: [
        [255, 255, 255],
        [0, 0, 0],
      ],
    })
    const colors = facc.rgb.split('(')[1].split(')')[0].split(',')
    colors.push(opacity)
    return `rgba(${colors.join(',')})`
  }

  return [
    color,
    (target: FastAverageColorResource) => {
      const facc = getAverageColor(target, algorithm, '0.75')
      setColor(facc)
    },
  ]
}
