'use client'
import Image from 'next/image';
import background from '@/assets/image/blockprint-bg.png';

const Background = () => {
  return (
      <Image className="absolute left-0 top-0 z-0 h-screen" src={background} alt=""/>
  )
}

export default Background