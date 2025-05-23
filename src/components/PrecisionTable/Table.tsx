import { FC, ReactNode } from 'react'
import Typography from '@/components/Typography/Typography'
import addClassString from '@/utils/addClassString'
import { TableLegend } from '@/types'
import LegendItem from '@/components/PrecisionTable/LegendItem'

const defaultLegend = {
  error: 'Poor',
  fair: 'Fair',
  good: 'Good',
}

export interface TableProps {
  children: ReactNode | ReactNode[]
  tableClasses?: string
  className?: string
  legend?: TableLegend
}

const Table: FC<TableProps> = ({ children, className, tableClasses, legend = defaultLegend }) => {
  const classes = addClassString(
    'border bg-dark100 border-dark200 shadow rounded-lg h-fit overflow-scroll scrollbar-hide',
    [className],
  )
  const tableClass = addClassString('w-full table-auto border-b border-dark200', [tableClasses])

  return (
    <div className={classes}>
      <table border={1} className={tableClass}>
        {children}
      </table>
      <div className='w-full flex justify-between p-3'>
        <Typography className='hidden lg:block' type='text-tiny' color='text-light70'>
          Updated daily
        </Typography>
        {legend && (
          <div className='flex space-x-4 overflow-scroll scrollbar-hide'>
            <LegendItem color='good' text={legend.good} />
            <LegendItem color='fair' text={legend.fair} />
            <LegendItem color='error' text={legend.error} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Table
