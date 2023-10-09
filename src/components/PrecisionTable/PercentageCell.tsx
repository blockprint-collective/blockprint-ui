'use client'
import Typography from '@/components/Typography/Typography';
import PercentageFill from '@/components/PrecisionTable/PercentageFill';
import {ClientDiversityResult} from '@/types';
import {FC, useEffect, useState} from 'react';

export interface PercentageCellProps {
    data: ClientDiversityResult
    animDelay?: number
    isAnimate?: boolean
}

const PercentageCell:FC<PercentageCellProps> = ({data, animDelay, isAnimate = true}) => {
  const { client, percentage } = data;
  const [value, setValue] = useState(0)

  useEffect(() => {
      if(isAnimate) {
          setTimeout(() => {
              setValue(Number(percentage))
          }, animDelay * 100)
      }
  }, [animDelay, percentage, isAnimate])

    useEffect(() => {
        return () => {
            setValue(0)
        }
    }, [])

  return (
      <tr>
          <td>
              <div className="flex items-center pr-5">
                  <div className="w-24 md:w-32 px-4 py-3">
                      <Typography className="md:text-base" type="text-xs">{client}</Typography>
                      <Typography type="text-xs" className="md:hidden" color="text-light80">{percentage} %</Typography>
                  </div>
                  <PercentageFill percentage={value}/>
                  <div className="w-16 hidden md:block">
                      <Typography type="text-xs" color="text-light80" className="text-right">{percentage} %</Typography>
                  </div>
              </div>
          </td>
      </tr>
  )
}

export default PercentageCell