'use client'

import React from 'react'
import Link from 'next/link' // Import the Next.js Link component
import ProfileDropdown from '@/components/ui/dropdown/ProfileDropdown'
import { siteConfig } from '@/utility/constants'
import { useAlternateSidebar } from "@/components/hooks/AlternateSidebarProvider";


/**
 * Main site navigation bar.
 */
export default function SiteNavbarOld() {
  const {openAlternateSidebar} = useAlternateSidebar()

  const menuItems = siteConfig.navMenuItems
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/public" className="font-bold text-lg text-gray-800 hover:text-gray-900">
            Learning Blocks
          </Link>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <Link href="/app/dashboard" className="text-gray-600 hover:text-gray-800">Demo
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button onClick={() => openAlternateSidebar('language')} className="hidden sm:inline-block">
            <img
              src="/menu_accessible_light.png"
              alt="Accessible Menu"
              width={24}
              height={24}
            />
          </button>
          <button onClick={() => openAlternateSidebar('language')} className="hidden sm:inline-block">
            <img
              src="/menu_world_light.png"
              alt="World Menu"
              width={24}
              height={24}
            />
          </button>
          <Link href="#" className="hidden sm:inline-block">
            <img
              src="/menu_help_circle_light.png"
              alt="Help Icon"
              width={24}
              height={24}
            />
          </Link>
          <ProfileDropdown/>
          <Link href="/signin"
                className="rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 px-4 py-2 text-white shadow-lg text-sm font-semibold">
            Sign In
          </Link>
        </div>
      </div>
      {/*{isMenuOpen && (*/}
      {/*  <div className="sm:hidden bg-white shadow-md">*/}
      {/*    {menuItems.map((item, index) => (*/}
      {/*      <div key={`${item}-${index}`} className="px-4 py-2 border-b">*/}
      {/*        <Link href="/app">*/}
      {/*          <a*/}
      {/*            className={`block w-full ${*/}
      {/*              index === 2*/}
      {/*                ? 'text-primary'*/}
      {/*                : index === menuItems.length - 1*/}
      {/*                  ? 'text-red-500'*/}
      {/*                  : 'text-gray-600'*/}
      {/*            } hover:text-gray-800`}*/}
      {/*          >*/}
      {/*            {item}*/}
      {/*          </a>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}
    </nav>
  )
}
