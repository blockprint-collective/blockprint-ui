import {DISCORD_URL, GITHUB_URL} from '@/constants';

const ExtraResources = () => {
  return (
      <div className="flex space-x-4">
          <a target="_blank" href={GITHUB_URL} rel="noreferrer">
              <i className="bi-discord text-light w-5 h-5"/>
          </a>
          <a target="_blank" href={DISCORD_URL} rel="noreferrer">
              <i className="bi-github text-light w-5 h-5"/>
          </a>
      </div>
  )
}

export default ExtraResources;