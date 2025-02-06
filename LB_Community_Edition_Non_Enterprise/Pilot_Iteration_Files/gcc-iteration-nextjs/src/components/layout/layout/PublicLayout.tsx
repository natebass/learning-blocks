import AlternateSidebar from '@/components/ui/sidebar/AlternateSidebar.tsx'
import { useAlternateSidebar } from '@/components/ui/sidebar/hooks/AlternateSidebarProvider.tsx'
import PublicFooter from '@/feature/flowbite-ui/footer/PublicFooter.tsx'
import PublicNavbarOld from '@/feature/flowbite-ui/navbar/old/PublicNavbarOld.tsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface PublicLayoutProps {
  isLoading?: boolean
  children: React.ReactNode

  [key: string]: any
}

/**
 * PublicLayout component for rendering the layout of public pages.
 * PublicNavbar component renders the navigation bar for the public-facing part of the application.
 *
 * This component provides the following functionalities:
 * - Displays the logo as a link to the home page.
 * - Includes icons for accessibility, language selection, and help.
 * - Triggers alternate sidebars for accessibility and language using the `useSidebarAlternate` hook.
 *
 * @hook useSidebarAlternate - This hook provides the `open` function,
 * which is used to open the respective alternate sidebars.
 * It is triggered by clicking either the Accessibility or Language button.
 *
 * @see {@link siteConfig} - The site configuration object, `siteConfig`, is used
 * to access the configuration for alternate sidebars (e.g., `siteConfig.sidebarAlt.accessibility`
 * and `siteConfig.sidebarAlt.language`), enabling proper functionality for the buttons.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 */
export default function PublicLayout({
  children,
  ...props
}: PublicLayoutProps) {
  const { openAlternateSidebar } = useAlternateSidebar()
  const className = twMerge('bg-white', props.className)
  return (
    <div {...props} className={`flex min-h-screen flex-col ${className}`}>
      <PublicNavbarOld openAlternateSidebar={openAlternateSidebar} />
      <AlternateSidebar />
      <div className="flex grow">
        <div className="flex w-full flex-col">
          {children}
          <PublicFooter className="mx-auto max-w-screen-xl" />
        </div>
      </div>
    </div>
  )
}
