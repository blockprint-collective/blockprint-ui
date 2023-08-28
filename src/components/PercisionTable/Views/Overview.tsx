import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getTrueNegativeRate from '@/utils/getTrueNegativeRate';
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue';
import {PrecisionResults} from '@/types';
import {FC} from 'react';
import TableDataCell from '@/components/PercisionTable/TableDataCell';

export interface OverviewTableProps {
    data: PrecisionResults
}

const Overview:FC<OverviewTableProps> = ({data}) => {
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
                      <TableDataCell animDelay={0} data={tpr} />
                      <TableDataCell animDelay={(2 * 15) * index} data={tnr} />
                      <TableDataCell animDelay={(3 * 25) * index} data={ppv} />
                  </tr>
              )
          })}
          </tbody>
      </table>
  )
}

export default Overview