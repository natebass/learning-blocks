import React from 'react'

interface ArrowForkProps {
  width?: number
  height?: number
  className?: string
}

export const ArrowFork: React.FC<ArrowForkProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 3H21M21 3V8M21 3L13.464 10.536C12.5269 11.4734 12.0003 12.7445 12 14.07M8 3H3M3 3V8M3 3L10.536 10.536C11.4731 11.4734 11.9997 12.7445 12 14.07M12 14.07V21M12 14.07V15"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
