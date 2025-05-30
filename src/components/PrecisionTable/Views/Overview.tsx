import getTruePositiveRate from '@/utils/getTruePositiveRate'
import getTrueNegativeRate from '@/utils/getTrueNegativeRate'
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue'
import { PrecisionResults } from '@/types'
import { FC } from 'react'
import TableDataCell, { TableDataCellProps } from '@/components/PrecisionTable/TableDataCell'
import getPercentageColor from '@/utils/getPercentageColor'
import Typography from '@/components/Typography/Typography'
import Table from '@/components/PrecisionTable/Table'
import TableHeaderCell from '@/components/PrecisionTable/TableHeaderCell'

export interface OverviewTableProps extends Pick<TableDataCellProps, 'isAnimate'> {
  data: PrecisionResults
}

const Overview: FC<OverviewTableProps> = ({ data, isAnimate }) => {
  const { clients } = data
  const clientNames = Object.keys(clients)
  return (
    <Table className='max-w-md lg:max-w-xl'>
      <thead>
        <tr className='border-b border-dark200'>
          <th></th>
          <TableHeaderCell
            text='TPR'
            info='True positive rate, percentage of blocks produced by the client which are correctly classified by blockprint'
          />
          <TableHeaderCell
            text='TNR'
            info='True negative rate, percentage of blocks NOT produced by the client which are correctly classified by blockprint'
          />
          <TableHeaderCell
            text='PPV'
            info='Positive predictive value, percentage of blocks classified as this client by blockprint which were actually produced by this client'
          />
        </tr>
      </thead>
      <tbody>
        {clientNames.map((name, index) => {
          const data = clients[name]
          const tpr = getTruePositiveRate(data)
          const tnr = getTrueNegativeRate(data)
          const ppv = getPositivePredictiveValue(data)

          return (
            <tr key={index}>
              <td className='px-4 py-2'>
                <Typography isBold type='text-tiny'>
                  {name}
                </Typography>
              </td>
              <TableDataCell
                isAnimate={isAnimate}
                animDelay={0}
                data={tpr}
                cellColor={getPercentageColor(tpr)}
              />
              <TableDataCell
                isAnimate={isAnimate}
                animDelay={2 * 15 * index}
                data={tnr}
                cellColor={getPercentageColor(tnr)}
              />
              <TableDataCell
                isAnimate={isAnimate}
                animDelay={3 * 25 * index}
                data={ppv}
                cellColor={getPercentageColor(ppv)}
              />
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Overview
