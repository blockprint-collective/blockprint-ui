import Image from 'next/image';

const Background = () => {
  return (
      <Image priority className="absolute left-0 top-0 z-0 h-screen" fill src="/blockprint-bg.png" alt="SigP"/>
  )
}

export default Background