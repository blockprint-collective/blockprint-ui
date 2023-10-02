'use client'

import Typography from '@/components/Typography/Typography';
import Explanation from '@/components/Explanation/Explanation';
import {
    PPV_EXPLAINED,
    TPR_EXPLAINED,
    OVERVIEW_EXPLAINED,
    SIDE_ANIM,
    ANIM_VIEWPORT,
    UP_ANIM,
    LEFT_SIDE_DIAGONAL_ANIM
} from '@/constants';
import Section from '@/components/Section/Section';
import {motion} from 'framer-motion';

const HowItWorks = () => {
  return (
      <Section>
          <div className="w-full x-padding py-8 overflow-hidden lg:py-48 flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
              <motion.div
                  initial={LEFT_SIDE_DIAGONAL_ANIM.init}
                  viewport={ANIM_VIEWPORT}
                  whileInView={LEFT_SIDE_DIAGONAL_ANIM.inView}
                  transition={{...LEFT_SIDE_DIAGONAL_ANIM.transition}}
                  className="max-w-lg pr-0 md:pr-12 xl:pr-0 xl:max-w-xl space-y-4">
                  <Typography type="text-base3" className="lg:text-base4 tracking-subTitle leading-6 lg:leading-10">
                      Blockprint is a tool for determining which consensus clients produced which blocks on the Ethereum mainnet.
                  </Typography>
                  <Typography className="leading-5 lg:leading-6 max-w-lg lg:text-base1" type="text-base" color="text-light80">
                      It uses machine learning to guess the consensus client for a block, based on the similarity of that block to others in its training data. E.g. when blockprint saw the block at slot 6505122, it determined that this block was most likely produced by Prysm.
                  </Typography>
              </motion.div>
              <motion.div
                  initial={SIDE_ANIM.init}
                  viewport={ANIM_VIEWPORT}
                  whileInView={SIDE_ANIM.inView}
                  transition={{...SIDE_ANIM.transition, delay: .2}}
                  className="flex-1 max-w-xl space-y-4">
                  <motion.div
                      initial={UP_ANIM.init}
                      viewport={ANIM_VIEWPORT}
                      whileInView={UP_ANIM.inView}
                      transition={{...UP_ANIM.transition, delay: .3}}
                  >
                      <Typography isBold type="text-base1">How does it work?</Typography>
                  </motion.div>
                  <div className="space-y-4">
                      <Explanation
                          initial={UP_ANIM.init}
                          viewport={ANIM_VIEWPORT}
                          whileInView={UP_ANIM.inView}
                          transition={{...UP_ANIM.transition, delay: .5}}
                          title={OVERVIEW_EXPLAINED.title}
                          texts={OVERVIEW_EXPLAINED.texts}/>
                      <Explanation
                          initial={UP_ANIM.init}
                          viewport={ANIM_VIEWPORT}
                          whileInView={UP_ANIM.inView}
                          transition={{...UP_ANIM.transition, delay: .5}}
                          title={TPR_EXPLAINED.title}
                          texts={TPR_EXPLAINED.texts}/>
                      <Explanation
                          initial={UP_ANIM.init}
                          viewport={ANIM_VIEWPORT}
                          whileInView={UP_ANIM.inView}
                          transition={{...UP_ANIM.transition, delay: .5}}
                          title={PPV_EXPLAINED.title}
                          texts={PPV_EXPLAINED.texts}/>
                  </div>
              </motion.div>
          </div>
      </Section>
  )
}

export default HowItWorks