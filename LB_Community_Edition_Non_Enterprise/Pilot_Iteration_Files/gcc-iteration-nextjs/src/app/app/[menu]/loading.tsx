'use client'

import AppContainer from '@/components/layout/AppContainer'
import LoadingSkeleton from '@/components/ui/skeleton/LoadingSkeleton'

export default function Loader() {
  return (
    <AppContainer selectedMenu="dashboard">
      return <LoadingSkeleton />
    </AppContainer>
  )
}
