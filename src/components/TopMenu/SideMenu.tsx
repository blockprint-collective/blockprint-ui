'use client'

import Typography from '@/components/Typography/Typography';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';
import ExtraResources from '@/components/ExtraResources/ExtraResources';
import SideModal from '@/components/SideModal/SideModal';
import {FC} from 'react';
import useTableNav from '@/hooks/useTableNav';
import {PrecisionView} from '@/types';

export interface SideMenuProps {
    isOpen: boolean,
    onClose: () => void
}

const SideMenu:FC<SideMenuProps> = ({isOpen, onClose}) => {
    const { viewOverview, viewTPR, viewPPV, viewDiversity } = useTableNav()


    const selectNav = (view: PrecisionView) => {
        onClose()

        switch (view) {
            case PrecisionView.DIVERSITY:
                viewDiversity();
                break;
            case PrecisionView.PPV_DETAIL:
                viewPPV();
                break;
            case PrecisionView.TPR_DETAIL:
                viewTPR();
                break;
            default:
                viewOverview();
                break;
        }
    }

    const selectOverview = () => selectNav(PrecisionView.OVERVIEW)
    const selectPpv = () => selectNav(PrecisionView.PPV_DETAIL)
    const selectTpr= () => selectNav(PrecisionView.TPR_DETAIL)
    const selectDiversity = () => selectNav(PrecisionView.DIVERSITY)


  return (
      <SideModal backgroundColor="bg-dark" isOpen={isOpen} isArrowIcon={false} onClose={onClose}>
          <div className="w-full border-b border-dark300 x-padding py-4 flex justify-between">
              <Typography type="text-base2" isBold>Blockprint.</Typography>
              <div onClick={onClose} className="md:hidden rounded-full h-8 w-8 border border-dark300 flex items-center justify-center cursor-pointer hover:bg-dark300">
                  <i className="bi-x-lg text-base1"/>
              </div>
          </div>
          <div className="x-padding pt-16">
              <Typography type="text-base2" isBold>Charts</Typography>
              <ul className="space-y-4 pt-3">
                  <li onClick={selectOverview}>
                      <Typography type="text-base4">Overview</Typography>
                  </li>
                  <li onClick={selectPpv}>
                      <Typography type="text-base4">PPV Precision</Typography>
                  </li>
                  <li onClick={selectTpr}>
                      <Typography type="text-base4">TPR Precision</Typography>
                  </li>
                  <li onClick={selectDiversity}>
                      <Typography type="text-base4">Diversity</Typography>
                  </li>
                  <li>
                      <hr className="w-full my-8 border-dark300" />
                      <Typography type="text-base4">Client Resources</Typography>
                  </li>
              </ul>
          </div>
          <div className="space-y-24 pb-12 mt-16 x-padding">
              <SigmaPrime/>
              <ExtraResources size="lg"/>
          </div>
      </SideModal>
  )
}

export default SideMenu;