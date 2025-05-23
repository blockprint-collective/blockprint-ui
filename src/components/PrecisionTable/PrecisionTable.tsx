'use client'

import { FC, Ref, forwardRef, useState } from 'react'
import { PrecisionResults, PrecisionView } from '@/types'
import Overview from '@/components/PrecisionTable/Views/Overview'
import TabSelect from '@/components/PrecisionTable/TabSelect'
import TruePositive from '@/components/PrecisionTable/Views/TruePositive'
import Typography from '@/components/Typography/Typography'
import PositivePredictive from '@/components/PrecisionTable/Views/PositivePredictive'
import { motion } from 'framer-motion'
import { ANIM_VIEWPORT, UP_ANIM, SIDE_ANIM, LEFT_SIDE_DIAGONAL_ANIM } from '@/constants'
import { useRecoilState } from 'recoil'
import { precisionView } from '@/recoil/atoms'
import UnderConstructionMessage from '@/components/UnderConstructionMessage/UnderConstructionMessage'

export interface PrecisionTableProps {
  confusion: PrecisionResults
  ref?: Ref<HTMLDivElement>
  isUnderConstruction: boolean
}

// eslint-disable-next-line react/display-name
const PrecisionTable: FC<PrecisionTableProps> = forwardRef<HTMLDivElement, PrecisionTableProps>(
  ({ confusion, isUnderConstruction }, ref) => {
    const [isAnimate, toggleAnimation] = useState(false)
    const triggerNextAnim = () => toggleAnimation(true)
    const [view, setView] = useRecoilState(precisionView)

    const setViewOverview = () => setView(PrecisionView.OVERVIEW)
    const setViewTpr = () => setView(PrecisionView.TPR_DETAIL)
    const setViewPpv = () => setView(PrecisionView.PPV_DETAIL)

    const renderView = () => {
      if (isUnderConstruction) {
        return (
          <UnderConstructionMessage
            subText='Precision data will be updated and available shortly.'
            containerClasses='h-[250px]'
          />
        )
      }
      switch (view) {
        case PrecisionView.TPR_DETAIL:
          return <TruePositive isAnimate={isAnimate} data={confusion} />
        case PrecisionView.PPV_DETAIL:
          return <PositivePredictive isAnimate={isAnimate} data={confusion} />
        default:
          return <Overview isAnimate={isAnimate} data={confusion} />
      }
    }

    return (
      <div ref={ref} className='center-staged'>
        <div className='w-full x-padding'>
          <motion.div
            initial={LEFT_SIDE_DIAGONAL_ANIM.init}
            viewport={ANIM_VIEWPORT}
            whileInView={LEFT_SIDE_DIAGONAL_ANIM.inView}
            transition={LEFT_SIDE_DIAGONAL_ANIM.transition}
            onAnimationComplete={triggerNextAnim}
            className='pb-8 pt-16 lg:pt-32 space-y-4 lg:space-y-2'
          >
            <motion.div
              initial={UP_ANIM.init}
              viewport={ANIM_VIEWPORT}
              whileInView={UP_ANIM.inView}
              transition={{ ...UP_ANIM.transition }}
            >
              <Typography
                type='text-base3'
                className='lg:text-base4 tracking-subTitle leading-6 lg:leading-10'
              >
                Where does this data come from?
              </Typography>
            </motion.div>
            <motion.div
              initial={UP_ANIM.init}
              viewport={ANIM_VIEWPORT}
              whileInView={UP_ANIM.inView}
              transition={{ ...UP_ANIM.transition, delay: 0.2 }}
            >
              <Typography className='max-w-2xl'>
                Blockprint classifies blocks using a machine-learning model which sometimes makes
                mistakes. The statistics shown below are measurements of blockprint’s accuracy using
                a cluster of consensus clients that produce blocks every slot.
              </Typography>
            </motion.div>
            <motion.div
              className='flex space-x-2'
              initial={UP_ANIM.init}
              viewport={ANIM_VIEWPORT}
              whileInView={UP_ANIM.inView}
              transition={{ ...UP_ANIM.transition, delay: 0.4 }}
            >
              <Typography family='font-archivo' className='tracking-tighter' color='text-purple'>
                Dive into precision tables
              </Typography>
              <i className='bi-arrow-down text-purple' />
            </motion.div>
          </motion.div>
          <div className='w-full flex flex-col md:flex-row justify-between'>
            <motion.div
              className='order-2 md:oder-1 md:flex-1'
              initial={LEFT_SIDE_DIAGONAL_ANIM.init}
              viewport={ANIM_VIEWPORT}
              whileInView={LEFT_SIDE_DIAGONAL_ANIM.inView}
              transition={LEFT_SIDE_DIAGONAL_ANIM.transition}
            >
              {renderView()}
            </motion.div>
            <motion.div
              initial={SIDE_ANIM.init}
              viewport={ANIM_VIEWPORT}
              whileInView={SIDE_ANIM.inView}
              transition={{ ...SIDE_ANIM.transition, delay: 0.2 }}
              className='space-y-4 w-full md:w-36 order-1 md:order-2 mb-8 lg:mb-0 relative'
            >
              <motion.div
                className='md:w-full border-b pb-4 md:border-none md:pb-0 md:border-dark300'
                initial={UP_ANIM.init}
                viewport={ANIM_VIEWPORT}
                whileInView={UP_ANIM.inView}
                transition={{ ...UP_ANIM.transition, delay: 0.5 }}
              >
                <Typography isBold>Precision Charts</Typography>
              </motion.div>
              <motion.div
                className='flex space-x-4 md:flex-col md:space-x-0 overflow-x-scroll scrollbar-hide lg:hidden'
                initial={UP_ANIM.init}
                viewport={ANIM_VIEWPORT}
                whileInView={UP_ANIM.inView}
                transition={{ ...UP_ANIM.transition, delay: 0.7 }}
              >
                <TabSelect
                  text='Overview'
                  onClick={setViewOverview}
                  isActive={view === PrecisionView.OVERVIEW}
                />
                <TabSelect
                  text='TPR Precision'
                  onClick={setViewTpr}
                  isActive={view === PrecisionView.TPR_DETAIL}
                />
                <TabSelect
                  text='PPV Precision'
                  onClick={setViewPpv}
                  isActive={view === PrecisionView.PPV_DETAIL}
                />
              </motion.div>
              <motion.div
                className='hidden lg:flex space-x-4 md:flex-col md:space-x-0'
                initial={UP_ANIM.init}
                viewport={ANIM_VIEWPORT}
                whileInView={UP_ANIM.inView}
                transition={{ ...UP_ANIM.transition, delay: 0.7 }}
              >
                <TabSelect
                  initial={UP_ANIM.init}
                  viewport={ANIM_VIEWPORT}
                  whileInView={UP_ANIM.inView}
                  transition={{ ...UP_ANIM.transition, delay: 0.7 }}
                  text='Overview'
                  onClick={setViewOverview}
                  isActive={view === PrecisionView.OVERVIEW}
                />
                <TabSelect
                  initial={UP_ANIM.init}
                  viewport={ANIM_VIEWPORT}
                  whileInView={UP_ANIM.inView}
                  transition={{ ...UP_ANIM.transition, delay: 0.8 }}
                  text='TPR Precision'
                  onClick={setViewTpr}
                  isActive={view === PrecisionView.TPR_DETAIL}
                />
                <TabSelect
                  initial={UP_ANIM.init}
                  viewport={ANIM_VIEWPORT}
                  whileInView={UP_ANIM.inView}
                  transition={{ ...UP_ANIM.transition, delay: 0.9 }}
                  text='PPV Precision'
                  onClick={setViewPpv}
                  isActive={view === PrecisionView.PPV_DETAIL}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  },
)

export default PrecisionTable
