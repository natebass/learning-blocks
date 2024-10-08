'use client'

import { Button } from '@nextui-org/react'
import { useEffect } from 'react'

/**
 * Error component. Error boundaries must be Client Components
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Error & { digest?: string }} props.error - The error object.
 * @param {Function} props.reset - The reset function.
 * @returns {JSX.Element} The rendered Error component.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}): JSX.Element {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}
