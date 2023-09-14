import formatPercentage from '@/utils/formatPercentage';
import {FC} from 'react';

export interface TableDataCellProps {
    data: number | string
    animDelay?: number
    cellColor: string
    animation?: string | undefined
    isDarkText?: boolean
}

const TableDataCell:FC<TableDataCellProps> = ({data, animDelay, cellColor , animation = 'animate-fade-in-opacity'}) => {
  return (
      <td className="relative">
          <div className="py-4 px-11 text-center">
              <p style={{animationDelay: `${animDelay}ms`}} className={`animate-fade-in-color opacity-0 ${animation} ${cellColor}`}>
                  {formatPercentage(data as number)}
              </p>
          </div>
      </td>
  )
}

export default TableDataCell