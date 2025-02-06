'use client'

import React from 'react'
import Link from 'next/link' // Import the Next.js Link component
import ProfileDropdown from '@/components/ui/dropdown/ProfileDropdown'
import { siteConfig } from '@/utility/constants'

interface SiteNavbarProps {
  loggedIn: boolean
}

export default function SiteNavbar({
  loggedIn: siteSelector,
}: SiteNavbarProps) {
  const menuItems = siteConfig.navMenuItems

  // eslint-disable-next-line no-unused-vars
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden text-gray-500 focus:outline-none"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="font-bold text-lg text-gray-800 hover:text-gray-900">
              Learning Blocks
          </Link>
        </div>

        {!siteSelector && (
          <div className="hidden lg:flex gap-4 items-center">
            {/* Demo Link */}
            <Link href="/app/dashboard"className="text-gray-600 hover:text-gray-800">Demo
            </Link>
          </div>
        )}

        {/* Right content */}
        <div className="flex items-center justify-end gap-4">
          {/* Icons */}
          <Link href="#"className="hidden sm:inline-block">
              <img
                src="/menu_accessible_light.png"
                alt="Accessible Menu"
                width={24}
                height={24}
              />
          </Link>
          <Link href="#"className="hidden sm:inline-block">
              <img
                src="/menu_world_light.png"
                alt="World Menu"
                width={24}
                height={24}
              />
          </Link>
          <Link href="#" className="hidden sm:inline-block">
              <img
                src="/menu_help_circle_light.png"
                alt="Help Icon"
                width={24}
                height={24}
              />
          </Link>

          {/* Right button or dropdown */}
          {siteSelector ? (
            <ProfileDropdown/>
          ) : (
            <Link href="/signin"
                  className="rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-2 text-white shadow-lg text-sm font-semibold">
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          {menuItems.map((item, index) => (
            <div key={`${item}-${index}`} className="px-4 py-2 border-b">
              <Link href="/app">
                <a
                  className={`block w-full ${
                    index === 2
                      ? 'text-primary'
                      : index === menuItems.length - 1
                        ? 'text-red-500'
                        : 'text-gray-600'
                  } hover:text-gray-800`}
                >
                  {item}
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
