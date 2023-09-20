import {DISCORD_URL, GITHUB_URL} from '@/constants';
import {FC} from 'react';

export interface ExtraResourcesProps {
    size?: 'md' | 'lg'
}

const ExtraResources:FC<ExtraResourcesProps> = ({size = 'md'}) => {
   const iconSizes = size === 'lg' ? 'text-base4' : 'text-base'

  return (
      <div className="flex space-x-4">
          <a target="_blank" href={GITHUB_URL} rel="noreferrer">
              <i className={`bi-discord text-light ${iconSizes}`}/>
          </a>
          <a target="_blank" href={DISCORD_URL} rel="noreferrer">
              <i className={`bi-github text-light ${iconSizes}`}/>
          </a>
      </div>
  )
}

export default ExtraResources;