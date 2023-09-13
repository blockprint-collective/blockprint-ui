'use client'

import {FC, useState} from 'react'
import {PrecisionResults, PrecisionView} from '@/types'
import Overview from '@/components/PercisionTable/Views/Overview';
import TabSelect from '@/components/PercisionTable/TabSelect';
import TruePositive from '@/components/PercisionTable/Views/TruePositive';
import Typography from '@/components/Typography/Typography';

export interface PrecisionTableProps {
  data: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ data }) => {
    const [view, setView] = useState<PrecisionView>(PrecisionView.OVERVIEW)

    const renderView = () => {
        switch (view) {
            case PrecisionView.TPR_DETAIL:
                return (
                    <TruePositive data={data}/>
                )
            default:
                return (
                    <Overview data={data}/>
                )
        }
    }
    const viewOverview = () => setView(PrecisionView.OVERVIEW)
    const viewTPR = () => setView(PrecisionView.TPR_DETAIL)

  return (
      <div className="w-full flex justify-between">
          {renderView()}
          <div className="space-y-4 w-36">
              <Typography>Charts</Typography>
              <div>
                  <TabSelect onClick={viewOverview} isActive={view === PrecisionView.OVERVIEW}>
                      <p>Overview</p>
                  </TabSelect>
                  <TabSelect onClick={viewTPR} isActive={view === PrecisionView.TPR_DETAIL}>
                      <p>TPR Precision</p>
                  </TabSelect>
              </div>
            </div>
      </div>
  )
}

export default PrecisionTable
