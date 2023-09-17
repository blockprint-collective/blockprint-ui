import { getConfusion } from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import background from '../assets/image/blockprint-bg.png'
import Image from 'next/image';

export default async function Home() {
  const data = await getConfusion()

  return (
    <main className='bg-dark h-screen w-screen'>
        <Image layout="fill" className="absolute left-0 top-0 z-0" src={background} alt=""/>
        <div className="relative h-screen w-screen z-10">
            <TopBar/>
            <Header/>
            <PrecisionTable data={data} />
            <HowItWorks/>
        </div>
    </main>
  )
}
