'use-client'

import Image from 'next/image'
import { Input, Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { capitalize } from 'lodash'

import { SubMenu } from '@/utility/models/page'

import links from '../../../../__tests__/mock/links01.json'

import styles from './AppNavbar.module.css'

interface AppNavbarProps {
  selectedMenu: string
}

/**
 * App navigation bar. Old props: onClickSubMenuLink, selectedSubMenu
 */
export default function AppNavbar({ selectedMenu }: AppNavbarProps) {
  return (
    <div className={`${styles.mainToolbarContainer}`}>
      <Navbar className={`border-bottom`}>
        <NavbarContent justify="start">
          {links.map((link) => {
            return (
              <div key={link.key}>
                <Link
                  className={`${styles.menuLink} ${
                    link.key === selectedMenu && styles.menuLinkSelected
                  }`}
                  href={link.key}
                >
                  <Image
                    alt=""
                    height="24"
                    src={
                      link.key === selectedMenu
                        ? `/${link.menuIcon}_light.svg`
                        : `/${link.menuIcon}.svg`
                    }
                    width="24"
                  />
                  <span style={{ paddingLeft: '4px', fontWeight: '600' }}>
                    {capitalize(link.key)}
                  </span>
                </Link>
              </div>
            )
          })}
        </NavbarContent>
      </Navbar>
    </div>
  )
}
