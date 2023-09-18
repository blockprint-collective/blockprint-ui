'use client'

import Typography from '@/components/Typography/Typography';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';
import ExtraResources from '@/components/ExtraResources/ExtraResources';
import {useRouter} from 'next/navigation';
import {PrecisionView} from '@/types';

const Footer = () => {
    const router = useRouter()
    const changeView = (table: PrecisionView) => router.push(`?chart=${table.toLowerCase()}`)
    const onScrollFinish = (callback) => {
        if (window.scrollY === 0) {
            window.removeEventListener('scroll', onScrollFinish);
            callback();
        }
    };
    const moveToTable = (table: PrecisionView) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.addEventListener('scroll', () => onScrollFinish(() => changeView(table)));
    }

    const viewOverview = () => moveToTable(PrecisionView.OVERVIEW)
    const viewTpr = () => moveToTable(PrecisionView.TPR_DETAIL)
    const viewPpv = () => moveToTable(PrecisionView.PPV_DETAIL)


  return (
      <div className="w-full x-padding py-8 space-y-12 lg:space-y-0 bg-dark300 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col space-y-12 lg:space-y-0 justify-between">
              <Typography isBold>Blockprint.</Typography>
              <ExtraResources/>
          </div>
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-48 lg:items-end">
              <div>
                  <Typography isBold>Charts</Typography>
                  <ul>
                      <li className="cursor-pointer" onClick={viewOverview}>
                          <Typography color="text-light80">Overview</Typography>
                      </li>
                      <li className="cursor-pointer" onClick={viewTpr}>
                          <Typography color="text-light80">TPR Precision</Typography>
                      </li>
                      <li className="cursor-pointer" onClick={viewPpv}>
                          <Typography color="text-light80">PPV Precision</Typography>
                      </li>
                      {/* <li>*/}
                      {/*    <Typography color="text-light80">Diversity</Typography>*/}
                      {/* </li>*/}
                  </ul>
              </div>
              <div>
                  <SigmaPrime/>
              </div>
          </div>
      </div>
  )
}

export default Footer