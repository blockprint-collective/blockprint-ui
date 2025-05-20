'use client'

import Image from 'next/image'
import Typography from '@/components/Typography/Typography'
import EthF from '../../assets/image/eth-foundation.svg'
import ClientD from '../../assets/image/client-diversity.svg'
import SigP from '@/assets/image/sigp.svg'
import MigaLabs from '@/assets/image/miga-labs.svg'
import Rated from '@/assets/image/rated.svg'
import Section from '@/components/Section/Section'
import { motion } from 'framer-motion'

const ShoutOuts = () => {
  const anim = {
    viewport: { once: true, amount: 0.4 },
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  }

  const links = [
    { url: 'https://ethereum.org/', image: EthF, width: 'w-32' },
    { url: 'https://clientdiversity.org/', image: ClientD, width: 'w-36' },
    { url: 'https://sigmaprime.io/', image: SigP, width: 'w-10' },
    { url: 'https://migalabs.io/', image: MigaLabs, width: 'w-36' },
    {
      url: 'https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all',
      image: Rated,
      width: 'w-28',
    },
  ]

  return (
    <Section>
      <div className='w-full pt-12 lg:pt-24 x-padding space-y-8'>
        <motion.div
          initial={anim.initial}
          viewport={anim.viewport}
          whileInView={anim.whileInView}
          transition={{ duration: 0.4 }}
        >
          <Typography color='text-light80'>Used By</Typography>
        </motion.div>
        <motion.div
          initial={anim.initial}
          viewport={anim.viewport}
          whileInView={anim.whileInView}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='w-full flex overflow-scroll scrollbar-hide lg:hidden space-x-12 items-center'
        >
          {links.map(({ url, image, width }, index) => (
            <a key={index} href={url} target='_blank' rel='noreferrer'>
              <Image alt='Ethereum Foundation' className={`${width} max-w-none`} src={image} />
            </a>
          ))}
        </motion.div>
        <div className='w-full hidden lg:flex space-x-12 items-center'>
          {links.map(({ url, image, width }, index) => (
            <motion.a
              key={index}
              initial={anim.initial}
              viewport={anim.viewport}
              whileInView={anim.whileInView}
              transition={{ duration: 0.4, delay: 0.3 * index }}
              href={url}
              target='_blank'
              rel='noreferrer'
            >
              <Image alt='Ethereum Foundation' className={`${width} max-w-none`} src={image} />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ShoutOuts
