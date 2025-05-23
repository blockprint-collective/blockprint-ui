'use client'

import Typography from '@/components/Typography/Typography'
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime'
import ExtraResources from '@/components/ExtraResources/ExtraResources'
import SideModal from '@/components/SideModal/SideModal'
import { FC } from 'react'
import { DiversityView, PrecisionView } from '@/types'
import useScrollTableView from '@/hooks/useScrollTableView'
import { diversityView, precisionView } from '@/recoil/atoms'

export interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
  onOpenResources: () => void
  onScrollPrecision: () => void
  onScrollDiversity: () => void
}

const SideMenu: FC<SideMenuProps> = ({
  isOpen,
  onClose,
  onOpenResources,
  onScrollDiversity,
  onScrollPrecision,
}) => {
  const { scrollTableView } = useScrollTableView(onScrollPrecision, precisionView)
  const { scrollTableView: scrollPrecisionView } = useScrollTableView(
    onScrollDiversity,
    diversityView,
  )

  const onCloseModal = (callback: () => void) => {
    onClose()

    setTimeout(() => {
      callback()
    }, 500)
  }

  const viewResources = () => onCloseModal(onOpenResources)

  const viewPrecisionTable = (view) => onCloseModal(() => scrollTableView(view))

  const selectOverview = () => viewPrecisionTable(PrecisionView.OVERVIEW)
  const selectPpv = () => viewPrecisionTable(PrecisionView.PPV_DETAIL)
  const selectTpr = () => viewPrecisionTable(PrecisionView.TPR_DETAIL)
  const selectDiversity = () => onCloseModal(() => scrollPrecisionView(DiversityView.VALIDATOR))

  return (
    <SideModal backgroundColor='bg-dark' isOpen={isOpen} isArrowIcon={false} onClose={onClose}>
      <div className='w-full border-b border-dark300 x-padding py-4 flex justify-between'>
        <Typography type='text-base2' isBold>
          Blockprint.
        </Typography>
        <div
          onClick={onClose}
          className='md:hidden rounded-full h-8 w-8 border border-dark300 flex items-center justify-center cursor-pointer hover:bg-dark300'
        >
          <i className='bi-x-lg text-base1' />
        </div>
      </div>
      <div className='x-padding pt-16'>
        <Typography type='text-base2' isBold>
          Charts
        </Typography>
        <ul className='space-y-4 pt-3'>
          <li onClick={selectOverview}>
            <Typography type='text-base4'>Overview</Typography>
          </li>
          <li onClick={selectPpv}>
            <Typography type='text-base4'>PPV Precision</Typography>
          </li>
          <li onClick={selectTpr}>
            <Typography type='text-base4'>TPR Precision</Typography>
          </li>
          <li onClick={selectDiversity}>
            <Typography type='text-base4'>Diversity</Typography>
          </li>
          <li onClick={viewResources}>
            <hr className='w-full my-8 border-dark300' />
            <Typography type='text-base4'>Client Resources</Typography>
          </li>
        </ul>
      </div>
      <div className='space-y-24 pb-12 mt-16 x-padding'>
        <SigmaPrime />
        <ExtraResources size='lg' />
      </div>
    </SideModal>
  )
}

export default SideMenu
