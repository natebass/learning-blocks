import { buildNavigationStructure, TEST_NAV } from '@/siteConfig.ts'
import { useSearch } from '@tanstack/react-router'
import { createContext, ReactNode, useContext, useMemo } from 'react'

export interface NavigationItem {
  title: string
  icon?: string
  type: 'link' | 'dropdown'
  menuId?: string
  submenu?: NavigationItem[]
  badge?: string | number
}

export interface NavigationList {
  primaryLinks: NavigationItem[]
  dropdownLinks: NavigationItem[]
  secondaryLinks: NavigationItem[]
  selectedItem?: string
}

export enum NavigationKey {
  DASHBOARD = 'N14a',
  INTERVENTION = 'N14b',
  ADMIN = 'N14c',
}

/**
 * The `NavigationItem` interface represents a navigation menu item,
 * including properties for links, dropdowns with submenus, and optional badges.
 * - Add a link element to the navigation
 * - Add a dropdown element with submenu items
 * - Dynamically build navigation based on a key. This can filter or modify included items.
 * - For example: customize structure based on navigationKey
 * Properties:
 * - `title` (string): The label of the menu item.
 * - `icon` (string, optional): A path or identifier for the item's icon.
 * - `type` ('link' | 'dropdown'): Identifies whether the item is a link or a dropdown menu.
 * - ` menuId` (string, optional): The URL to navigate to when the item is clicked (relevant for 'link').
 * - `submenu` (NavigationItem[], optional): An array of nested menu items for dropdowns.
 * - `badge` (string | number, optional): A badge or counter to display alongside the menu item.
 */
export class NavigationBuilder {
  private navigation: NavigationList = {
    primaryLinks: [],
    dropdownLinks: [],
    secondaryLinks: [],
  }

  private selectedItem?: string

  constructor(private navigationKey?: NavigationKey) {}

  addPrimaryLink(title: string, menuId: string, badge?: string | number): this {
    this.navigation.primaryLinks.push({
      title,
      type: 'link',
      menuId: menuId,
      badge,
    })
    return this
  }

  addSecondaryLink(
    title: string,
    menuId: string,
    badge?: string | number,
  ): this {
    this.navigation.secondaryLinks.push({
      title,
      type: 'link',
      menuId: menuId,
      badge,
    })
    return this
  }

  addDropdownLink(title: string, submenu: NavigationItem[]): this {
    this.navigation.dropdownLinks.push({ title, type: 'dropdown', submenu })
    return this
  }

  setSelectedItem(key: string): this {
    this.selectedItem = key
    return this
  }

  getSelectedItem(): string | undefined {
    return this.selectedItem
  }

  build(): NavigationList {
    if (this.navigationKey) {
      if (this.navigationKey === NavigationKey.ADMIN) {
        return {
          primaryLinks: [],
          secondaryLinks: [],
          dropdownLinks: [],
          selectedItem: this.selectedItem,
        }
      }
    }

    // Include the selected item in the final list being returned
    return {
      ...this.navigation,
      selectedItem: this.selectedItem,
    }
  }
}

type SiteNavigationContextType = {
  currentSecondary: string
  currentPrimary: string
  primaryLinks: []
  secondaryLinks: []
  setPrimaryNavigationKey: (key: string | null) => void
}
const SiteNavigationContext = createContext<
  SiteNavigationContextType | undefined
>(undefined)
/**
 * Context provider for managing the state of page navigation.
 * @param children - The child components that will have access to the SiteNavigation context.
 */
export const SiteNavigationProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const search = useSearch({ strict: false }) // Use TanStack Router's useSearch to get the current search params
  const menu = buildNavigationStructure(TEST_NAV)
  const primaryLinks = menu.primaryLinks
  const secondaryLinks = menu.secondaryLinks

  // Calculate the `currentPrimary` and `currentSecondary` from the `m` search param
  const currentPrimary = useMemo(() => search.m || null, [search])
  const currentSecondary = useMemo(() => {
    // Optionally derive a secondary key based on `m` or other logic
    return search.m ? `${search.m}-secondary` : null
  }, [search])

  const providerValue = useMemo(
    () => ({
      currentPrimary,
      currentSecondary,
      primaryLinks,
      secondaryLinks,
    }),
    [currentPrimary, currentSecondary, primaryLinks, secondaryLinks],
  )

  return (
    <SiteNavigationContext.Provider value={providerValue}>
      {children}
    </SiteNavigationContext.Provider>
  )
}
/**
 * A custom hook to access the dashboard SiteNavigation context.
 * Throws an error if the hook is used outside the `SiteNavigationProvider`.
 * Example usage:
 * ```tsx
 * const { isOpen, toggleSiteNavigation } = useSiteNavigation();
 * ```
 * @throws {Error} If the hook is used outside a `SiteNavigationProvider`.
 */
export const useSiteNavigation = () => {
  const context = useContext(SiteNavigationContext)
  if (!context)
    throw new Error(
      'useSiteNavigation must be used within a SiteNavigationProvider',
    )
  return { ...context }
}
