import {getConfusion, getDiversity} from '@/api/blockprint'
import getEpochRange from '@/utils/getEpochRange';
import Main from '@/app/Main';

export default async function Home() {
  const confusion = await getConfusion()
  const {start, end} = getEpochRange()
  const diversity = await getDiversity(start, end)

  return (
      <Main confusion={confusion} diversity={diversity}/>
  )
}
