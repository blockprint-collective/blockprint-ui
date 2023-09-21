import {PrecisionResults} from '@/types';
import {FC} from 'react';
import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getComparativeTprRate from '@/utils/getComparativeTprRate';
import TableDataCell from '@/components/PercisionTable/TableDataCell';
import getPercentageColor from '@/utils/getPercentageColor';
import getComparativeColor from '@/utils/getComparativeColor';
import Typography from '@/components/Typography/Typography';
import Table from '@/components/PercisionTable/Table';
import TableHeaderCell from '@/components/PercisionTable/TableHeaderCell';
import {TPR_EXPLAINED} from '@/constants';
import InfoModal from '@/components/PercisionTable/InfoModal';

export interface TruePositiveTableProps {
    data: PrecisionResults
}

const TruePositive:FC<TruePositiveTableProps> = ({data}) => {
    const {clients} = data;
    const clientNames = Object.keys(clients)


  return (
      <Table className="max-w-lg1.5 lg:max-w-xl xl:max-w-table">
          <thead>
          <tr className="border-b border-dark200">
              <th>
                  <InfoModal title={TPR_EXPLAINED.title} texts={TPR_EXPLAINED.texts}/>
              </th>
              {clientNames.map((name, index) => (
                  <TableHeaderCell key={index} text={name}/>
              ))}
          </tr>
          </thead>
          <tbody>
          {clientNames.map((rName, index) => (
              <tr key={index}>
                  <td className="p-2 lg:p-4">
                      <Typography isBold type="text-tiny">{rName}</Typography>
                  </td>
                  {clientNames.map((cName, cIndex) => {
                      const data = clients[rName];
                      const tprData = getTruePositiveRate(data);
                      const isDiag = cName === rName;
                      const comparativeTpr = getComparativeTprRate(data, cName);
                      const result = isDiag ? tprData : comparativeTpr

                      return (
                          <TableDataCell key={cIndex} animDelay={(cIndex * 25) * index}
                                         isDarkText={isDiag}
                                         cellColor={isDiag ? getPercentageColor(tprData) : getComparativeColor(comparativeTpr) }
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
