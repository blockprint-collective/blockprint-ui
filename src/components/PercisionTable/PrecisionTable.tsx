import { FC } from 'react'
import { PrecisionResults } from '@/types'

export interface PrecisionTableProps {
  data: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ data }) => {
  return (
    <div>
      <p>{Object.keys(data.clients).join(', ')}</p>
    </div>
  )
}

export default PrecisionTable
