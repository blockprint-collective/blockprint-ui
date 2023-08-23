import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getTrueNegativeRate from '@/utils/getTrueNegativeRate';
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue';
import getPercentageColor from '@/utils/getPercentageColor';
import formatPercentage from '@/utils/formatPercentage';
import {PrecisionResults} from '@/types';
import {FC} from 'react';

export interface OverviewTablePros {
    data: PrecisionResults
}

const Overview:FC<OverviewTablePros> = ({data}) => {
const {clients} = data;
const clientNames = Object.keys(clients)
  return (
      <table border="1" className="w-full table-auto">
          <thead>
          <tr>
              <th></th>
              <th className="p-2 border-l">TPR</th>
              <th className="p-2 border-l">TNR</th>
              <th className="p-2 border-l">PPV</th>
          </tr>
          </thead>
          <tbody>
          {clientNames.map((name, index) => {
              const data = clients[name]
              const tpr = getTruePositiveRate(data)
              const tnr = getTrueNegativeRate(data)
              const ppv = getPositivePredictiveValue(data)

              return (
                  <tr className="border-t border-gray-100" key={index}>
                      <td className="px-4 py-2">{name}</td>
                      <td className={`text-center p-2 bg-opacity-40 border-l border-gray-100 ${getPercentageColor(tpr)}`}>{formatPercentage(tpr)}</td>
                      <td className={`text-center p-2 bg-opacity-40 border-l border-gray-100 ${getPercentageColor(tnr)}`}>{formatPercentage(tnr)}</td>
                      <td className={`text-center p-2 bg-opacity-40 border-l border-gray-100 ${getPercentageColor(ppv)}`}>{formatPercentage(ppv)}</td>
                  </tr>
              )
          })}
          </tbody>
      </table>
  )
}

export default Overview