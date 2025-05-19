import { DiversityResults } from '@/types'
import { FC } from 'react'
import Table from '@/components/PrecisionTable/Table'
import PercentageCell from '@/components/PrecisionTable/PercentageCell'
import formatDiversity from '@/utils/formatDiversity'
import Typography from '@/components/Typography/Typography'

export interface DiversityProps {
  diversity: DiversityResults
  clientList: string[]
}

const Diversity: FC<DiversityProps> = ({ diversity, clientList }) => {
  const clientPercentages = formatDiversity(diversity, clientList)
  const legend = {
    error: 'Danger 50 - 100%',
    fair: 'Caution 33 - 50%',
    good: 'Great 0 - 33%',
  }

  return (
    <Table
      className='max-w-lg1.5 lg:max-w-xl xl:max-w-table'
      tableClasses='py-3 border-separate'
      legend={legend}
    >
      <thead>
        <tr>
          <th className='w-full border-b border-dark200 pb-4 flex justify-end space-x-4 pr-4'>
            <Typography>Goal: &lt; 33%</Typography>
            <Typography>Danger: &gt; 50%</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr />
        <tr />
        <tr />
        {clientPercentages.map((data, index) => (
          <PercentageCell animDelay={index + 1} key={index} data={data} />
        ))}
      </tbody>
    </Table>
  )
}

export default Diversity
