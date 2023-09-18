import Typography from '@/components/Typography/Typography';
import Image from 'next/image';
import SigP from '../../assets/image/sigp.svg'
import {FC} from 'react';
import addClassString from '@/utils/addClassString';

export interface SigmaPrimeProps {
    className?: string
}

const SigmaPrime:FC<SigmaPrimeProps> = ({className}) => {
  const classes = addClassString('flex space-x-2 w-56', [className])
  return (
      <a target="_blank" href="https://sigmaprime.io/" rel="noreferrer">
          <div className={classes}>
              <Image src={SigP}/>
              <Typography type="text-tiny">Developed & Maintained <br/> by <span className="font-bold">Sigma Prime</span></Typography>
          </div>
      </a>
  )
}

export default SigmaPrime