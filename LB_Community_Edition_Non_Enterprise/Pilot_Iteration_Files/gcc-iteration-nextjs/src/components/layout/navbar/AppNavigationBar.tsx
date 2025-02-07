"use-client"

import Image from 'next/image'
import Link from 'next/link'
import { capitalize } from 'lodash'

import { SubMenu } from '@/utility/models/page'

import links from '../../../../__tests__/mock/links01.json'

import styles from './AppNavigationBar.module.css'
import { SearchIcon } from '@/utility/Icons'

interface AppNavigationBarProps {
  selectedMenu: string
  selectedSubMenu: SubMenu
}

/**
 * App navigation bar. Old props: onClickSubMenuLink, selectedSubMenu
 */
function AppNavigationBar({selectedMenu}: AppNavigationBarProps) {
  return (
    <div className={`navbar-toolbar`}>
      <div>
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
                <span style={{paddingLeft: '4px', fontWeight: '600'}}>
                    {capitalize(link.key)}
                  </span>
              </Link>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          <div></div>
          <SearchIcon
            className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
        </div>
      </div>
    </div>
  )
}

export default AppNavigationBar
