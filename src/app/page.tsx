import { getConfusion } from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';

export default async function Home() {
  const data = await getConfusion()

  return (
    <main className='bg-dark h-screen w-screen'>
        <TopBar/>
        <Header/>
        <PrecisionTable data={data} />
    </main>
  )
}
