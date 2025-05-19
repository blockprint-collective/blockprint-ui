'use client'
import Image from 'next/image'
import { useState } from 'react'
import addClassString from '@/utils/addClassString'
import BlockBg from '../../assets/image/block-bg.svg'

const Background = () => {
  const [isView, setView] = useState(true)
  const classes = addClassString('absolute left-0 top-0 z-0', [!isView && 'hidden'])

  const hideImage = () => setView(false)
  return <Image priority onError={hideImage} className={classes} fill src={BlockBg} alt='SigP' />
}

export default Background
