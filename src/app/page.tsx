import {getConfusion, getDiversity} from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Footer from '@/components/Footer/Footer';
import getEpochRange from '@/utils/getEpochRange';
import Background from '@/components/Background/Background';
import ShoutOuts from '@/components/ShoutOuts/ShoutOuts';
import DiversityTable from '@/components/DiversityTable/DiversityTable';

export default async function Home() {
  const confusion = await getConfusion()
  const {start, end} = getEpochRange()
  const diversity = await getDiversity(start, end)

  return (
    <main className='bg-dark h-screen w-screen'>
        <Background/>
        <div className="relative h-screen w-screen z-10">
            <TopBar/>
            <Header/>
            <DiversityTable diversity={diversity}/>
            <PrecisionTable confusion={confusion} />
            <ShoutOuts/>
            <HowItWorks/>
            <Footer/>
        </div>
    </main>
  )
}
