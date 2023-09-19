import {getConfusion, getDiversity} from '@/api/blockprint'
import PrecisionTable from '@/components/PercisionTable/PrecisionTable'
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Footer from '@/components/Footer/Footer';
import getEpochRange from '@/utils/getEpochRange';
import Background from '@/components/Background/Background';
import SigmaPrime from '@/components/SigmaPrime/SigmaPrime';

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
            <PrecisionTable diversity={diversity} confusion={confusion} />
            <div className="lg:hidden x-padding py-12">
                <SigmaPrime/>
            </div>
            <HowItWorks/>
            <Footer/>
        </div>
    </main>
  )
}
