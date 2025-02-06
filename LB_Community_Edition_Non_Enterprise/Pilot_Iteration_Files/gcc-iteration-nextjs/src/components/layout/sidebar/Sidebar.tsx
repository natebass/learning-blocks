import { useSiteNavigation } from '@/components/ui/layout/hooks/SiteNavigationProvider.tsx'
import { useSidebar } from '@/components/ui/sidebar/hooks/SidebarProvider.tsx'
import CollapsibleSidebar from '@/feature/flowbite-ui/sidebar/CollapsibleSidebar.tsx'

export interface SidebarProps {
  className?: string
}

/**
 * Renders the default dashboard sidebar layout.
 * - Currently styled with Flowbite UI
 * @see DashboardSidebarProvider.tsx
 */
export default function Sidebar({ className }: SidebarProps) {
  const { isOpen, toggleSidebar } = useSidebar()
  const { primaryLinks, secondaryLinks, currentPrimary } = useSiteNavigation()
  return (
    <CollapsibleSidebar
      primaryLinks={primaryLinks}
      secondaryLinks={secondaryLinks}
      isOpen={isOpen}
      toggleSidebar={toggleSidebar}
      currentPrimary={currentPrimary}
      className={`${className}`}
    />
  )
}
