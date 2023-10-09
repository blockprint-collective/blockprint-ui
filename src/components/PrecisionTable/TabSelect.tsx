import {FC} from 'react';
import Typography from '@/components/Typography/Typography';
import {motion, MotionProps} from 'framer-motion';

export interface TabSelect extends MotionProps {
    onClick?: () => void
    isActive: boolean
    text: string
}

const TabSelect:FC<TabSelect> = ({onClick, isActive, text, ...props}) => {
  return (
      <motion.div {...props} onClick={onClick} className="flex-1 flex items-center space-x-2 mb-1 text-center cursor-pointer">
          <Typography className="whitespace-nowrap" color={!isActive ? 'text-light50' : 'text-light'}>
              {text}
          </Typography>
          {isActive && <hr className="h-.5 w-4 bg-light hidden lg:block"/>}
      </motion.div>
  )
}

export default TabSelect;