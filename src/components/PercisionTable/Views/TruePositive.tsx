import {PrecisionResults} from '@/types';
import {FC} from 'react';
import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getComparativeTprRate from '@/utils/getComparativeTprRate';
import TableDataCell from '@/components/PercisionTable/TableDataCell';
import getPercentageColor from '@/utils/getPercentageColor';
import getComparativeColor from '@/utils/getComparativeColor';

export interface TruePositiveTableProps {
    data: PrecisionResults
}

const TruePositive:FC<TruePositiveTableProps> = ({data}) => {
    const {clients} = data;
    const clientNames = Object.keys(clients)


  return (
      <table border="1" className="w-full table-auto">
          <thead>
          <tr>
              <th></th>
              {clientNames.map((name, index) => (
                  <th key={index} className="p-2 border-l font-normal">{name}</th>
              ))}
          </tr>
          </thead>
          <tbody>
          {clientNames.map((cName, index) => (
              <tr className="border-t border-gray-100" key={index}>
                  <td className="px-4 py-2 font-bold">{cName}</td>
                  {clientNames.map((rName, cIndex) => {
                      const data = clients[cName]
                      const tprData = getTruePositiveRate(data);
                      const isTPR = cName === rName;
                      const comparativeTpr = getComparativeTprRate(data, rName);
                      const result = isTPR ? tprData : comparativeTpr

                      return (
                          <TableDataCell key={cIndex} animDelay={(cIndex * 25) * index}
                                         animation={isTPR ? 'animate-fade-in-opacity-dark' : undefined}
                                         isDarkText={isTPR}
                                 cellColor={isTPR ? getPercentageColor(tprData) : getComparativeColor(comparativeTpr) }
                                         data={result}/>
                      )
                  })}
              </tr>
          ))}
          </tbody>
      </table>
  )
}

export default TruePositive;