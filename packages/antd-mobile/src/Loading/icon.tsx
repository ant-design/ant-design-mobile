import * as React from 'react'

// 不暴露  color api，使用 css 覆盖
const LoadingIcon: React.FC = props => {
  const color = '#1677FF'
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 140 140"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="70"
        cy="70"
        r="30"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        transform="rotate(0 70 70)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1.5s"
          values="-90 70 70; 15 70 70;270 70 70"
          keyTimes="0;0.5;1"
        ></animateTransform>
        <animate
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur="1.5s"
          values="1 200;50 200;1 200"
          keyTimes="0;0.5;1"
        ></animate>
      </circle>
      <circle
        cx="70"
        cy="70"
        r="50"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        transform="rotate(0 70 70)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1.5s"
          values="180 70 70;360 70 70;900 70 70"
          keyTimes="0;0.5;1"
        ></animateTransform>
        <animate
          attributeName="stroke-dasharray"
          repeatCount="indefinite"
          dur="1.5s"
          values="25 500;70 500;25 500"
          keyTimes="0;0.5;1"
        ></animate>
      </circle>
    </svg>
  )
}

export default LoadingIcon
