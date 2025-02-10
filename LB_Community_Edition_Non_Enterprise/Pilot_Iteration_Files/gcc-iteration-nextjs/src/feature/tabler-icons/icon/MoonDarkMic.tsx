import React from 'react'

interface MoonDarkMicProps {
  width?: number
  height?: number
  className?: string
}

export const MoonDarkMic: React.FC<MoonDarkMicProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="32" fill="#1E2223"/>
      <path
        d="M22.6667 29.3334C22.6667 31.8088 23.6501 34.1827 25.4004 35.9331C27.1508 37.6834 29.5247 38.6667 32.0001 38.6667M32.0001 38.6667C34.4754 38.6667 36.8494 37.6834 38.5997 35.9331C40.3501 34.1827 41.3334 31.8088 41.3334 29.3334M32.0001 38.6667V44.0001M26.6667 44.0001H37.3334M28.0001 22.6667C28.0001 21.6059 28.4215 20.5885 29.1717 19.8383C29.9218 19.0882 30.9392 18.6667 32.0001 18.6667C33.0609 18.6667 34.0784 19.0882 34.8285 19.8383C35.5787 20.5885 36.0001 21.6059 36.0001 22.6667V29.3334C36.0001 30.3943 35.5787 31.4117 34.8285 32.1618C34.0784 32.912 33.0609 33.3334 32.0001 33.3334C30.9392 33.3334 29.9218 32.912 29.1717 32.1618C28.4215 31.4117 28.0001 30.3943 28.0001 29.3334V22.6667Z"
        stroke="white"
        stroke-width="2.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
