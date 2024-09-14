'use client'

import { useSearchParams } from 'next/navigation'

import DashboardManager from '@/feature/dashboard/DashboardManager'
import AppContainer from '@/components/layout/AppContainer'
import exampleDataAnalytics from '../../../../__tests__/mock/ExampleDataAnalytics.json'
import exampleDataDemographic from '../../../../__tests__/mock/ExampleDataDemographic.json'

export default function Page({ params }: { params: { menu: string } }) {
  let searchParams = useSearchParams()
  let queryKey = searchParams.get('q') || '1efa02'
  let currentSubMenu = searchParams.get('n') || 'example01'
  let data = {
    analytics: exampleDataAnalytics,
    demographics: exampleDataDemographic,
  }

  return (
    <AppContainer selectedMenu={params.menu} selectedSubMenu={currentSubMenu}>
      <DashboardManager
        data={data ? data : [{}]}
        selectedSubMenu={currentSubMenu}
      />
    </AppContainer>
  )
}
