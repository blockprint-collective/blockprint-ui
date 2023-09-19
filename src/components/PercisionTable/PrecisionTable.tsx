'use client'

import {FC} from 'react'
import {DiversityResults, PrecisionResults, PrecisionView} from '@/types'
import Overview from '@/components/PercisionTable/Views/Overview';
import TabSelect from '@/components/PercisionTable/TabSelect';
import TruePositive from '@/components/PercisionTable/Views/TruePositive';
import Typography from '@/components/Typography/Typography';
import PositivePredictive from '@/components/PercisionTable/Views/PositivePredictive';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';
import {useRouter, useSearchParams} from 'next/navigation';
import Diversity from '@/components/PercisionTable/Views/Diversity';

export interface PrecisionTableProps {
  confusion: PrecisionResults
  diversity: DiversityResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ confusion, diversity }) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const chartView = searchParams.get('chart')?.toUpperCase()
    const clientList = Object.keys(confusion.clients)

    const renderView = () => {
        switch (chartView) {
            case PrecisionView.TPR_DETAIL:
                return (
                    <TruePositive data={confusion}/>
                )
            case PrecisionView.PPV_DETAIL:
                return (
                    <PositivePredictive data={confusion}/>
                )
            case PrecisionView.DIVERSITY:
                return (
                    <Diversity clientList={clientList}  diversity={diversity}/>
                )
            default:
                return (
                    <Overview data={confusion}/>
                )
        }
    }
    const viewTable = (table: PrecisionView) => router.push(`?chart=${table.toLowerCase()}`, {scroll: false})

    const viewOverview = () => viewTable(PrecisionView.OVERVIEW)
    const viewTPR = () => viewTable(PrecisionView.TPR_DETAIL)
    const viewPPV = () => viewTable(PrecisionView.PPV_DETAIL)
    const viewDiversity = () => viewTable(PrecisionView.DIVERSITY)

  return (
      <div className="w-screen x-padding flex flex-col md:flex-row justify-between">
          <div className="order-2 md:oder-1 md:flex-1">
              {renderView()}
          </div>
          <div className="space-y-4 w-full md:w-36 order-1 md:order-2 mb-8 lg:mb-0 relative">
              <div className="md:w-full border-b pb-4 md:border-none md:pb-0 md:border-dark300">
                  <Typography isBold>Charts</Typography>
              </div>
              <div className="flex space-x-4 md:flex-col md:space-x-0 overflow-x-auto">
                   <TabSelect text="Overview" onClick={viewOverview} isActive={chartView === PrecisionView.OVERVIEW || !chartView}/>
                   <TabSelect text="TPR Precision" onClick={viewTPR} isActive={chartView === PrecisionView.TPR_DETAIL} />
                  <TabSelect text="PPV Precision" onClick={viewPPV} isActive={chartView === PrecisionView.PPV_DETAIL} />
                  <TabSelect text="Client Diversity" onClick={viewDiversity} isActive={chartView === PrecisionView.DIVERSITY} />
              </div>
              <SigmaPrime className="hidden xl:flex absolute bottom-0 right-0"/>
            </div>
      </div>
  )
}

export default PrecisionTable
