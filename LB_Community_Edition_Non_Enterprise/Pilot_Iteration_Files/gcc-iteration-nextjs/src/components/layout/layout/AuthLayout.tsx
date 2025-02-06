import Banner from '@/components/ui/layout/hooks/BannerProvider.tsx'
import AlternateSidebar from '@/components/ui/sidebar/AlternateSidebar.tsx'
import { useAlternateSidebar } from '@/components/ui/sidebar/hooks/AlternateSidebarProvider.tsx'
import CenteredFooter from '@/feature/flowbite-ui/footer/CenteredFooter.tsx'
import AuthNavbar from '@/feature/flowbite-ui/navbar/AuthNavbar.tsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PublicLayoutProps {
  isLoading?: boolean
  children: React.ReactNode

  [key: string]: any
}

function Icon1() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-bell-exclamation"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 17h-11a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1.5" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
      <path d="M19 16v3" />
      <path d="M19 22v.01" />
    </svg>
  )
}

export default function AuthLayout({ children, ...props }: PublicLayoutProps) {
  const className = twMerge('bg-white', props.className)
  const { openAlternateSidebar } = useAlternateSidebar()
  return (
    <div {...props} className={`flex min-h-screen flex-col ${className}`}>
      <AuthNavbar openAlternateSidebar={openAlternateSidebar}></AuthNavbar>
      <Banner>
        <span className="me-3 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
          <Icon1 />
          <span className="sr-only">Light bulb</span>
        </span>
        <span>Log in functionality is not working. Please use demo mode.</span>
      </Banner>
      <AlternateSidebar />
      <div className="flex grow">
        <div className="flex w-full flex-col">
          {children}
          <CenteredFooter />
        </div>
      </div>
    </div>
  )
}
