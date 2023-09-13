import {FC, ReactNode} from 'react';
import Typography from '@/components/Typography/Typography';
import addClassString from '@/utils/addClassString';

export interface TableProps {
    children: ReactNode | ReactNode[]
    className?: string
}

const Table:FC<TableProps> = ({children, className}) => {
    const classes = addClassString('border bg-dark100 border-dark200 shadow rounded-lg', [className])
  return (
      <div className={classes}>
          <table border="1" className="w-full table-auto">
              {children}
          </table>
          <div className="w-full p-3 border-t border-dark200">
              <Typography type="text-tiny" color="text-light70">
                  Updated daily
              </Typography>
          </div>
      </div>
  )
}

export default Table