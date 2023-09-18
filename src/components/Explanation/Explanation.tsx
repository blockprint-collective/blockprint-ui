'use client'
import SideModal from '@/components/SideModal/SideModal';
import Typography from '@/components/Typography/Typography';
import InfoSelect from '@/components/InfoSelect/InfoSelect';
import {FC, useState} from 'react';

export interface ExplanationProps {
    title: string,
    texts: string[]
}

const Explanation:FC<ExplanationProps> = ({title, texts}) => {
    const [isOpen, toggleModal] = useState(false)
    const openModal = () => toggleModal(true)
    const closeModal = () => toggleModal(false)

  return (
      <div>
          <SideModal onClose={closeModal} isOpen={isOpen}>
              <div className="space-y-10">
                  <Typography type="text-base6" isBold className="italic leading-title2" isCapitalize>{title}</Typography>
                  <div className="space-y-4 lg:pr-16">
                      {texts.map((info, index) => (
                          <Typography key={index} fontWeight="font-light" type="text-base1" className="leading-5">
                              {info}
                          </Typography>
                      ))}
                  </div>
              </div>
          </SideModal>
          <InfoSelect onClick={openModal} text={title}/>
      </div>
  )
}

export default Explanation