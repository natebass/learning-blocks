import { useAlternateSidebar } from '@/components/ui/sidebar/hooks/AlternateSidebarProvider.tsx'
import AltSidebarS5e5 from '@/feature/flowbite-ui/sidebar/AltSidebarS5e5.tsx'
import AltSidebarS733 from '@/feature/flowbite-ui/sidebar/AltSidebarS733.tsx'
import AltSidebarS81f from '@/feature/flowbite-ui/sidebar/AltSidebarS81f.tsx'
import FloatingSidebar from '@/feature/flowbite-ui/sidebar/FloatingSidebar.tsx'
import { useEffect, useRef } from 'react'

export default function AlternateSidebar() {
  const {isOpen, layoutKey, close} = useAlternateSidebar()
  const sidebarRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        close()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [close])

  return (
    <FloatingSidebar isOpen={isOpen}>
      <div ref={sidebarRef}>
        {layoutKey === 'accessibility' ? (
          <AltSidebarS81f/>
        ) : layoutKey === 'language' ? (
          <AltSidebarS5e5/>
        ) : layoutKey === 'settings' ? (
          <AltSidebarS733/>
        ) : null}
      </div>
    </FloatingSidebar>
  )
}
