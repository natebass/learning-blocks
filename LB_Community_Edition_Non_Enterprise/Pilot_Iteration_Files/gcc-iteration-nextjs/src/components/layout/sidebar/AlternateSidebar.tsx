"use client"

import { useEffect, useRef } from 'react'
import { useAlternateSidebar } from "@/components/hooks/AlternateSidebarProvider";

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
    <div className={`${isOpen}`}>
      <div ref={sidebarRef}>
        {layoutKey === 'accessibility' ? (
          <div>a</div>
        ) : layoutKey === 'language' ? (
          <div>a</div>
        ) : layoutKey === 'settings' ? (
          <div>a</div>
        ) : null}
      </div>
    </div>
  )
}
