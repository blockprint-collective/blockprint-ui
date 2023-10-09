'use client'

import ExplainModal, {PartialSideModalProps} from '@/components/ExplainModal/ExplainModal';
import {FC, useState} from 'react';

export interface InfoModalProps extends Pick<PartialSideModalProps, 'title' | 'texts'> {}

const InfoModal:FC<InfoModalProps> = (props) => {
    const [isModal, toggleModal] = useState(false)

    const openModal = () => toggleModal(true)
    const closeModal = () => toggleModal(false)

  return (
      <>
          <i onClick={openModal} className="bi-info-circle text-light cursor-pointer"/>
          <div className="text-left">
              <ExplainModal {...props} isOpen={isModal} onClose={closeModal}/>
          </div>
      </>
  )
}

export default InfoModal