'use client'

import Typography from '@/components/Typography/Typography';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';
import ExtraResources from '@/components/ExtraResources/ExtraResources';
import Section from '@/components/Section/Section';
import {FC} from 'react';
import {precisionView} from '@/recoil/atoms';
import {PrecisionView} from '@/types';
import useScrollTableView from '@/hooks/useScrollTableView';

export interface FooterProps {
    onScrollPrecision: () => void
    onScrollDiversity: () => void
}

const Footer:FC<FooterProps> = ({onScrollPrecision, onScrollDiversity}) => {
    const { scrollTableView } = useScrollTableView(onScrollPrecision, precisionView)

    const viewTpr = () => scrollTableView(PrecisionView.TPR_DETAIL)
    const viewOverview = () => scrollTableView(PrecisionView.OVERVIEW)
    const viewPpv = () => scrollTableView(PrecisionView.PPV_DETAIL)


  return (
      <Section className="bg-dark300">
          <div className="w-full x-padding py-8 space-y-12 lg:space-y-0 flex flex-col lg:flex-row justify-between">
              <div className="flex flex-col space-y-8 lg:space-y-0 justify-between">
                  <Typography isBold>Blockprint.</Typography>
                  <ExtraResources/>
              </div>
              <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-48">
                  <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24 items-start">
                      <div>
                          <Typography isBold>Diversity Charts</Typography>
                          <ul>
                              <li onClick={onScrollDiversity} className="cursor-pointer">
                                  <Typography color="text-light80">Validator Diversity</Typography>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <Typography isBold>Precision Charts</Typography>
                          <ul>
                              <li onClick={viewOverview} className="cursor-pointer">
                                  <Typography color="text-light80">Overview</Typography>
                              </li>
                              <li onClick={viewTpr} className="cursor-pointer">
                                  <Typography color="text-light80">TPR Precision</Typography>
                              </li>
                              <li onClick={viewPpv} className="cursor-pointer">
                                  <Typography color="text-light80">PPV Precision</Typography>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div>
                      <SigmaPrime/>
                  </div>
              </div>
          </div>
      </Section>
  )
}

export default Footer