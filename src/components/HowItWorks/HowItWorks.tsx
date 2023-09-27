import Typography from '@/components/Typography/Typography';
import Explanation from '@/components/Explanation/Explanation';
import {PPV_EXPLAINED, TPR_EXPLAINED, OVERVIEW_EXPLAINED} from '@/constants';
import Section from '@/components/Section/Section';

const HowItWorks = () => {
  return (
      <Section>
          <div className="w-full x-padding py-8 lg:py-48 flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">
              <div className="max-w-lg pr-0 md:pr-12 xl:pr-0 xl:max-w-xl space-y-4">
                  <Typography type="text-base3" className="lg:text-base4 tracking-subTitle leading-6 lg:leading-10">
                      Blockprint is a tool for determining which consensus clients produced which blocks on the Ethereum mainnet.
                  </Typography>
                  <Typography className="leading-5 lg:leading-6 max-w-lg lg:text-base1" type="text-base" color="text-light80">
                      It uses machine learning to guess the consensus client for a block, based on the similarity of that block to others in its training data. E.g. when blockprint saw the block at slot 6505122, it determined that this block was most likely produced by Prysm.
                  </Typography>
              </div>
              <div className="flex-1 max-w-xl space-y-4">
                  <Typography isBold type="text-base1">How does it work?</Typography>
                  <div className="space-y-4">
                      <Explanation title={OVERVIEW_EXPLAINED.title} texts={OVERVIEW_EXPLAINED.texts}/>
                      <Explanation title={TPR_EXPLAINED.title} texts={TPR_EXPLAINED.texts}/>
                      <Explanation title={PPV_EXPLAINED.title} texts={PPV_EXPLAINED.texts}/>
                  </div>
              </div>
          </div>
      </Section>
  )
}

export default HowItWorks