import {FC, ReactNode} from 'react';
import Typography from '@/components/Typography/Typography';
import addClassString from '@/utils/addClassString';
import {TableLegend} from '@/types';
import LegendItem from '@/components/PercisionTable/LegendItem';

const defaultLegend = {
    error: 'Danger',
    fair: 'Caution',
    good: 'Great'
}

export interface TableProps {
    children: ReactNode | ReactNode[]
    tableClasses?: string
    className?: string
    legend?: TableLegend
}

const Table:FC<TableProps> = ({children, className, tableClasses, legend = defaultLegend}) => {
    const classes = addClassString('border bg-dark100 border-dark200 shadow rounded-lg h-fit overflow-scroll', [className])
    const tableClass = addClassString('w-full table-auto border-b border-dark200', [tableClasses])

  return (
      <div className={classes}>
          <table border="1" className={tableClass}>
              {children}
          </table>
          <div className="w-full flex justify-between p-3">
              <Typography className="hidden lg:block" type="text-tiny" color="text-light70">
                  Updated daily
              </Typography>
              {legend && (
                  <div className="flex space-x-4 overflow-scroll">
                      <LegendItem color="error" text={legend.error}/>
                      <LegendItem color="fair" text={legend.fair}/>
                      <LegendItem color="good" text={legend.good}/>
                  </div>
              )}
          </div>
      </div>
  )
}

export default Table