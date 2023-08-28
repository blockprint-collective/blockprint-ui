import getPercentageColor from '@/utils/getPercentageColor';
import formatPercentage from '@/utils/formatPercentage';
import {FC} from 'react';

export interface TableDataCellProps {
    data: number | string
}

const TableDataCell:FC<TableDataCellProps> = ({data}) => {
  return (
      <td className={`text-center p-2 bg-opacity-40 border-l border-gray-100 ${getPercentageColor(data)}`}>{formatPercentage(data as number)}</td>
  )
}

export default TableDataCell