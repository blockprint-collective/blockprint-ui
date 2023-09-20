import {DiversityResults} from '@/types';
import {FC} from 'react';
import Table from '@/components/PercisionTable/Table';
import PercentageCell from '@/components/PercisionTable/PercentageCell';
import formatDiversity from '@/utils/formatDiversity';

export interface DiversityProps {
    diversity: DiversityResults
    clientList: string[]
}

const Diversity:FC<DiversityProps> = ({diversity, clientList}) => {
    const clientPercentages = formatDiversity(diversity, clientList)
    const legend = {
        error: 'Danger 50 - 100%',
        fair: 'Caution 33 - 50%',
        good: 'Great 0 - 33%'
    }

  return (
      <Table className="max-w-lg1.5 lg:max-w-xl xl:max-w-table" tableClasses="py-3 border-separate" legend={legend}>
          <tbody>
            {clientPercentages.map((data, index) => (
                <PercentageCell animDelay={index + 1} key={index} data={data}/>
            ))}
          </tbody>
      </Table>
  )
}

export default Diversity