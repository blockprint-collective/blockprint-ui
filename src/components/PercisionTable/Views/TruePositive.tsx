import {PrecisionResults} from '@/types';
import {FC} from 'react';
import getTruePositiveRate from '@/utils/getTruePositiveRate';
import getComparativeTprRate from '@/utils/getComparativeTprRate';
import TableDataCell from '@/components/PercisionTable/TableDataCell';

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
                  <th key={index} className="p-2 border-l">{name}</th>
              ))}
          </tr>
          </thead>
          <tbody>
          {clientNames.map((rName, index) => (
              <tr className="border-t border-gray-100" key={index}>
                  <td className="px-4 py-2">{rName}</td>
                  {clientNames.map((cName, cIndex) => {
                      const data = clients[cName]
                      const result = cName === rName ? getTruePositiveRate(data) : getComparativeTprRate(data, rName)

                      return (
                          <TableDataCell key={cIndex} data={result}/>
                      )
                  })}
              </tr>
          ))}
          </tbody>
      </table>
  )
}

export default TruePositive;