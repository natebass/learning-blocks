import React from 'react'

interface MessageCircleProps {
  width?: number
  height?: number
  className?: string
}

export const MessageCircle: React.FC<MessageCircleProps> = ({
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
        d="M3 20L4.3 16.1C1.976 12.663 2.874 8.22797 6.4 5.72597C9.926 3.22497 14.99 3.42997 18.245 6.20597C21.5 8.98297 21.94 13.472 19.274 16.707C16.608 19.942 11.659 20.922 7.7 19L3 20Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
