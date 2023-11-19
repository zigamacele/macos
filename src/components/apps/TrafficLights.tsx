import { useContext } from 'react'

import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

import TrafficLight from './TrafficLights/TrafficLight'
import { CurrentAppContext } from '../homescreen/windowManager/AppWindow'

import { ManageAppAction } from '@/types/apps'

interface TrafficLightsProps {
  position?: string
}

const TrafficLights = ({ position }: TrafficLightsProps) => {
  const { manageApp } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  return (
    <section
      className={cn(
        'group absolute left-4 top-4 z-30 flex gap-[7px]',
        position,
      )}
    >
      <TrafficLight
        icon='Cross2Icon'
        color='bg-red-500'
        className='group-hover:bg-red-500'
        onClick={() => manageApp(currentApp, ManageAppAction.CLOSE)}
      />
      <TrafficLight
        icon='MinusIcon'
        color='bg-yellow-500'
        className='group-hover:bg-yellow-500'
        onClick={() => manageApp(currentApp, ManageAppAction.MINIMIZE)}
      />
      <TrafficLight
        icon='HeightIcon'
        color='bg-green-500'
        className='-rotate-45 group-hover:bg-green-500'
      />
    </section>
  )
}

export default TrafficLights
