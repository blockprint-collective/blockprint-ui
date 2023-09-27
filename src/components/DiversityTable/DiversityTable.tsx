'use client'

import Section from '@/components/Section/Section';
import useTableNav from '@/hooks/useTableNav';
import Typography from '@/components/Typography/Typography';
import TabSelect from '@/components/PercisionTable/TabSelect';
import {DiversityResults} from '@/types';
import Diversity from '@/components/PercisionTable/Views/Diversity';
import {FC} from 'react';

export interface DiversityTableProps {
    diversity: DiversityResults
}

const DiversityTable:FC<DiversityTableProps> = ({diversity}) => {
    const clientList = Object.keys(diversity).filter(item => !['uncertain', 'other'].includes(item.toLowerCase()))
    const { currentView, viewOverview } = useTableNav()
   const renderView = () => {
        switch (currentView) {
            default:
                return <Diversity clientList={clientList}  diversity={diversity}/>
        }
   }
  return (
      <Section>
          <div className="w-full x-padding flex flex-col md:flex-row justify-between">
              <div className="order-2 md:oder-1 md:flex-1">
                  {renderView()}
              </div>
              <div className="space-y-4 w-full md:w-36 order-1 md:order-2 mb-8 lg:mb-0 relative">
                  <div className="md:w-full border-b pb-4 md:border-none md:pb-0 md:border-dark300">
                      <Typography isBold>Diversity Charts</Typography>
                  </div>
                  <div className="flex space-x-4 md:flex-col md:space-x-0 overflow-x-auto scrollbar-hide">
                      <TabSelect text="Validator" onClick={viewOverview} isActive/>
                  </div>
              </div>
          </div>
      </Section>
  )
}

export default DiversityTable