import formatPercentage from '@/utils/formatPercentage';
import {FC} from 'react';
import {CellColor} from '@/types';

export interface TableDataCellProps {
    data: number | string
    animDelay?: number
    cellColor: CellColor
    animation?: string | undefined
    isDarkText?: boolean
}

const TableDataCell:FC<TableDataCellProps> = ({data, animDelay, isDarkText, cellColor , animation = 'animate-fade-in-opacity'}) => {
  const {bg, text, darkText} = cellColor;

  return (
      <td className="relative border-l border-gray-100">
          <div style={{animationDelay: `${animDelay}ms`}} className={`h-full w-full absolute t-0 opacity-0 l-0 pointer-event-none ${animation} ${bg}`}/>
          <div className="p-2 text-center">
              <p className={`animate-fade-in-color ${isDarkText ? darkText : text}`}>
                  {formatPercentage(data as number)}
              </p>
          </div>
      </td>
  )
}

export default TableDataCell