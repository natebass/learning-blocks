'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

function playAnimationNotFound(message: string) {
  
}

function printServerStatus() {

}

export default function NotFoundError({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    // console.error(error)
  }, [error])

  return (
    <div className="bg-black h-full w-full text-white font-mono text-lg  flex flex-col justify-center items-center">
      {playAnimationNotFound()}
      <div className="border-dashed hover:border-amber-400 hover:border-4 border-transparent border-4 mx-auto container">
        <div className="px-2 py-1 border-dashed border-amber-400 border-4 mx-auto container">
          {printServerStatus()}
        </div>
      </div>
    </div>
  )
}