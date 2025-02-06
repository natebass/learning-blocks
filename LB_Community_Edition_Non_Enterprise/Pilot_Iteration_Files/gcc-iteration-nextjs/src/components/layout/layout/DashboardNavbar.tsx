import { useDashboardSidebar } from '@/components/ui/sidebar/hooks/DashboardSidebarProvider'
import Navbar from '@/feature/flowbite-ui/navbar/Navbar.tsx'

export default function DashboardNavbar() {
  const { toggleSidebar } = useDashboardSidebar()
  return <Navbar toggleSidebar={toggleSidebar} />
}
