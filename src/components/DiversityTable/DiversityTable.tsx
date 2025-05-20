'use client'

import Typography from '@/components/Typography/Typography'
import TabSelect from '@/components/PrecisionTable/TabSelect'
import { DiversityResults } from '@/types'
import Diversity from '@/components/DiversityTable/Views/Diversity'
import { FC } from 'react'
import { motion } from 'framer-motion'
import {
  ANIM_VIEWPORT,
  LEFT_SIDE_DIAGONAL_ANIM,
  RIGHT_SIDE_DIAGONAL_ANIM,
  UP_ANIM,
} from '@/constants'
import { useRecoilValue } from 'recoil'
import { diversityView } from '@/recoil/atoms'
import UnderConstructionMessage from '@/components/UnderConstructionMessage/UnderConstructionMessage'

export interface DiversityTableProps {
  diversity: DiversityResults
  isUnderConstruction: boolean
}

const DiversityTable: FC<DiversityTableProps> = ({ diversity, isUnderConstruction }) => {
  const clientList = Object.keys(diversity).filter(
    (item) => !['uncertain', 'other'].includes(item.toLowerCase()),
  )
  const view = useRecoilValue(diversityView)
  const renderView = () => {
    if (isUnderConstruction) {
      return (
        <UnderConstructionMessage
          subText='Diversity data will be updated and available shortly.'
          containerClasses='h-[435px]'
        />
      )
    }
    switch (view) {
      default:
        return <Diversity clientList={clientList} diversity={diversity} />
    }
  }
  return (
    <div className='center-staged'>
      <div className='w-full x-padding flex flex-col md:flex-row justify-between'>
        <motion.div
          initial={LEFT_SIDE_DIAGONAL_ANIM.init}
          viewport={ANIM_VIEWPORT}
          whileInView={LEFT_SIDE_DIAGONAL_ANIM.inView}
          transition={LEFT_SIDE_DIAGONAL_ANIM.transition}
          className='order-2 md:oder-1 md:flex-1'
        >
          {renderView()}
        </motion.div>
        <motion.div
          initial={RIGHT_SIDE_DIAGONAL_ANIM.init}
          viewport={ANIM_VIEWPORT}
          whileInView={RIGHT_SIDE_DIAGONAL_ANIM.inView}
          transition={LEFT_SIDE_DIAGONAL_ANIM.transition}
          className='space-y-4 w-full md:w-36 order-1 md:order-2 mb-8 lg:mb-0 relative'
        >
          <motion.div
            initial={UP_ANIM.init}
            viewport={ANIM_VIEWPORT}
            whileInView={UP_ANIM.inView}
            transition={UP_ANIM.transition}
            className='md:w-full border-b pb-4 md:border-none md:pb-0 md:border-dark300'
          >
            <Typography isBold>Diversity Charts</Typography>
          </motion.div>
          <motion.div
            initial={UP_ANIM.init}
            viewport={ANIM_VIEWPORT}
            whileInView={UP_ANIM.inView}
            transition={{ ...UP_ANIM.transition, delay: 0.2 }}
            className='flex space-x-4 md:flex-col md:space-x-0 overflow-x-auto scrollbar-hide'
          >
            <TabSelect text='Validator' isActive />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default DiversityTable
