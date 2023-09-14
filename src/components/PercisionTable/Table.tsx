import {FC, ReactNode} from 'react';
import Typography from '@/components/Typography/Typography';
import addClassString from '@/utils/addClassString';
import {TableLegend} from '@/types';

const defaultLegend = {
    error: 'Danger',
    fair: 'Caution',
    good: 'Great'
}

export interface TableProps {
    children: ReactNode | ReactNode[]
    className?: string
    legend?: TableLegend
}

const Table:FC<TableProps> = ({children, className, legend = defaultLegend}) => {
    const classes = addClassString('border bg-dark100 border-dark200 shadow rounded-lg', [className])
  return (
      <div className={classes}>
          <table border="1" className="w-full table-auto">
              {children}
          </table>
          <div className="w-full flex justify-between p-3 border-t border-dark200">
              <Typography type="text-tiny" color="text-light70">
                  Updated daily
              </Typography>
              {legend && (
                  <div className="flex space-x-4">
                      <div className="flex space-x-2 items-center">
                          <div className="w-2 h-2 bg-error rounded-sm"/>
                          <Typography type="text-tiny" color="text-error">{legend.error}</Typography>
                      </div>
                      <div className="flex space-x-2 items-center">
                          <div className="w-2 h-2 bg-fair rounded-sm"/>
                          <Typography type="text-tiny" color="text-fair">{legend.fair}</Typography>
                      </div>
                      <div className="flex space-x-2 items-center">
                          <div className="w-2 h-2 bg-good rounded-sm"/>
                          <Typography type="text-tiny" color="text-good">{legend.good}</Typography>
                      </div>
                  </div>
              )}
          </div>
      </div>
  )
}

export default Table