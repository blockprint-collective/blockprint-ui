import Image from 'next/image';
import Typography from '@/components/Typography/Typography';
import EthF from '../../assets/image/eth-foundation.svg'
import ClientD from '../../assets/image/client-diversity.svg'
import SigP from '@/assets/image/sigp.svg';
import MigaLabs from '@/assets/image/miga-labs.svg';
import Rated from '@/assets/image/rated.svg';
import Section from '@/components/Section/Section';

const ShoutOuts = () => {
  return (
      <Section>
          <div className="w-full lg:pt-24 x-padding space-y-8">
              <Typography color="text-light80">Used By:</Typography>
              <div className="w-full overflow-scroll scrollbar-hide flex space-x-12 items-center">
                  <a href="https://ethereum.org/" target="_blank" rel="noreferrer">
                      <Image alt="Ethereum Foundation" className="w-32 max-w-none" src={EthF}/>
                  </a>
                  <a href="https://clientdiversity.org/" target="_blank" rel="noreferrer">
                      <Image alt="Client Diversity" className="w-36 max-w-none" src={ClientD}/>
                  </a>
                  <a href="https://sigmaprime.io/" target="_blank" rel="noreferrer">
                      <Image alt="Sigp" className="w-10 max-w-none" src={SigP}/>
                  </a>
                  <a href="https://migalabs.io/" target="_blank" rel="noreferrer">
                      <Image alt="Miga Labs" className="w-36 max-w-none" src={MigaLabs}/>
                  </a>
                  <a href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all" target="_blank" rel="noreferrer">
                      <Image alt="Rated" className="w-28 max-w-none" src={Rated}/>
                  </a>
              </div>
          </div>
      </Section>
  )
}

export default ShoutOuts;