import Typography, { TypographyColor } from '@/components/Typography/Typography'
import { FC } from 'react'

export interface LegendItemProps {
  text: string
  color: string
}

const LegendItem: FC<LegendItemProps> = ({ text, color }) => {
  return (
    <div className='flex space-x-2 items-center'>
      <div className={`w-2 h-2 bg-${color} rounded-sm`} />
      <Typography
        type='text-xs'
        className='md:text-tiny whitespace-nowrap'
        color={`text-${color}` as TypographyColor}
      >
        {text}
      </Typography>
    </div>
  )
}

export default LegendItem
