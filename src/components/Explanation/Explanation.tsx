'use client'
import InfoSelect from '@/components/InfoSelect/InfoSelect'
import { FC, useState } from 'react'
import ExplainModal from '@/components/ExplainModal/ExplainModal'
import { motion, MotionProps } from 'framer-motion'

export interface ExplanationProps extends MotionProps {
  title: string
  texts: string[]
}

const Explanation: FC<ExplanationProps> = ({ title, texts, ...props }) => {
  const [isOpen, toggleModal] = useState(false)
  const openModal = () => toggleModal(true)
  const closeModal = () => toggleModal(false)

  return (
    <motion.div {...props}>
      <ExplainModal title={title} texts={texts} isOpen={isOpen} onClose={closeModal} />
      <InfoSelect onClick={openModal} text={title} />
    </motion.div>
  )
}

export default Explanation
