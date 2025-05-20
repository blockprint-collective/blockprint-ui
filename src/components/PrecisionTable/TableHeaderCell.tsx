import Typography from '@/components/Typography/Typography'
import { FC } from 'react'
import addClassString from '@/utils/addClassString'
import Tooltip from '@/components/Tooltip/Tooltip'

export interface TableHeaderCellProps {
  text: string
  onClick?: () => void
  info?: string
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({ text, onClick, info }) => {
  const classes = addClassString('flex space-x-2 w-full justify-center', [info && 'cursor-pointer'])
  return (
    <th className='p-2 lg:p-4'>
      {info ? (
        <Tooltip maxWidth={250} text={info}>
          <div onClick={onClick} className={classes}>
            <Typography isBold type='text-tiny'>
              {text}
            </Typography>
            <i className='bi bi-question-circle text-tiny text-light80' />
          </div>
        </Tooltip>
      ) : (
        <div onClick={onClick} className={classes}>
          <Typography isBold type='text-tiny'>
            {text}
          </Typography>
        </div>
      )}
    </th>
  )
}

export default TableHeaderCell
