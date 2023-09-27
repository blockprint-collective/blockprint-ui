import {FC, ReactNode} from 'react';
import addClassString from '@/utils/addClassString';

export interface SectionProps {
    children: ReactNode
    className?: string
}

const Section:FC<SectionProps> = ({children, className}) => {
  const classes = addClassString('w-full flex justify-center', [className])
  return (
      <div className={classes}>
          {children}
      </div>
  )
}

export default Section