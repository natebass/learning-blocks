import SiteNavbarOld from '@/components/layout/navbar/old/SiteNavbarOld'
import SiteFooter from '@/components/layout/footer/SiteFooter'
import SiteLayout from "@/components/layout/container/SiteLayout";
import LandingPage02 from "@/feature/landingPage/LandingPage02";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <SiteLayout>
        {children}
      </SiteLayout>
  )
}
