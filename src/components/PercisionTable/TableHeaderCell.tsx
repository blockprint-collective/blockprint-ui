import Typography from '@/components/Typography/Typography';
import {FC} from 'react';
import addClassString from '@/utils/addClassString';

export interface TableHeaderCellProps {
    text: string
    onClick?: () => void
    isInfo?: boolean
}

const TableHeaderCell:FC<TableHeaderCellProps> = ({text, onClick, isInfo}) => {
  const classes = addClassString('flex space-x-2 w-full justify-center', [isInfo && 'cursor-pointer'])
  return (
      <th className="p-4">
          <div onClick={onClick} className={classes}>
              <Typography isBold type="text-tiny">{text}</Typography>
              {isInfo && <i className="bi bi-question-circle text-tiny text-light80"/>}
          </div>
      </th>
  )
}

export default TableHeaderCell