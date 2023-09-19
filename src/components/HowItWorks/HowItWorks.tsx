import Typography from '@/components/Typography/Typography';
import OverviewExplained from '@/components/Explainations/OverviewExplained';
import TprExplained from '@/components/Explainations/TprExplained';
import PpvExplained from '@/components/Explainations/PpvExplained';

const HowItWorks = () => {
  return (
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
                  <OverviewExplained/>
                  <TprExplained/>
                  <PpvExplained/>
              </div>
          </div>
      </div>
  )
}

export default HowItWorks