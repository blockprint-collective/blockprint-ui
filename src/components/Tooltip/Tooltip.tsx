'use client'

import Typography from '@/components/Typography/Typography'
import { FC, ReactNode, useMemo } from 'react'
import useMonitorDivMetrics from '@/hooks/useMonitorDivMetrics'
import useDivDimensions from '@/hooks/useDivDimensions'

export interface TooltipProps {
  text: string
  children: ReactNode | ReactNode[]
  maxWidth?: number
}

const Tooltip: FC<TooltipProps> = ({ text, children, maxWidth }) => {
  const { ref, dimensions } = useMonitorDivMetrics()
  const { ref: divRef, dimensions: toolDimensions } = useDivDimensions()

  const toolPosition = useMemo(() => {
    if (!dimensions || !toolDimensions) return

    const { x, y, width } = dimensions
    const { height: toolHeight } = toolDimensions
    return {
      left: x + width / 2,
      top: y - (toolHeight + 15),
    }
  }, [dimensions, toolDimensions])

  return (
    <div className='relative group'>
      <div
        ref={divRef}
        style={{ left: toolPosition?.left, top: toolPosition?.top, maxWidth }}
        className='p-2 z-30 translate-y-6 opacity-0 transition-all ease-in-out pointer-events-none duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-x-1/2 bg-black fixed rounded-md top-0 left-0'
      >
        {text && (
          <Typography color='text-light' className='text-left' type='text-tiny'>
            {text}
          </Typography>
        )}
        <div className='arrow-down absolute -bottom-2 left-1/2 -translate-x-1/2' />
      </div>
      <div className='cursor-pointer' ref={ref}>
        {children}
      </div>
    </div>
  )
}

export default Tooltip
