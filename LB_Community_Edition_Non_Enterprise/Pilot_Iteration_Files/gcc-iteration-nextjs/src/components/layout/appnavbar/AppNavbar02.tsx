'use-client'

import Image from 'next/image'
import { Input, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { capitalize } from 'lodash'

import styles from './AppNavbar02.module.css'

interface AppNavigationBarProps {
  selectedSubMenu?: string
  onClickSubMenuLink?: any
  links?: [string]
}

/**
 * App navigation bar. Old props: onClickSubMenuLink, selectedSubMenu
 */
export default function AppNavbar02({
  selectedSubMenu,
  links,
  onClickSubMenuLink,
}: AppNavigationBarProps) {
  return (
    <div className={`${styles.toolbarContainer}`}>
      <Navbar className={``}>
        <NavbarContent justify="start" className="gap-0 navbar-list">
          {links?.map((link) => {
            return (
              <NavbarItem
                key={link}
                className={`${styles.menuLink} ${
                  link === selectedSubMenu && styles.menuLinkSelected
                } p-6`}
              >
                <Link
                  href={`?${link}`}
                  onClick={() => {
                    onClickSubMenuLink(link)
                  }}
                >
                  <span style={{ paddingLeft: '4px', fontWeight: '600' }}>
                    {capitalize(link)}
                  </span>
                </Link>
              </NavbarItem>
            )
          })}
        </NavbarContent>
      </Navbar>
    </div>
  )
}
