import React from 'react'

interface RefreshProps {
  width?: number
  height?: number
  className?: string
}

export const Refresh: React.FC<RefreshProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none"
         stroke="currentColor"
         strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
         className={className}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/>
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>
    </svg>
  )
}