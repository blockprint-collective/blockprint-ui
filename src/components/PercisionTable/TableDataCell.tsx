import getPercentageColor from '@/utils/getPercentageColor';
import formatPercentage from '@/utils/formatPercentage';
import {FC} from 'react';

export interface TableDataCellProps {
    data: number | string
    animDelay?: number
}

const TableDataCell:FC<TableDataCellProps> = ({data, animDelay = 0}) => {
  const {bg, text} = getPercentageColor(data);

  return (
      <td className="relative border-l border-gray-100">
          <div style={{animationDelay: `${animDelay}ms`}} className={`h-full w-full absolute t-0 opacity-0 l-0 pointer-event-none animate-fade-in-opacity ${bg}`}/>
          <div className="p-2 text-center">
              <p className={`animate-fade-in-color ${text}`}>
                  {formatPercentage(data as number)}
              </p>
          </div>
      </td>
  )
}

export default TableDataCell