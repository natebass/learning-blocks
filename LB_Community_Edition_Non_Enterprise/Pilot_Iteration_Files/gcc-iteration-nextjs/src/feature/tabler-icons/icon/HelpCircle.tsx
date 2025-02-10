import React from 'react'

interface HelpCircleProps {
  width?: number
  height?: number
  className?: string
}

export const HelpCircle: React.FC<HelpCircleProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={height} height={width} viewBox="0 0 24 24" fill="none"
         stroke="currentColor"
         strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
         className={className + " icon icon-tabler icons-tabler-outline icon-tabler-help-circle"}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
      <path d="M12 16v.01"/>
      <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>
    </svg>
  )
}
