import TrafficLights from './TrafficLights'

import { App } from '@/types/apps'

interface FinderProps {
  app: App
}

const Finder = ({ app }: FinderProps) => {
  return (
    <div className='grid h-full w-full'>
      <TrafficLights app={app} />
    </div>
  )
}

export default Finder
