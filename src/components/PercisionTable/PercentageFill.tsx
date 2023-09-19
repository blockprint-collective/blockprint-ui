import {FC} from 'react';
import addClassString from '@/utils/addClassString';
import getDiversityColor from '@/utils/getDiversityColor';

export interface PercentageFillProps {
    percentage: number
}

const PercentageFill:FC<PercentageFillProps> = ({percentage}) => {
   const translation = 100 - percentage
    const classes = addClassString('h-full w-full left-0 absolute top-0 rounded-full transition-transform ease-in-out duration-700', [
        getDiversityColor(percentage)
    ])
  return (
      <div className="flex-1 h-8 rounded-full bg-dark300 overflow-hidden relative">
          <div style={{transform: `translateX(-${translation}%)`}} className={classes}>
              <div className="absolute right-0 top-0 w-8 opacity-20 h-full bg-dark rounded-full" />
          </div>
      </div>
  )
}

export default PercentageFill;