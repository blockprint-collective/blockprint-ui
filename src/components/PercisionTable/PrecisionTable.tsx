'use client'

import {FC} from 'react'
import {PrecisionResults, PrecisionView} from '@/types'
import Overview from '@/components/PercisionTable/Views/Overview';
import TabSelect from '@/components/PercisionTable/TabSelect';
import TruePositive from '@/components/PercisionTable/Views/TruePositive';
import Typography from '@/components/Typography/Typography';
import PositivePredictive from '@/components/PercisionTable/Views/PositivePredictive';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';
import {useRouter, useSearchParams} from 'next/navigation';

export interface PrecisionTableProps {
  data: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ data }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const chartView = searchParams.get('chart')?.toUpperCase()

    const renderView = () => {
        switch (chartView) {
            case PrecisionView.TPR_DETAIL:
                return (
                    <TruePositive data={data}/>
                )
            case PrecisionView.PPV_DETAIL:
                return (
                    <PositivePredictive data={data}/>
                )
            default:
                return (
                    <Overview data={data}/>
                )
        }
    }
    const viewTable = (table: PrecisionView) => router.push(`?chart=${table.toLowerCase()}`, {scroll: false})

    const viewOverview = () => viewTable(PrecisionView.OVERVIEW)
    const viewTPR = () => viewTable(PrecisionView.TPR_DETAIL)
    const viewPPV = () => viewTable(PrecisionView.PPV_DETAIL)

  return (
      <div className="w-screen x-padding flex flex-col md:flex-row justify-between">
          <div className="order-2 md:oder-1 xl:flex-1">
              {renderView()}
          </div>
          <div className="space-y-4 w-36 order-1 md:order-2 mb-8 lg:mb-0 relative">
              <Typography>Charts</Typography>
              <div>
                   <TabSelect text="Overview" onClick={viewOverview} isActive={chartView === PrecisionView.OVERVIEW || !chartView}/>
                   <TabSelect text="TPR Precision" onClick={viewTPR} isActive={chartView === PrecisionView.TPR_DETAIL} />
                  <TabSelect text="PPV Precision" onClick={viewPPV} isActive={chartView === PrecisionView.PPV_DETAIL} />
              </div>
              <SigmaPrime className="hidden xl:flex absolute bottom-0 right-0"/>
            </div>
      </div>
  )
}

export default PrecisionTable
