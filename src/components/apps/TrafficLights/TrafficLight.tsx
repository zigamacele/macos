import { useContext } from 'react'

import { CurrentAppContext } from '@/components/homescreen/windowManager/AppWindow'
import Icon from '@/components/Icon'

import useWindowManager from '@/stores/window_manager-store'

import { cn } from '@/utils/styles'

interface TrafficLightProps {
  icon: string
  color: string
  className?: string
  onClick?: () => void
}

const TrafficLight = ({
  icon,
  color,
  className,
  onClick,
}: TrafficLightProps) => {
  const { isAppFocused } = useWindowManager()
  const currentApp = useContext(CurrentAppContext)
  return (
    <button
      className={cn(
        'flex h-3 w-3 items-center justify-center rounded-full bg-neutral-600 p-0.5 text-black/60 transition-colors',
        isAppFocused(currentApp) && color,
        className,
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick()
      }}
    >
      <Icon icon={icon} className='rotate hidden group-hover:block' />
    </button>
  )
}

export default TrafficLight
