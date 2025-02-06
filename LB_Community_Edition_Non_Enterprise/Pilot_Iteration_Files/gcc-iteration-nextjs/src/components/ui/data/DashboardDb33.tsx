import IndicatorCard from '@/feature/flowbite-ui/card/IndicatorCard.tsx'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const fetchDashboardIndicators = async () => {
  const { data } = await axios.get(
    'http://127.0.0.1:8000/api/v1/dind/dashboard_indicators',
  )
  return data
}
export default function DashboardDb33() {
  const {
    data: indicators,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['dashboardIndicators'],
    queryFn: fetchDashboardIndicators,
  })
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return (
      <div>
        <p>Error fetching indicators:</p>
        <p>{(error as Error).message}</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Dashboards</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map((indicator, index) => (
          <IndicatorCard
            key={index}
            title={indicator.title}
            schoolWide={indicator.schoolWide}
            stateWide={indicator.stateWide}
          />
        ))}
      </div>
    </div>
  )
}
