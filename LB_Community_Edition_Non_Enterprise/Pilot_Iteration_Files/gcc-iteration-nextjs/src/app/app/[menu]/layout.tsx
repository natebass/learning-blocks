import SiteNavbarOld from '@/components/layout/navbar/old/SiteNavbarOld'
import SiteFooter from '@/components/layout/footer/SiteFooter'

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNavbarOld loggedIn={true}/>
      <main className="">{children}</main>
      <footer className="mt-auto">
        <SiteFooter />
      </footer>
    </div>
  )
}
