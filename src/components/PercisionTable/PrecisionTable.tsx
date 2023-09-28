'use client'

import {FC} from 'react'
import {PrecisionResults, PrecisionView} from '@/types'
import Overview from '@/components/PercisionTable/Views/Overview';
import TabSelect from '@/components/PercisionTable/TabSelect';
import TruePositive from '@/components/PercisionTable/Views/TruePositive';
import Typography from '@/components/Typography/Typography';
import PositivePredictive from '@/components/PercisionTable/Views/PositivePredictive';
import useTableNav from '@/hooks/useTableNav';
import Section from '@/components/Section/Section';

export interface PrecisionTableProps {
  confusion: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ confusion }) => {
    const { currentView, viewOverview, viewTPR, viewPPV } = useTableNav()

    const renderView = () => {
        switch (currentView) {
            case PrecisionView.TPR_DETAIL:
                return (
                    <TruePositive data={confusion}/>
                )
            case PrecisionView.PPV_DETAIL:
                return (
                    <PositivePredictive data={confusion}/>
                )
            default:
                return (
                    <Overview data={confusion}/>
                )
        }
    }

  return (
      <Section>
          <div className="w-full x-padding">
              <div className="pb-8 pt-16 lg:pt-32 space-y-4 lg:space-y-2">
                  <Typography type="text-base3" className="lg:text-base4 tracking-subTitle leading-6 lg:leading-10">Where does this data come from?</Typography>
                  <Typography className="max-w-2xl">Blockprint classifies blocks using a machine-learning model which sometimes makes mistakes. The statistics shown below are measurements of blockprint’s accuracy using a cluster of consensus clients that produce blocks every slot.</Typography>
                  <div className="flex space-x-2">
                      <Typography family="font-archivo" className="tracking-tighter" color="text-purple">Dive into precision tables</Typography>
                      <i className="bi-arrow-down text-purple"/>
                  </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between">
                  <div className="order-2 md:oder-1 md:flex-1">
                      {renderView()}
                  </div>
                  <div className="space-y-4 w-full md:w-36 order-1 md:order-2 mb-8 lg:mb-0 relative">
                      <div className="md:w-full border-b pb-4 md:border-none md:pb-0 md:border-dark300">
                          <Typography isBold>Precision Charts</Typography>
                      </div>
                      <div className="flex space-x-4 md:flex-col md:space-x-0 overflow-x-auto scrollbar-hide">
                          <TabSelect text="Overview" onClick={viewOverview} isActive={currentView === PrecisionView.OVERVIEW || !currentView}/>
                          <TabSelect text="TPR Precision" onClick={viewTPR} isActive={currentView === PrecisionView.TPR_DETAIL} />
                          <TabSelect text="PPV Precision" onClick={viewPPV} isActive={currentView === PrecisionView.PPV_DETAIL} />
                      </div>
                  </div>
              </div>
          </div>
      </Section>
  )
}

export default PrecisionTable
