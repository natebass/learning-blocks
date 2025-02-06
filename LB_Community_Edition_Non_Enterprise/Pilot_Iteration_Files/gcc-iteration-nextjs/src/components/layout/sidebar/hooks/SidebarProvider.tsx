import { createContext, ReactNode, useCallback, useContext, useEffect, useState, } from 'react'

type SidebarContextType = {
    isOpen: boolean
    toggleSidebar: () => void
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
    undefined,
)

export interface SidebarProviderProps {
    children: ReactNode
}

/**
 * Context provider for managing the state of the dashboard sidebar.
 * - Includes functionality to toggle the sidebar open or closed.
 * - Uses localStorage persist its state.
 * @param children - The child components that will have access to the sidebar context.
 */
export const SidebarProvider = ({children}: SidebarProviderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const storedState = localStorage.getItem('dashboardSidebarIsOpen')
        setIsOpen(storedState === 'true')
    }, [])

    const toggleSidebar = useCallback(() => {
        setIsOpen((prevState) => {
            const newState = !prevState
            localStorage.setItem('dashboardSidebarIsOpen', String(newState))
            return newState
        })
    }, [])

    const value = {
        isOpen,
        toggleSidebar,
    }

    return (
        <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
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
export const useSidebar = () => {
    const context = useContext(SidebarContext)
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider')
    }
    return context
}
