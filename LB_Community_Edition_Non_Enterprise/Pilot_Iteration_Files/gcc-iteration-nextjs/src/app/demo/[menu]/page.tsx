'use client'

import LandingPage02 from "@/feature/landingPage/LandingPage02";

export default function Page() {
  return <div>
    <LandingPage02/>
  </div>
}
// import { useSearchParams } from 'next/navigation'
//
// import DashboardManager from '@/feature/dashboard/DashboardManager'
// import AppContainer from '@/components/layout/container/AppContainer'
//
// export default function Page({ params }: { params: { menu: string } }) {
//   let searchParams = useSearchParams()
//   let currentSubMenu = searchParams.get('q') || '1efa02'
//   let data = undefined
//
//   return (
//     <AppContainer selectedMenu={params.menu} selectedSubMenu={currentSubMenu}>
//       <DashboardManager
//         data={data ? data : [{}]}
//         selectedSubMenu={currentSubMenu}
//       />
//     </AppContainer>
//   )
// }
