import {PrecisionResults} from '@/types';
import {FC} from 'react';
import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getComparativeTprRate from '@/utils/getComparativeTprRate';
import TableDataCell from '@/components/PercisionTable/TableDataCell';
import getPercentageColor from '@/utils/getPercentageColor';
import getComparativeColor from '@/utils/getComparativeColor';
import Typography from '@/components/Typography/Typography';
import Table from '@/components/PercisionTable/Table';

export interface TruePositiveTableProps {
    data: PrecisionResults
}

const TruePositive:FC<TruePositiveTableProps> = ({data}) => {
    const {clients} = data;
    const clientNames = Object.keys(clients)


  return (
      <Table>
          <thead>
          <tr className="border-b border-dark200">
              <th></th>
              {clientNames.map((name, index) => (
                  <th key={index} className="p-4 font-normal">
                      <Typography isBold type="text-tiny">{name}</Typography>
                  </th>
              ))}
          </tr>
          </thead>
          <tbody>
          {clientNames.map((cName, index) => (
              <tr key={index}>
                  <td className="p-4">
                      <Typography isBold type="text-tiny">{cName}</Typography>
                  </td>
                  {clientNames.map((rName, cIndex) => {
                      const data = clients[cName]
                      const tprData = getTruePositiveRate(data);
                      const isTPR = cName === rName;
                      const comparativeTpr = getComparativeTprRate(data, rName);
                      const result = isTPR ? tprData : comparativeTpr

                      return (
                          <TableDataCell key={cIndex} animDelay={(cIndex * 25) * index}
                                         isDarkText={isTPR}
                                         cellColor={isTPR ? getPercentageColor(tprData) : getComparativeColor(comparativeTpr) }
                                         data={result}/>
                      )
                  })}
              </tr>
          ))}
          </tbody>
      </Table>
  )
}

export default TruePositive;