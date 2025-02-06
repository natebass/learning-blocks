import DashboardCard, { DashboardCardProps } from "@/feature/flowbite-ui/card/DashboardCard";

interface CardDf47Props {
  cardsData: DashboardCardProps[]
}

/**
 * Indicator card.
 * CardDf47 component renders a grid of DashboardCard components based on the provided cardsData.
 *
 * @param {CardDf47Props} props - The props object containing the cardsData array.
 * @param {DashboardCardProps[]} props.cardsData - An array of DashboardCard props.
 * @returns {JSX.Element} The rendered CardDf47 component.
 */
const CardDf47 = ({ cardsData }: CardDf47Props) => {
  return (<div className="my-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {cardsData.map((card) => (
      <DashboardCard key={card.title} {...card} />
    ))}
  </div>
  )
}

export default CardDf47
