import useWindowManager from '@/stores/window_manager-store'

import TrafficLight from './TrafficLights/TrafficLight'

import { App, ManageAppAction } from '@/types/apps'

interface TrafficLightsProps {
  app: App
}

const TrafficLights = ({ app }: TrafficLightsProps) => {
  const { manageApp, focusedWindow } = useWindowManager()
  const isAppFocused = focusedWindow === app
  return (
    <section className='group flex gap-2'>
      <TrafficLight
        icon='Cross2Icon'
        color='bg-red-500'
        isAppFocused={isAppFocused}
        onClick={() => manageApp(app, ManageAppAction.CLOSE)}
      />
      <TrafficLight
        icon='MinusIcon'
        color='bg-yellow-500'
        isAppFocused={isAppFocused}
        onClick={() => manageApp(app, ManageAppAction.MINIMIZE)}
      />
      <TrafficLight
        icon='HeightIcon'
        color='bg-green-500'
        className='-rotate-45'
        isAppFocused={isAppFocused}
      />
    </section>
  )
}

export default TrafficLights
