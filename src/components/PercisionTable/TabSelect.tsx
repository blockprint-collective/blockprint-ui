import {FC, ReactNode} from 'react';
import Typography from '@/components/Typography/Typography';

export interface TabSelect {
    onClick: () => void
    isActive: boolean
    children: ReactNode | ReactNode[]
}

const TabSelect:FC<TabSelect> = ({onClick, isActive, children}) => {
  return (
      <div onClick={onClick} className="flex-1 flex items-center space-x-2 mb-1 text-center cursor-pointer">
          <Typography color={!isActive ? 'text-light50' : 'text-light'}>
              {children}
          </Typography>
          {isActive && <hr className="h-.5 w-4 bg-light"/>}
      </div>
  )
}

export default TabSelect;