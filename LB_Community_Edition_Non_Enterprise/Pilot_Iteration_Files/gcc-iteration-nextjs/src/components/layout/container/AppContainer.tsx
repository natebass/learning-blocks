import AppNavigationBar from '@/components/layout/navbar/old/AppNavigationBar'
import { ReactNode } from 'react'
import { SubMenu } from "@/utility/models/page";

interface AppContainerProps {
  selectedMenu: string
  selectedSubMenu: SubMenu
  setCurrentSubMenu: ()=>void
  children: ReactNode
}

/**
 * This container is the content between the navigation bar and the footer. It contains its own sub navigation bar.
 */
export default function AppContainer({
  children,
  selectedMenu,
  selectedSubMenu,
}: AppContainerProps) {
  return (
    <div>
      <AppNavigationBar
        selectedMenu={selectedMenu}
        selectedSubMenu={selectedSubMenu}
      />
      <div>{children}</div>
    </div>
  )
}
