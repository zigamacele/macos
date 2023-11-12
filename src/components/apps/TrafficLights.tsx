import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

import TrafficLight from './TrafficLights/TrafficLight'

import { App, ManageAppAction } from '@/types/apps'

interface TrafficLightsProps {
  app: App
  position?: string
}

const TrafficLights = ({ app, position }: TrafficLightsProps) => {
  const { manageApp, focusedWindow } = useWindowManager()
  const isAppFocused = focusedWindow === app
  return (
    <section
      className={cn('group absolute left-3 top-4 z-30 flex gap-2', position)}
    >
      <TrafficLight
        icon='Cross2Icon'
        color='bg-red-500'
        className='group-hover:bg-red-500'
        isAppFocused={isAppFocused}
        onClick={() => manageApp(app, ManageAppAction.CLOSE)}
      />
      <TrafficLight
        icon='MinusIcon'
        color='bg-yellow-500'
        className='group-hover:bg-yellow-500'
        isAppFocused={isAppFocused}
        onClick={() => manageApp(app, ManageAppAction.MINIMIZE)}
      />
      <TrafficLight
        icon='HeightIcon'
        color='bg-green-500'
        className='-rotate-45 group-hover:bg-green-500'
        isAppFocused={isAppFocused}
      />
    </section>
  )
}

export default TrafficLights
