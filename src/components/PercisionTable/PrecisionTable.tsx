import { FC } from 'react'
import { PrecisionResults } from '@/types'
import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getTrueNegativeRate from '@/utils/getTrueNegativeRate';
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue';
import getPercentageColor from '@/utils/getPercentageColor';
import formatPercentage from '@/utils/formatPercentage';

export interface PrecisionTableProps {
  data: PrecisionResults
}

const PrecisionTable: FC<PrecisionTableProps> = ({ data }) => {
    const {clients} = data;
    const clientNames = Object.keys(clients)

  return (
      <table border="1" className="w-1/2 table-auto w-full">
          <thead>
          <tr>
              <th></th>
              <th>TPR</th>
              <th>TNR</th>
              <th>PPV</th>
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
                      <td>{name}</td>
                      <td className={`text-center p-2 bg-opacity-40 ${getPercentageColor(tpr)}`}>{formatPercentage(tpr)}</td>
                      <td className={`text-center p-2 bg-opacity-40 ${getPercentageColor(tnr)}`}>{formatPercentage(tnr)}</td>
                      <td className={`text-center p-2 bg-opacity-40 ${getPercentageColor(ppv)}`}>{formatPercentage(ppv)}</td>
                  </tr>
              )
          })}
          </tbody>
      </table>
  )
}

export default PrecisionTable
