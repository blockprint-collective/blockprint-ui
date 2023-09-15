import { getConfusion } from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'
import TopBar from '@/components/TopBar/TopBar';

export default async function Home() {
  const data = await getConfusion()

  return (
    <main className='bg-dark h-screen w-screen'>
        <TopBar/>
        <div className="py-24 px-32">
            <PrecisionTable data={data} />
        </div>
    </main>
  )
}
