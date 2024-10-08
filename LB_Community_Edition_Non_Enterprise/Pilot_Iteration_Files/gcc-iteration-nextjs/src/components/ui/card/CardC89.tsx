import { PieChart } from '@mui/x-charts/PieChart'

import { Demographic } from '@/utility/models/demographic'
import { parseDemographicPieChartData } from '@/feature/dashboard/graphUtils'

import styles from './CardC89.module.css'

interface C89Props {
  data: Demographic[]
}

/**
 * Bento box demographics graph.
 * @param props
 * @constructor
 */
function CardC89({ data }: C89Props) {
  return (
    <div>
      <div className={`${styles.toolbarContainer}`}>
        <div className={`${styles.leftToolbarSection}`}>
          <span>Student Count</span>
        </div>
        <div className={`${styles.rightToolbarSection}`}>
          <span
            className={`${styles.toolbarLink} ${styles.toolbarLinkSelected}`}
          >
            All
          </span>
          <span className={`${styles.toolbarLink}`}>Male</span>
          <span className={`${styles.toolbarLink}`}>Female</span>
        </div>
      </div>
      <div className={`${styles.dashboardContainer}`}>
        {data ? (
          <PieChart
            height={300}
            series={[
              {
                data: parseDemographicPieChartData(data),
                innerRadius: 80,
                outerRadius: 100,
                paddingAngle: 0,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
            width={820}
          />
        ) : null}
      </div>
    </div>
  )
}

export default CardC89
