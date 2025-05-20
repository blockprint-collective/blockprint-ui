import Table from '@/components/PrecisionTable/Table'
import TableHeaderCell from '@/components/PrecisionTable/TableHeaderCell'
import Typography from '@/components/Typography/Typography'
import TableDataCell, { TableDataCellProps } from '@/components/PrecisionTable/TableDataCell'
import getPercentageColor from '@/utils/getPercentageColor'
import getComparativeColor from '@/utils/getComparativeColor'
import { PrecisionResults } from '@/types'
import { FC } from 'react'
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue'
import getComparativePpvRate from '@/utils/getComparativePpvRate'
import { PPV_EXPLAINED } from '@/constants'
import InfoModal from '@/components/PrecisionTable/InfoModal'

export interface PositivePredictiveProps extends Pick<TableDataCellProps, 'isAnimate'> {
  data: PrecisionResults
}

const PositivePredictive: FC<PositivePredictiveProps> = ({ data, isAnimate }) => {
  const { clients } = data
  const clientNames = Object.keys(clients)

  return (
    <Table className='max-w-lg1.5 lg:max-w-xl xl:max-w-table'>
      <thead>
        <tr className='border-b border-dark200'>
          <th>
            <InfoModal title={PPV_EXPLAINED.title} texts={PPV_EXPLAINED.texts} />
          </th>
          {clientNames.map((name, index) => (
            <TableHeaderCell key={index} text={name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {clientNames.map((rName, index) => (
          <tr key={index}>
            <td className='p-2 lg:p-4'>
              <Typography isBold type='text-tiny'>
                {rName}
              </Typography>
            </td>
            {clientNames.map((cName, cIndex) => {
              const rowData = clients[rName]
              const colData = clients[cName]
              const ppvData = getPositivePredictiveValue(rowData)
              const isDiag = cName === rName
              const comparativePpv = getComparativePpvRate(rowData, colData, rName)
              const result = isDiag ? ppvData : comparativePpv

              return (
                <TableDataCell
                  isAnimate={isAnimate}
                  key={cIndex}
                  animDelay={cIndex * 25 * index}
                  isDarkText={isDiag}
                  cellColor={
                    isDiag ? getPercentageColor(ppvData) : getComparativeColor(comparativePpv)
                  }
                  data={result}
                />
              )
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default PositivePredictive
