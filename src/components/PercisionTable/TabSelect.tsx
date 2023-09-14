import {FC} from 'react';
import Typography from '@/components/Typography/Typography';

export interface TabSelect {
    onClick: () => void
    isActive: boolean
    text: string
}

const TabSelect:FC<TabSelect> = ({onClick, isActive, text}) => {
  return (
      <div onClick={onClick} className="flex-1 flex items-center space-x-2 mb-1 text-center cursor-pointer">
          <Typography color={!isActive ? 'text-light50' : 'text-light'}>
              {text}
          </Typography>
          {isActive && <hr className="h-.5 w-4 bg-light"/>}
      </div>
  )
}

export default TabSelect;