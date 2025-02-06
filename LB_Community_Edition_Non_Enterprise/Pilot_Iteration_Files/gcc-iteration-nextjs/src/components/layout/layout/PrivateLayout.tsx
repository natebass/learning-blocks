import { useSidebar } from '@/components/ui/sidebar/hooks/SidebarProvider.tsx'
import Sidebar from '@/components/ui/sidebar/Sidebar.tsx'
import PrivateFooter from '@/feature/flowbite-ui/footer/PrivateFooter.tsx'
import SearchNavbar from '@/feature/flowbite-ui/navbar/SearchNavbar.tsx'
import IndicatorSpinner from '@/feature/flowbite-ui/status/IndicatorSpinner.tsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface PrivateLayoutProps {
  isLoading?: boolean
  children: React.ReactNode
  navigationKey?: string

  [key: string]: any
}

/**
 * PrivateLayout component for authenticated user pages.
 * @param children
 * @param navigationKey
 * @param {Object} props - Component props
 * @param {boolean} [props.isLoading=false] - Indicates if content is loading
 */
export default function PrivateLayout({
  isLoading = false,
  children,
  navigationKey,
  ...props
}: PrivateLayoutProps) {
  const className = twMerge('bg-white', props.className)
  const { toggleSidebar } = useSidebar()

  return (
    <div {...props} className={`flex min-h-screen flex-col ${className}`}>
      <SearchNavbar toggleSidebar={toggleSidebar} />
      <div className="flex grow">
        <Sidebar />
        <div className="flex w-full flex-col">
          {isLoading ? <IndicatorSpinner /> : children}
          <PrivateFooter />
        </div>
      </div>
    </div>
  )
}
