import Typography from '@/components/Typography/Typography';
import {FC} from 'react';

export interface InfoSelectProps {
    text: string
    onClick?: () => void
}

const InfoSelect:FC<InfoSelectProps> = ({text, onClick}) => {
  return (
      <button onClick={onClick} className="w-full cursor-pointer hover:bg-dark300 bg-dark100 flex items-center justify-between rounded p-4">
          <Typography>{text}</Typography>
          <i className="bi-arrow-right text-light text-base1"/>
      </button>
  )
}

export default InfoSelect