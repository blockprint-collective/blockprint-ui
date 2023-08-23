'use client'

import {FC, useState} from 'react'
import {PrecisionResults, PrecisionView} from '@/types'
import Overview from '@/components/PercisionTable/Views/Overview';
import TabSelect from '@/components/PercisionTable/TabSelect';

export interface PrecisionTableProps {
  data: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ data }) => {
    const [view, setView] = useState<PrecisionView>(PrecisionView.OVERVIEW)

    const renderView = () => {
        switch (view) {
            case PrecisionView.TPR_DETAIL:
                return (
                    <div>hello world</div>
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
      <div className="w-1/2">
          <div className="border rounded-t-lg flex">
              <TabSelect onClick={viewOverview} isActive={view === PrecisionView.OVERVIEW}>
                  <p>Overview</p>
              </TabSelect>
              <TabSelect onClick={viewTPR} isActive={view === PrecisionView.TPR_DETAIL}>
                  <p>TPR Precision</p>
              </TabSelect>
          </div>
          <div className="border border-t-0 rounded-b-lg">
              {renderView()}
          </div>
      </div>
  )
}

export default PrecisionTable
