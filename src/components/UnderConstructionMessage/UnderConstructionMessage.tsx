import Typography from '@/components/Typography/Typography'
import { FC } from 'react'
import addClassString from '@/utils/addClassString'

export interface UnderConstructionMessageProps {
  containerClasses?: string
  subText?: string
}

const UnderConstructionMessage: FC<UnderConstructionMessageProps> = ({
  containerClasses,
  subText,
}) => {
  const classes = addClassString('max-w-lg1.5 lg:max-w-xl xl:max-w-table table-container', [
    containerClasses,
  ])
  return (
    <div className={classes}>
      <Typography color='text-light50'>Blockprint is currently undergoing retraining.</Typography>
      {subText && <Typography color='text-light50'>{subText}</Typography>}
    </div>
  )
}

export default UnderConstructionMessage
