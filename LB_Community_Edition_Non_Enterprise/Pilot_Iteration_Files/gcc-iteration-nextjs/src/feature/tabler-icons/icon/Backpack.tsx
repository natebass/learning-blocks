import React from 'react'

interface BackpackProps {
  width?: number
  height?: number
  className?: string
}

export const Backpack: React.FC<BackpackProps> = ({
  width = 24,
  height = 24,
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 12V10C20.5 8.93913 20.9214 7.92172 21.6716 7.17157C22.4217 6.42143 23.4391 6 24.5 6C25.5609 6 26.5783 6.42143 27.3284 7.17157C28.0786 7.92172 28.5 8.93913 28.5 10V12M18.5 42V34C18.5 32.9391 18.9214 31.9217 19.6716 31.1716C20.4217 30.4214 21.4391 30 22.5 30H26.5C27.5609 30 28.5783 30.4214 29.3284 31.1716C30.0786 31.9217 30.5 32.9391 30.5 34V42M22.5 20H26.5M10.5 36V24C10.5 20.8174 11.7643 17.7652 14.0147 15.5147C16.2652 13.2643 19.3174 12 22.5 12H26.5C29.6826 12 32.7348 13.2643 34.9853 15.5147C37.2357 17.7652 38.5 20.8174 38.5 24V36C38.5 37.5913 37.8679 39.1174 36.7426 40.2426C35.6174 41.3679 34.0913 42 32.5 42H16.5C14.9087 42 13.3826 41.3679 12.2574 40.2426C11.1321 39.1174 10.5 37.5913 10.5 36Z"
        stroke="#FFFCF5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
