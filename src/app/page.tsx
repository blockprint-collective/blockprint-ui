import { getConfusion } from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'

export default async function Home() {
  const data = await getConfusion()

  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center p-24'>
      <PrecisionTable data={data} />
    </main>
  )
}
