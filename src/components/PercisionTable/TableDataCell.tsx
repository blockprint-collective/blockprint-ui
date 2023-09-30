import formatPercentage from '@/utils/formatPercentage';
import {FC} from 'react';
import addClassString from '@/utils/addClassString';

export interface TableDataCellProps {
    data: number | string
    animDelay?: number
    cellColor: string
    isAnimate?: boolean
    animation?: string | undefined
    isDarkText?: boolean
}

const TableDataCell:FC<TableDataCellProps> = ({data, animDelay, cellColor , isAnimate, animation = 'animate-fade-in-opacity'}) => {
    const classes = addClassString('animate-fade-in-color opacity-0 font-archivo leading-6', [isAnimate ? animation : undefined, cellColor])

  return (
      <td className="relative">
          <div className="py-1 xl:py-4 px-1 xl:px-8 text-center">
              <p style={{animationDelay: `${animDelay}ms`}} className={classes}>
                  {formatPercentage(data as number)}
              </p>
          </div>
      </td>
  )
}

export default TableDataCell