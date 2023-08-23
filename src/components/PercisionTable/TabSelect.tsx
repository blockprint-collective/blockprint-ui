import {FC, ReactNode} from 'react';

export interface TabSelect {
    onClick: () => void
    isActive: boolean
    children: ReactNode | ReactNode[]
}

const TabSelect:FC<TabSelect> = ({onClick, isActive, children}) => {
  return (
      <div onClick={onClick} className={`flex-1 text-center p-4 ${isActive ? 'bg-white' : 'bg-slate-100 cursor-pointer'}`}>
          {children}
      </div>
  )
}

export default TabSelect;