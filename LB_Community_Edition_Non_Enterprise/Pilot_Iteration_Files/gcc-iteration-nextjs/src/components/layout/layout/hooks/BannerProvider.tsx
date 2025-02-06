import { createContext, ReactNode, useContext, useState } from 'react'

type BannerContextType = {
  text: string | null
}
const BannerContext = createContext<BannerContextType | undefined>(undefined)
/**
 * Context provider for managing the state of page navigation.
 * @param children - The child components that will have access to the Banner context.
 */
export const BannerProvider = ({ children }: { children: ReactNode }) => {
  const [text, setText] = useState<string | null>(null)

  return (
    <BannerContext.Provider
      value={{
        text,
      }}
    >
      {children}
    </BannerContext.Provider>
  )
}
/**
 * A custom hook to access the dashboard Banner context.
 * Throws an error if the hook is used outside the `BannerProvider`.
 * Example usage:
 * ```tsx
 * const { isOpen, toggleBanner } = useBanner();
 * ```
 * @throws {Error} If the hook is used outside a `BannerProvider`.
 */
export const useBanner = (primaryLinks: [], secondaryLinks: []) => {
  const context = useContext(BannerContext)
  if (!context)
    throw new Error('useBanner must be used within a BannerProvider')
  return { ...context }
}

const Banner = ({ fixed = false, children }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null // Do not render the banner if it's closed
  }

  return (
    <div
      id="sticky-banner"
      tabIndex={-1}
      className={`${fixed ?? 'fixed start-0 top-0 z-50'} flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700`}
    >
      <div className="mx-auto flex items-center">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          {children}
        </p>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleClose}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon2 />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  )
}

export default Banner

function Icon2() {
  return (
    <svg
      className="h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
      />
    </svg>
  )
}
