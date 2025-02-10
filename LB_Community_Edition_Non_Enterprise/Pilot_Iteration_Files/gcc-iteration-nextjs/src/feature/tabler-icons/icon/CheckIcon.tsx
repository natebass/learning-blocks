import React from 'react'

interface SVGProps extends React.SVGProps<SVGSVGElement> {
}

const CheckIcon: React.FC<SVGProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-check"
      {...props} // Spread remaining props for flexibility (e.g., className, style)
    >
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default CheckIcon
