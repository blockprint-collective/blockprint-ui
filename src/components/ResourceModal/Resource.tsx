import {FC} from 'react';
import {ResourceData} from '@/types';
import Typography from '@/components/Typography/Typography';

export interface ResourceProps {
    data: ResourceData
}

const Resource:FC<ResourceProps> = ({data}) => {
   const { title, site, github, discord, docs } = data
  return (
      <li className="w-full flex justify-between border-b border-light50 py-4">
          <a target="_blank" href={site} rel="noreferrer">
              <div className="flex space-x-4 items-center">
                  <Typography type="text-base2" className="lg:text-base3">{title}</Typography>
                  <i className="bi-box-arrow-up-right text-light"/>
              </div>
          </a>
          <div className="flex space-x-4">
              <a target="_blank" href={docs} rel="noreferrer">
                  <div className="flex space-x-2 items-center border border-light rounded-full py-1 px-3">
                      <Typography>Docs</Typography>
                      <i className="bi-book text-light"/>
                  </div>
              </a>
              <div className="flex space-x-4">
                  <a target="_blank" href={discord} rel="noreferrer">
                      <i className="bi-discord text-light text-base3"/>
                  </a>
                  <a target="_blank" href={github} rel="noreferrer">
                      <i className="bi-github text-light text-base3"/>
                  </a>
              </div>
          </div>
      </li>
  )
}

export default Resource;