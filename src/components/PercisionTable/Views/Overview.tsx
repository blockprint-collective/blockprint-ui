import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getTrueNegativeRate from '@/utils/getTrueNegativeRate';
import getPositivePredictiveValue from '@/utils/getPositivePredictiveValue';
import {PrecisionResults} from '@/types';
import {FC} from 'react';
import TableDataCell from '@/components/PercisionTable/TableDataCell';
import getPercentageColor from '@/utils/getPercentageColor';
import Typography from '@/components/Typography/Typography';
import Table from '@/components/PercisionTable/Table';

export interface OverviewTableProps {
    data: PrecisionResults
}

const Overview:FC<OverviewTableProps> = ({data}) => {
const {clients} = data;
const clientNames = Object.keys(clients)
  return (
      <Table className="w-1/2">
          <thead>
          <tr className="border-b border-dark200">
              <th></th>
              <th className="p-4">
                  <Typography isBold type="text-tiny">TPR</Typography>
              </th>
              <th className="p-4">
                  <Typography isBold type="text-tiny">TNR</Typography>
              </th>
              <th className="p-4">
                  <Typography isBold type="text-tiny">PPV</Typography>
              </th>
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
                      <td className="px-4 py-2">
                          <Typography isBold type="text-tiny">{name}</Typography>
                      </td>
                      <TableDataCell animDelay={0} data={tpr} cellColor={getPercentageColor(tpr)} />
                      <TableDataCell animDelay={(2 * 15) * index} data={tnr} cellColor={getPercentageColor(tnr)}/>
                      <TableDataCell animDelay={(3 * 25) * index} data={ppv} cellColor={getPercentageColor(ppv)}/>
                  </tr>
              )
          })}
          </tbody>
      </Table>
  )
}

export default Overview