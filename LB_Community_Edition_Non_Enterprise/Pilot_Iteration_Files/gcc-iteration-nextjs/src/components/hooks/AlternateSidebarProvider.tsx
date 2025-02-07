"use client"

import { createContext, ReactNode, useContext, useState } from 'react'

type SidebarContextType = {
  isOpen: boolean
  close: () => void
  layoutKey: string | null
  openAlternateSidebar: (layoutKey: string | null) => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

/**
 * Context provider for managing the state of the dashboard sidebar.
 * - Includes functionality to toggle the sidebar open or closed.
 * - Uses localStorage persist its state.
 * @param children - The child components that will have access to the sidebar context.
 */
export const AlternateSidebarProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [layoutKey, setLayoutKey] = useState<string | null>(null)
  const close = () => {
    setLayoutKey(null)
  }
  const isOpen = layoutKey !== null
  const openAlternateSidebar = (layoutKey: string | null) => {
    setLayoutKey(layoutKey)
  }
  return (
    <SidebarContext.Provider
      value={{ isOpen, openAlternateSidebar, layoutKey, close }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

/**
 * A custom hook to access the dashboard sidebar context.
 * Throws an error if the hook is used outside of the `DashboardSidebarProvider`.
 * Example usage:
 * ```tsx
 * const { isOpen, toggleSidebar } = useDashboardSidebar();
 * ```
 * @throws {Error} If the hook is used outside of a `DashboardSidebarProvider`.
 */
export const useAlternateSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context)
    throw new Error('useSidebar must be used within a SidebarProvider')

  const { close, ...rest } = context

  return { close, ...rest }
}
