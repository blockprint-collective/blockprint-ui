'use client'
import InfoSelect from '@/components/InfoSelect/InfoSelect';
import {FC, useState} from 'react';
import ExplainModal from '@/components/ExplainModal/ExplainModal';

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
          <ExplainModal title={title} texts={texts} isOpen={isOpen} onClose={closeModal}/>
          <InfoSelect onClick={openModal} text={title}/>
      </div>
  )
}

export default Explanation