import React from 'react'
import DashboardD81 from './DashboardD81'

export interface DashboardManagerProps {
  children: React.ReactNode
  data: [any]
  selectedSubMenu: string
  setPageQueryKey?: any
}

function setPageQueryKey(arg0: string) {}

/**
 * DashboardManager component to manage and render different dashboard views
 * based on the selected submenu.
 * Old props:
  data,
  selectedSubMenu,
  setPageQueryKey,
 */
export default function DashboardManager({ data }: DashboardManagerProps) {
  return (
    <div>
      <DashboardD81 data={data} setPageQueryKey={setPageQueryKey} />
    </div>
  )
}
