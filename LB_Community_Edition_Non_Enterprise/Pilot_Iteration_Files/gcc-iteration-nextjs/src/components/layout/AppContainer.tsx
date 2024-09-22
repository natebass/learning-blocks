import AppNavbar from './appnavbar/AppNavbar'
import AppNavbar02 from './appnavbar/AppNavbar02'
import links from '../../../__tests__/mock/links02.json'

interface AppContainerProps {
  selectedMenu: string
  selectedSubMenu?: string
  setCurrentSubMenu: any
  onClickSubMenu?: any
  children: any
}

/**
 * This container is the content between the navigation bar and the footer. It contains it's own sub navigation bar.
 */
export default function AppContainer({
  children,
  selectedMenu,
  selectedSubMenu,
  setCurrentSubMenu,
  onClickSubMenu,
}: AppContainerProps) {
  return (
    <div>
      <div>
        <AppNavbar selectedMenu={selectedMenu} />
        <AppNavbar02
          selectedSubMenu={selectedSubMenu}
          links={getSubMenuLinks(selectedMenu)}
          onClickSubMenuLink={onClickSubMenu}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}

function getSubMenuLinks(selectedMenu: string) {
  return links.find((link) => link.title === selectedMenu)?.subMenuLinks
}
