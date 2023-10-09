'use client'

import {
    RecoilRoot,
} from 'recoil';

import Background from '@/components/Background/Background';
import TopBar from '@/components/TopBar/TopBar';
import Header from '@/components/Header/Header';
import DiversityTable from '@/components/DiversityTable/DiversityTable';
import PrecisionTable from '@/components/PrecisionTable/PrecisionTable';
import ShoutOuts from '@/components/ShoutOuts/ShoutOuts';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Footer from '@/components/Footer/Footer';
import React, {FC, useRef} from 'react';
import {DiversityResults, PrecisionResults} from '@/types';

export interface MainProps {
    diversity: DiversityResults
    confusion: PrecisionResults
}


const Main:FC<MainProps> = ({diversity, confusion}) => {
  const precisionRef = useRef(null);
  const diversityRef = useRef(null);

  const scrollToPrecisionTable = () => {
      precisionRef.current.scrollIntoView()
  }

    const scrollToDiversityTable = () => {
        diversityRef.current.scrollIntoView()
    }
  return (
      <RecoilRoot>
          <main className='bg-dark h-screen w-screen'>
              <Background/>
              <div className="relative h-screen w-screen z-10">
                  <TopBar onScrollDiversity={scrollToDiversityTable} onScrollPrecision={scrollToPrecisionTable}/>
                  <Header ref={diversityRef}/>
                  <DiversityTable diversity={diversity}/>
                  <PrecisionTable ref={precisionRef} confusion={confusion} />
                  <ShoutOuts/>
                  <HowItWorks/>
                  <Footer onScrollDiversity={scrollToDiversityTable} onScrollPrecision={scrollToPrecisionTable}/>
              </div>
          </main>
      </RecoilRoot>
  )
}

export default Main