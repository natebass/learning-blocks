'use client'

import { useSearchParams } from 'next/navigation'

import DashboardManager from '@/feature/dashboard/DashboardManager'
import AppContainer from '@/components/layout/AppContainer'
import exampleDataDashboard from '../../../../__tests__/mock/ExampleDataDashboard.json'
import links from '../../../../__tests__/mock/links02.json'
import { useState } from 'react'

export default function Page({ params }: { params: { menu: string } }) {
  let searchParams = useSearchParams()
  let queryKey = searchParams.get('q') || '1efa02'
  let [subMenu, setSubMenu] = useState<string>(
    searchParams.get('n')! || getSubMenu(params.menu)!,
  )
  let data = exampleDataDashboard

  function getSubMenu(selectedMenu: string) {
    return links.find((link) => link.title === selectedMenu)?.subMenuLinks[0]
  }

  return (
    <AppContainer
      selectedMenu={params.menu}
      selectedSubMenu={subMenu}
      onClickSubMenu={setSubMenu}
    >
      <DashboardManager data={data ? data : [{}]} selectedSubMenu={subMenu} />
    </AppContainer>
  )
}
