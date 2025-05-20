import Typography from '@/components/Typography/Typography'
import SideModal, { SideModalProps } from '@/components/SideModal/SideModal'
import { FC } from 'react'

export interface PartialSideModalProps extends Pick<SideModalProps, 'onClose' | 'isOpen'> {
  title: string
  texts: string[]
}

const ExplainModal: FC<PartialSideModalProps> = ({ texts, title, ...props }) => {
  return (
    <SideModal {...props}>
      <div className='space-y-10'>
        <Typography type='text-base6' isBold className='italic leading-title2' isCapitalize>
          {title}
        </Typography>
        <div className='space-y-4 lg:pr-16'>
          {texts.map((info, index) => (
            <Typography key={index} fontWeight='font-light' type='text-base1' className='leading-5'>
              {info}
            </Typography>
          ))}
        </div>
      </div>
    </SideModal>
  )
}

export default ExplainModal
