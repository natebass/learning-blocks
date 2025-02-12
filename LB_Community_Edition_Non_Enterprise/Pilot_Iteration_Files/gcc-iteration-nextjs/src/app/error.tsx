'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    // console.error(error)
  }, [error])

  return (
    <div>
      {`${error}`}
      <div className="bg-black text-white font-mono text-lg flex items-center">
  <span
    className="whitespace-nowrap overflow-hidden border-r-2 border-white pr-2 animate-typing"
    style={{
      animation: `typing 3s steps(${`${error}`.length}, end), blink-caret 0.7s step-end infinite`,
    }}
  >
    {`${error}`}
  </span>
      </div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}