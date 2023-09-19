'use client'
import Image from 'next/image';
import {useState} from 'react';
import addClassString from '@/utils/addClassString';

const Background = () => {
  const [isView, setView] = useState(true)
  const classes = addClassString('absolute left-0 top-0 z-0 h-screen', [
      !isView && 'hidden'
  ])

  const hideImage = () => setView(false)
  return (
      <Image priority onError={hideImage} className={classes} fill src="/blockprint-bg.png" alt="SigP"/>
  )
}

export default Background