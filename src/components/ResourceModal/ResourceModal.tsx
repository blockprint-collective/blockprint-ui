import SideModal from '@/components/SideModal/SideModal'
import { FC } from 'react'
import Typography from '@/components/Typography/Typography'
import { RESOURCES } from '@/constants'
import Resource from '@/components/ResourceModal/Resource'

export interface ResourceModalProps {
  isOpen: boolean
  onClose: () => void
}

const ResourceModal: FC<ResourceModalProps> = (props) => {
  return (
    <SideModal {...props}>
      <div>
        <Typography
          type='text-base5'
          isBold
          className='italic leading-title2 lg:text-base6'
          isCapitalize
        >
          Client <br /> Resources
        </Typography>
      </div>
      <ul className='space-y-2 mt-12'>
        {RESOURCES.map((resource, index) => (
          <Resource key={index} data={resource} />
        ))}
      </ul>
    </SideModal>
  )
}

export default ResourceModal
