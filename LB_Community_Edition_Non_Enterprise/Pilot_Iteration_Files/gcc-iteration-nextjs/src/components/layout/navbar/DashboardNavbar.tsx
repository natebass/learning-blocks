import { useSidebar } from "@/components/hooks/SidebarProvider";

export default function DashboardNavbar() {
  const {toggleSidebar} = useSidebar()
  return <div onClick={toggleSidebar}/>
}
