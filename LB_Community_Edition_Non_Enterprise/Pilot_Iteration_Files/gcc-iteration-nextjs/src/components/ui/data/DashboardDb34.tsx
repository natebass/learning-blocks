import IndicatorCard from '@/feature/flowbite-ui/card/IndicatorCard.tsx'

export default function DashboardDb34() {
  const indicators = [
    {
      title: 'English Language Arts',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    {
      title: 'Mathematics',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    {
      title: 'Suspension Rate',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    {
      title: 'Chronic Absenteeism',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    {
      title: 'English Learner Progress',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    { title: 'Science', schoolWide: 'School Wide', stateWide: 'State-Wide' },
    {
      title: 'Graduation Rate',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
    {
      title: 'College / Career',
      schoolWide: 'School Wide',
      stateWide: 'State-Wide',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {indicators.map((indicator, index) => (
        <IndicatorCard
          key={index}
          title={indicator.title}
          schoolWide={indicator.schoolWide}
          stateWide={indicator.stateWide}
        />
      ))}
      <div className={'h-96'}></div>
    </div>
  )
}
